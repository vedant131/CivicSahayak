// CivicSahayak ui.js — Author: Vedant Shinde | Depends on: data.js

function runEligibility(){
  const cat=document.getElementById('e-cat').value;
  const gen=document.getElementById('e-gen').value;
  const income=document.getElementById('e-income').value;
  const edu=document.getElementById('e-edu').value;
  const dis=document.getElementById('e-dis').value;
  const emp=document.getElementById('e-emp').value;
  if(!cat&&!gen){alert('Please fill at least Category or Gender to proceed.');return;}
  const matches=schemeDB.filter(s=>{
    const n=s.need;
    if(n.cats&&cat&&!n.cats.includes(cat))return false;
    if(n.gen&&gen&&!n.gen.includes(gen))return false;
    if(n.income&&income&&!n.income.includes(income))return false;
    if(n.edu&&edu&&!n.edu.includes(edu))return false;
    if(n.dis&&dis&&!n.dis.includes(dis))return false;
    if(n.emp&&emp&&!n.emp.includes(emp))return false;
    return true;
  });
  const g=document.getElementById('er-grid');
  document.getElementById('er-cnt').textContent=`${matches.length} scheme${matches.length!==1?'s':''} found`;
  g.innerHTML=matches.length?matches.map(s=>{
    const cfg=catCfg[s.cat]||{c:'var(--or)',bg:'var(--or3)',lbl:s.cat};
    return `<div class="rsch" style="border-left-color:${cfg.c};">
      <div class="rsch-cat" style="background:${cfg.bg};color:${cfg.c};">${cfg.lbl}</div>
      <div class="rsch-name">${s.n}</div>
      <div class="rsch-min">${s.min}</div>
      <div class="rsch-ben">${s.ben}</div>
      <div class="rsch-match" style="background:var(--grnl);color:var(--grn);">✓ You may qualify</div>
      <a class="rsch-apply" href="${s.url}" target="_blank">Apply / Know More →</a>
    </div>`}).join('')
    :'<div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--t3);">No schemes matched your profile. Try adjusting your filters.</div>';
  document.getElementById('elig-results').style.display='';
  document.getElementById('elig-results').scrollIntoView({behavior:'smooth',block:'nearest'});
}

// ── DOCUMENT GUIDE ──────────────────────────────────────────────
function docTab(tab,el){document.querySelectorAll('.dt').forEach(d=>d.classList.remove('act'));el.classList.add('act');renderDocTab(tab);}
function renderDocTab(tab){
  curDocTab=tab;
  const d=docData[tab];if(!d)return;
  const html=`<div class="doc-section">
    <div class="ds-h">${d.icon} ${d.title}</div>
    <div class="ds-d">${d.desc}</div>
    <div class="doc-steps">${d.steps.map((s,i)=>`<div class="dstep"><div class="ds-num">${i+1}</div><div class="ds-body"><div class="ds-t">${s.t}</div><div class="ds-dd">${s.d}</div>${s.tip?`<div class="ds-tip">💡 ${s.tip}</div>`:''}</div></div>`).join('')}</div>
    <div style="margin-top:18px;"><div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--t4);margin-bottom:9px;">Documents You'll Need</div><div class="doc-req">${d.docs.map(r=>`<div class="dreq"><div class="dreq-chk">✓</div><div><div class="dreq-t">${r}</div></div></div>`).join('')}</div></div>
    <div class="warn-box"><div class="wb-ico">⚠️</div><div class="wb-txt"><strong>Important:</strong> ${d.warn}</div></div>
  </div>`;
  document.getElementById('doc-content').innerHTML=html;
}

// ── GRIEVANCE PORTALS ────────────────────────────────────────────
function renderGrievance(){
  document.getElementById('griev-list').innerHTML=grievPortals.map(p=>`
    <div class="gi-portal">
      <div class="gi-ico" style="background:${p.bg};color:${p.c};">${p.ico}</div>
      <div style="flex:1;">
        <div class="gi-name">${p.n}</div>
        <div class="gi-desc">${p.desc}</div>
        <div class="gi-meta">${p.tags.map(t=>`<span class="gi-tag" style="background:${p.bg};color:${p.c};">${t}</span>`).join('')}</div>
      </div>
      <a class="gi-link" href="${p.url}" target="_blank">Visit →</a>
    </div>`).join('');
}

// ── HELPLINES ────────────────────────────────────────────────────
function renderHelplines(){
  document.getElementById('hline-grid').innerHTML=helplines.map(h=>`
    <div class="hcard">
      <div class="hc-num" style="color:${h.c};">${h.num}</div>
      <div class="hc-name">${h.name}</div>
      <div class="hc-desc">${h.desc}</div>
      <a class="hc-call" style="background:${h.c};" href="tel:${h.num.replace(/[^0-9]/g,'')}">📞 Call Now</a>
    </div>`).join('');
}

