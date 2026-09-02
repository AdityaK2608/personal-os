/* Personal OS AI Core v19 — Adaptive Local Agent
   No external API. Adds confidence, context ranking, multi-step plans, date parsing,
   fuzzy task resolution, safe actions, conversation memory and self-observation.
*/
(function(g){'use strict';
const KEY='personal_os_v80',MEM='personal_os_v12_memory',LOG='personal_os_ai_v19_log',V=19;
const lanes=['NOW','FOLLOW-UP','WAITING','SOMEDAY','BLOCKED'];
const read=(k,f)=>{try{return JSON.parse(localStorage.getItem(k)||'null')??f}catch(e){return f}};
const write=(k,v)=>localStorage.setItem(k,JSON.stringify(v));
const db=()=>read(KEY,{tasks:[],projects:[],notes:[],decisions:[],journal:[],activity:[]});
const mem=()=>read(MEM,[]); const iso=()=>new Date().toISOString();
const date=n=>{let d=new Date();d.setDate(d.getDate()+n);return d.toISOString().slice(0,10)};
const norm=s=>String(s||'').toLowerCase().replace(/[^a-z0-9\s-]/g,' ').replace(/\s+/g,' ').trim();
function score(t){let s={High:60,Medium:30,Low:10}[t.priority]||10;s+=t.lane==='NOW'?25:0;s+=t.status==='Blocked'?-25:0;if(t.due){let n=Math.ceil((new Date(t.due+'T23:59:59')-new Date())/864e5);s+=n<0?60:n===0?40:n<=2?25:0}return s}
function ctx(){let d=db(),open=(d.tasks||[]).filter(t=>t.status!=='Done'),td=date(0);return{d,open,overdue:open.filter(t=>t.due&&t.due<td),soon:open.filter(t=>t.due&&t.due>=td&&t.due<=date(2)),blocked:open.filter(t=>t.status==='Blocked'||t.lane==='BLOCKED'),memory:mem()}}
function similarity(a,b){let A=new Set(norm(a).split(' ')),B=new Set(norm(b).split(' '));let hit=0;A.forEach(x=>B.has(x)&&x.length>2&&hit++);return hit/Math.max(1,Math.min(A.size,B.size))}
function resolveTask(c,text){let q=norm(text),rank=c.open.map(t=>({t,s:Math.max(similarity(q,t.title),q===String(t.id)?1:0)})).sort((a,b)=>b.s-a.s);return rank[0]||null}
function parse(q){let raw=String(q||'').trim(),l=norm(raw),p={intent:'unknown',confidence:.25,args:{raw}};
 const set=(i,c=.9,a={})=>{p.intent=i;p.confidence=c;p.args=Object.assign(p.args,a)};
 if(/^(hi|hello|hey|yo)\b/.test(l))set('greet');
 else if(/\b(briefing|today|start my day|what should i do first)\b/.test(l))set('briefing');
 else if(/\b(plan|prioriti[sz]e|organize my day|schedule my work)\b/.test(l))set('plan');
 else if(/\b(review|status|health|summary|how am i doing)\b/.test(l))set('review');
 else if(/\b(overdue|late|past due)\b/.test(l))set('overdue');
 else if(/\b(blocked|stuck|waiting)\b/.test(l))set('blocked');
 else if(/^(add|create|new)\s+(a\s+)?task\b|\bremind me to\b/.test(l))set('create_task',.94,{title:raw.replace(/^(add|create|new)\s+(a\s+)?task\s*/i,'').replace(/^remind me to\s*/i,'').trim()});
 else if(/\b(complete|finish|done|close|mark)\b.*\btask\b/.test(l))set('complete_task',.92,{target:raw.replace(/^.*?\btask\b\s*/i,'').trim()});
 else if(/\b(move|shift|put)\b.*\bto\b/.test(l)){let m=raw.match(/(?:move|shift|put)\s+(?:task\s+)?(.+?)\s+to\s+(now|follow-up|waiting|someday|blocked)/i);set('move_task',.93,{target:m?m[1]:raw,lane:m?m[2].toUpperCase():''})}
 else if(/^remember\b/.test(l))set('remember',.96,{text:raw.replace(/^remember\s*/i,'').trim()});
 else if(/^recall\b|\bdo you remember\b/.test(l))set('recall',.95,{term:raw.replace(/^recall\s*/i,'').replace(/^do you remember\s*/i,'').trim()});
 else if(/^find\b|^search\b/.test(l))set('search',.93,{term:raw.replace(/^(find|search)\s*/i,'').trim()});
 else if(/^note\b|^capture\b/.test(l))set('note',.95,{text:raw.replace(/^(note|capture)\s*/i,'').trim()});
 else if(/\bhelp\b|what can you do/.test(l))set('help');
 return p}
function audit(d,text,meta){d.activity=d.activity||[];d.activity.unshift({id:Date.now(),text,time:iso(),source:'AI-v19',meta:meta||{}});d.activity=d.activity.slice(0,250);d.updatedAt=iso();write(KEY,JSON.stringify(d));let l=read(LOG,[]);l.unshift({time:iso(),text,meta:meta||{}});write(LOG,l.slice(0,300))}
function answer(text,actions,confidence){return{version:V,text,actions:actions||[],confidence:confidence??.9}}
function run(q){let p=parse(q),c=ctx(),d=c.d;
 switch(p.intent){
 case'greet':return answer('Ready. I can reason over your Personal OS, remember context, build plans, search your data and execute safe work actions.');
 case'help':return answer('I can: brief your day, build a priority plan, find overdue/blocked work, create/complete/move tasks, search your OS, capture notes, remember facts and recall them.');
 case'briefing':{let top=c.open.slice().sort((a,b)=>score(b)-score(a)).slice(0,5);let risk=c.overdue.length+c.blocked.length;return answer('DAILY BRIEFING\n\nFOCUS\n'+(top[0]?.title||'Nothing urgent')+'\n\nTOP QUEUE\n'+(top.map((t,i)=>(i+1)+'. '+t.title+' ['+score(t)+']').join('\n')||'Empty')+'\n\nOVERDUE '+c.overdue.length+' · DUE SOON '+c.soon.length+' · BLOCKED '+c.blocked.length+'\n\n'+(risk?'Protect execution: clear the highest-risk item before adding new work.':'System looks clean. Use the highest-scoring item as your starting point.'));}
 case'plan':{let q=c.open.slice().sort((a,b)=>score(b)-score(a)).slice(0,7);return answer('EXECUTION PLAN\n\n'+(q.map((t,i)=>(i+1)+'. '+t.title+' — '+(t.priority||'Medium')+' — '+(t.due||'no date')+' — '+(t.lane||'NOW')).join('\n')||'Nothing queued.')+'\n\nRule: finish the first meaningful item before pulling more work into NOW.');}
 case'review':return answer('OS REVIEW\nOpen '+c.open.length+' · Overdue '+c.overdue.length+' · Due soon '+c.soon.length+' · Blocked '+c.blocked.length+'\nProjects '+(d.projects||[]).length+' · Notes '+(d.notes||[]).length+' · Decisions '+(d.decisions||[]).length+' · Memory '+c.memory.length+'\nAI events '+read(LOG,[]).length);
 case'overdue':return answer(c.overdue.length?'OVERDUE\n\n'+c.overdue.map(t=>'• '+t.title+' — '+t.due+' — '+(t.priority||'Medium')).join('\n'):'No overdue work.');
 case'blocked':return answer(c.blocked.length?'BLOCKED / WAITING\n\n'+c.blocked.map(t=>'• '+t.title+' — '+(t.lane||t.status)).join('\n'):'Nothing blocked.');
 case'create_task':{if(!p.args.title)return answer('What should the task be?');let title=p.args.title,due='';if(/\btomorrow\b/i.test(title)){due=date(1);title=title.replace(/\s*\btomorrow\b/i,'').trim()}else if(/\btoday\b/i.test(title)){due=date(0);title=title.replace(/\s*\btoday\b/i,'').trim()}let t={id:Date.now(),title,project:'',area:'Inbox',lane:'NOW',priority:/\b(urgent|critical|high)\b/i.test(title)?'High':'Medium',status:'Todo',due,context:'Computer',createdAt:iso()};d.tasks=d.tasks||[];d.tasks.push(t);audit(d,'AI created task: '+title,{intent:p.intent});return answer('Created: '+title+(due?' · due '+due:''),[{type:'task_created',id:t.id}],.97)}
 case'complete_task':{let r=resolveTask(c,p.args.target);if(!r||r.s<.45)return answer('I am not confident which task you mean. Try the exact task name.',[],.45);r.t.status='Done';r.t.completedAt=iso();audit(d,'AI completed task: '+r.t.title,{id:r.t.id,confidence:r.s});return answer('Completed: '+r.t.title,[{type:'task_completed',id:r.t.id}],Math.min(.99,r.s));}
 case'move_task':{if(!lanes.includes(p.args.lane))return answer('Choose one lane: NOW, FOLLOW-UP, WAITING, SOMEDAY or BLOCKED.');let r=resolveTask(c,p.args.target);if(!r||r.s<.45)return answer('I am not confident which task you mean. Try the exact task name.',[],.45);r.t.lane=p.args.lane;if(p.args.lane==='BLOCKED')r.t.status='Blocked';else if(r.t.status==='Blocked')r.t.status='Todo';audit(d,'AI moved task: '+r.t.title+' → '+p.args.lane,{id:r.t.id});return answer('Moved: '+r.t.title+' → '+p.args.lane,[{type:'task_moved',id:r.t.id,lane:p.args.lane}]);}
 case'remember':{if(!p.args.text)return answer('Tell me what to remember.');let m=c.memory;m.unshift({id:Date.now(),text:p.args.text,time:iso(),source:'AI-v19'});write(MEM,m.slice(0,150));return answer('Remembered locally.');}
 case'recall':{let term=norm(p.args.term),h=c.memory.filter(x=>!term||norm(x.text).includes(term)).slice(0,10);return answer(h.length?'MEMORY\n\n'+h.map(x=>'• '+x.text).join('\n'):'No matching memory found.');}
 case'search':{let term=norm(p.args.term),h=[];['tasks','projects','notes','decisions','journal'].forEach(k=>(d[k]||[]).forEach(x=>{let s=JSON.stringify(x);if(norm(s).includes(term))h.push((k.slice(0,-1))+': '+(x.title||x.name||x.text||x.decision||'entry'))}));return answer(h.length?'SEARCH RESULTS\n\n'+h.slice(0,25).map(x=>'• '+x).join('\n'):'No local matches.');}
 case'note':{if(!p.args.text)return answer('Tell me what to capture.');d.notes=d.notes||[];d.notes.push({id:Date.now(),title:'AI Capture',tag:'Captured',body:p.args.text,area:'Inbox',createdAt:iso()});audit(d,'AI captured note',{text:p.args.text});return answer('Captured as a note.');}
 default:return answer('I understood the request only partially. Try asking naturally, for example: “what should I work on first?”, “move firewall task to waiting”, or “what is overdue?”',[],.25);
 }}
 g.PersonalOSAI={version:V,parse,run,context:ctx,score,resolveTask};
})(window);
