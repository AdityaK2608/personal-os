/* Personal OS AI Core v18
   Local-first intelligence layer. No external API, no secrets.
   Designed as a replaceable engine: parser -> context -> reasoning -> action -> response.
*/
(function(global){'use strict';
  const KEY='personal_os_v80', MEM='personal_os_v12_memory', VERSION=18;
  const lanes=['NOW','FOLLOW-UP','WAITING','SOMEDAY','BLOCKED'];
  const norm=s=>String(s||'').trim().toLowerCase();
  const read=(k,f)=>{try{return JSON.parse(localStorage.getItem(k))??f}catch(e){return f}};
  const write=(k,v)=>localStorage.setItem(k,JSON.stringify(v));
  const data=()=>read(KEY,{tasks:[],projects:[],notes:[],decisions:[],journal:[],activity:[]});
  const memories=()=>read(MEM,[]);
  const today=()=>new Date().toISOString().slice(0,10);
  function daysFromNow(n){const d=new Date();d.setDate(d.getDate()+n);return d.toISOString().slice(0,10)}
  function score(t){let s={High:60,Medium:30,Low:10}[t.priority]||10;s+=t.lane==='NOW'?25:0;s+=t.status==='Blocked'?-25:0;if(t.due){const delta=Math.ceil((new Date(t.due+'T23:59:59')-new Date())/864e5);if(delta<0)s+=60;else if(delta===0)s+=40;else if(delta<=2)s+=25}return s}
  function context(){const d=data(),open=(d.tasks||[]).filter(t=>t.status!=='Done'),td=today();return{d,open,overdue:open.filter(t=>t.due&&t.due<td),dueSoon:open.filter(t=>t.due&&t.due>=td&&t.due<=daysFromNow(2)),blocked:open.filter(t=>t.status==='Blocked'||t.lane==='BLOCKED'),memory:memories()}}
  function parse(q){const raw=String(q||'').trim(),l=norm(raw);let intent='unknown',args={raw};
    if(/^(hi|hello|hey|yo)\b/.test(l)) intent='greet';
    else if(/\b(briefing|today|what should i do|start my day)\b/.test(l)) intent='briefing';
    else if(/\b(plan|prioriti[sz]e|schedule)\b/.test(l)) intent='plan';
    else if(/\b(review|status|health|summary)\b/.test(l)) intent='review';
    else if(/\b(overdue|late|past due)\b/.test(l)) intent='overdue';
    else if(/\b(blocked|stuck|waiting)\b/.test(l)) intent='blocked';
    else if(/^(add|create|new)\s+(a\s+)?task\b/.test(l)||/\bremind me to\b/.test(l)){intent='create_task';args.title=raw.replace(/^(add|create|new)\s+(a\s+)?task\s*/i,'').replace(/^remind me to\s*/i,'').trim()}
    else if(/\b(complete|finish|done|mark)\b/.test(l)&&/\btask\b/.test(l)){intent='complete_task'}
    else if(/\b(move|shift|put)\b/.test(l)&&/\b(task|to)\b/.test(l)){intent='move_task'}
    else if(/^remember\b|\bremember this\b/.test(l)){intent='remember';args.text=raw.replace(/^remember(?: this)?\s*/i,'').trim()}
    else if(/^recall\b|\bdo you remember\b/.test(l)){intent='recall';args.term=raw.replace(/^recall\s*/i,'').replace(/^do you remember\s*/i,'').trim()}
    else if(/^find\b|\bsearch\b/.test(l)){intent='search';args.term=raw.replace(/^(find|search)\s*/i,'').trim()}
    else if(/^note\b|\bcapture\b/.test(l)){intent='note';args.text=raw.replace(/^(note|capture)\s*/i,'').trim()}
    return{intent,args,confidence:intent==='unknown'?.25:.9}
  }
  function findTask(c,q){const term=norm(q);return c.open.find(t=>String(t.id)===q)||c.open.find(t=>norm(t.title)===term)||c.open.find(t=>norm(t.title).includes(term))}
  function save(d){d.updatedAt=new Date().toISOString();write(KEY,d);return d}
  function audit(d,text,meta){d.activity=d.activity||[];d.activity.unshift({id:Date.now(),text,time:new Date().toISOString(),source:'AI',meta:meta||{}});d.activity=d.activity.slice(0,200);save(d)}
  function response(text,actions){return{text,actions:actions||[],version:VERSION}}
  function run(q){const p=parse(q),c=context(),d=c.d;switch(p.intent){
    case'greet':return response('Ready. I can plan your day, manage work, search your OS, use memory, and execute task changes.');
    case'briefing':{const top=c.open.slice().sort((a,b)=>score(b)-score(a)).slice(0,5);return response('FOCUS: '+(top[0]?.title||'No urgent work')+'\n\nOVERDUE: '+(c.overdue[0]?.title||'None')+'\n\nDUE SOON: '+(c.dueSoon.slice(0,3).map(t=>t.title).join('\n')||'None')+'\n\nBLOCKED: '+c.blocked.length+'\n\nRecommended: protect the highest-scoring action first.');}
    case'plan':{const list=c.open.slice().sort((a,b)=>score(b)-score(a)).slice(0,7);return response('EXECUTION PLAN\n\n'+(list.map((t,i)=>(i+1)+'. '+t.title+' — '+(t.priority||'Medium')+' — '+(t.due||'no date')).join('\n')||'Nothing queued.'));}
    case'review':return response('SYSTEM REVIEW\nOpen '+c.open.length+' · Overdue '+c.overdue.length+' · Due soon '+c.dueSoon.length+' · Blocked '+c.blocked.length+'\nProjects '+(d.projects||[]).length+' · Decisions '+(d.decisions||[]).length+' · Notes '+(d.notes||[]).length+' · Memory '+c.memory.length);
    case'overdue':return response(c.overdue.length?'OVERDUE\n\n'+c.overdue.map(t=>'• '+t.title+' — '+t.due).join('\n'):'No overdue work.');
    case'blocked':return response(c.blocked.length?'BLOCKED / WAITING\n\n'+c.blocked.map(t=>'• '+t.title+' — '+(t.lane||t.status)).join('\n'):'Nothing blocked.');
    case'create_task':{const title=p.args.title;if(!title)return response('Tell me what the task is, e.g. “add task review firewall logs”.');const t={id:Date.now(),title,project:'',area:'Inbox',lane:'NOW',priority:'Medium',status:'Todo',due:'',context:'Computer',createdAt:new Date().toISOString()};d.tasks=d.tasks||[];d.tasks.push(t);audit(d,'AI created task: '+title,{intent:p.intent});return response('Created task: '+title,[{type:'task_created',id:t.id}]);}
    case'complete_task':{const t=findTask(c,p.args.raw.replace(/.*?task\s*/i,'').trim());if(!t)return response('I could not confidently identify the task. Try the exact task name.');t.status='Done';t.completedAt=new Date().toISOString();audit(d,'AI completed task: '+t.title,{id:t.id});return response('Completed: '+t.title,[{type:'task_completed',id:t.id}]);}
    case'move_task':{const m=p.args.raw.match(/(?:move|shift|put)\s+(?:task\s+)?(.+?)\s+to\s+(now|follow-up|waiting|someday|blocked)/i);if(!m)return response('Use: “move task <name> to waiting” or NOW/FOLLOW-UP/WAITING/SOMEDAY/BLOCKED.');const t=findTask(c,m[1]);if(!t)return response('I could not confidently identify that task.');const lane=m[2].toUpperCase();t.lane=lane;if(lane==='BLOCKED')t.status='Blocked';else if(t.status==='Blocked')t.status='Todo';audit(d,'AI moved '+t.title+' to '+lane,{id:t.id,lane});return response('Moved '+t.title+' → '+lane,[{type:'task_moved',id:t.id,lane}]);}
    case'remember':{if(!p.args.text)return response('Tell me what you want me to remember.');const m=c.memory;m.unshift({id:Date.now(),text:p.args.text,time:new Date().toISOString(),source:'AI'});write(MEM,m.slice(0,120));return response('Remembered locally.');}
    case'recall':{const term=norm(p.args.term);const hits=c.memory.filter(m=>!term||norm(m.text).includes(term)).slice(0,10);return response(hits.length?'MEMORY\n\n'+hits.map(m=>'• '+m.text).join('\n'):'No matching memory found.');}
    case'search':{const term=norm(p.args.term),hits=[];(d.tasks||[]).forEach(t=>{if(norm(t.title+' '+t.project+' '+t.area).includes(term))hits.push('Task: '+t.title)});(d.projects||[]).forEach(x=>{if(norm(x.name+' '+x.goal).includes(term))hits.push('Project: '+x.name)});(d.notes||[]).forEach(x=>{if(norm(x.title+' '+x.body+' '+x.tag).includes(term))hits.push('Note: '+x.title)});return response(hits.length?'SEARCH\n\n'+hits.slice(0,20).map(x=>'• '+x).join('\n'):'No local matches.');}
    case'note':{if(!p.args.text)return response('Tell me what to capture.');d.notes=d.notes||[];d.notes.push({id:Date.now(),title:'AI Capture',tag:'Captured',body:p.args.text,area:'Inbox',createdAt:new Date().toISOString()});audit(d,'AI captured note',{text:p.args.text});return response('Captured as a note.');}
    default:return response('I understand Personal OS commands, but I am not confident about that request yet. Try: “briefing”, “plan my day”, “show overdue”, “add task …”, “complete task …”, “move task … to waiting”, “remember …”, or “find …”.');
  }}
  global.PersonalOSAI={version:VERSION,parse,run,context,score};
})(window);