// ── WIZARD ───────────────────────────────────────────────────────
let wStep=1,wIssue=null;
function selIssue(t,el){wIssue=t;document.querySelectorAll('.icard').forEach(c=>c.classList.remove('sel'));el.classList.add('sel');document.getElementById('wn1').disabled=false;}
function wNext(){
  const next=wStep+1;
  if(next===3)buildPortals();
  if(next===4)buildDocs();
  if(next===5)buildSummary();
  setStep(next);
}
function wPrev(){if(wStep>1)setStep(wStep-1);}
function setStep(n){
  wStep=n;
  document.querySelectorAll('.wp').forEach(p=>p.classList.remove('act'));
  document.getElementById('ws'+n).classList.add('act');
  document.querySelectorAll('.ws').forEach(s=>{const sn=+s.dataset.s;s.classList.remove('act','done');if(sn===n)s.classList.add('act');else if(sn<n)s.classList.add('done');});
}
function wReset(){wIssue=null;setStep(1);document.querySelectorAll('.icard').forEach(c=>c.classList.remove('sel'));document.getElementById('wn1').disabled=true;}
function buildPortals(){document.getElementById('portal-list').innerHTML=(portals[wIssue]||[]).map(p=>`<div class="portal-row"><div><div class="pr-name">${p.n}</div><div class="pr-note">${p.note}</div></div>${p.url!=='#'?`<a class="pr-link" href="${p.url}" target="_blank">Visit →</a>`:'<span class="pr-link" style="opacity:.4">In-person</span>'}</div>`).join('');}
function buildDocs(){document.getElementById('doc-list').innerHTML=(docsMap[wIssue]||[]).map(d=>`<div class="docitem"><div class="doc-chk">✓</div><div style="font-size:13px;color:var(--t2);">${d}</div></div>`).join('');}
function buildSummary(){
  const desc=document.getElementById('w-desc').value||'Not provided';
  const state=document.getElementById('w-state').value||'Not specified';
  const pList=portals[wIssue]||[];
  document.getElementById('summary').innerHTML=`<div class="sumbox">
    <div class="sum-row"><div class="sum-key">Issue Type</div><div class="sum-val" style="font-weight:700;color:var(--or);">${issueLabel[wIssue]||'Unknown'}</div></div>
    <div class="sum-row"><div class="sum-key">State</div><div class="sum-val">${state}</div></div>
    <div class="sum-row"><div class="sum-key">Description</div><div class="sum-val">${desc}</div></div>
    <div class="sum-row"><div class="sum-key">File With</div><div class="sum-val">${pList.map(p=>`→ ${p.n}`).join('<br>')}</div></div>
  </div>`;
}

// ── RIGHTS MODALS ────────────────────────────────────────────────
function openModal(key){
  const d=rData[key];if(!d)return;
  document.getElementById('modal-title').textContent=d.title;
  document.getElementById('modal-body').innerHTML=d.blocks.map(b=>`<div class="mblock" style="background:${b.bg};border-color:${b.bc};"><div class="mb-t">${b.t}</div><div class="mb-d">${b.d}</div></div>`).join('');
  document.getElementById('modal').classList.add('open');
}
function closeModal(){document.getElementById('modal').classList.remove('open');}

function getReply(msg){
  const m=msg.toLowerCase();
  if(/^(hi|hello|namaste|hey|helo|namaskar)/.test(m.trim()))return'Namaste! 🙏 How can I help you today? Ask about rights, scholarships, document procedures, complaints, or any civic issue.';
  for(const e of kb)if(e.k.some(kw=>m.includes(kw)))return e.r.replace(/\n/g,'<br>');
  return'I can help with: NSP scholarship issues & document procedures, constitutional rights, free legal aid (NALSA), FIR filing, grievance portals, RTI, minority/SC/ST/women/disability rights & schemes.<br><br>Try: \"My NSP payment has not been received\", \"How do I get a caste certificate?\", \"How to file FIR if refused?\", \"What is NALSA?\", or \"What is the RTI Act?\"';
}
function addMsg(text,role){
  const d=document.createElement('div');d.className=`amsg ${role}`;
  d.innerHTML=`<div class="abub">${text}</div>`;
  document.getElementById('ai-msgs').appendChild(d);
  document.getElementById('ai-msgs').scrollTop=9999;
}
function sendMsg(){
  const inp=document.getElementById('ai-inp');const msg=inp.value.trim();if(!msg)return;
  addMsg(msg,'user');inp.value='';
  document.getElementById('ai-qr').style.display='none';
  const typing=document.createElement('div');typing.className='amsg bot';typing.id='typing-ind';
  typing.innerHTML='<div class="abub"><div class="typing"><span></span><span></span><span></span></div></div>';
  document.getElementById('ai-msgs').appendChild(typing);
  document.getElementById('ai-msgs').scrollTop=9999;
  setTimeout(()=>{const t=document.getElementById('typing-ind');if(t)t.remove();addMsg(getReply(msg),'bot');},600+Math.random()*500);
}
function sendQ(q){document.getElementById('ai-inp').value=q;sendMsg();}
// ── Counter animation ──────────────────────────
function animCounters() {
  document.querySelectorAll('.stc-val[data-target]').forEach(el => {
    const target = parseInt(el.dataset.target, 10);
    const dur = 900 + Math.random() * 400;
    const start = performance.now();
    const run = (now) => {
      const t = Math.min((now - start) / dur, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      el.textContent = Math.floor(ease * target);
      if (t < 1) requestAnimationFrame(run);
      else el.textContent = target;
    };
    requestAnimationFrame(run);
  });
}

// ── Cursor glow ───────────────────────────────
(function() {
  const g = document.createElement('div');
  g.style.cssText = 'position:fixed;pointer-events:none;z-index:9998;width:340px;height:340px;border-radius:50%;background:radial-gradient(circle,rgba(244,101,26,.06) 0%,transparent 70%);transform:translate(-50%,-50%);transition:left .07s linear,top .07s linear;left:-400px;top:-400px;';
  document.body.appendChild(g);
  let raf;
  document.addEventListener('mousemove', e => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => { g.style.left = e.clientX+'px'; g.style.top = e.clientY+'px'; });
  });
})();
