(function(){
var open=false,sid=null;
function init(){
var s=document.createElement('style');
s.textContent='#chl{position:fixed;bottom:24px;right:24px;width:60px;height:60px;border-radius:50%;background:linear-gradient(145deg,#E8C97A,#A07830);border:none;cursor:pointer;z-index:2147483647;box-shadow:0 4px 20px rgba(201,168,76,0.5);display:flex;align-items:center;justify-content:center;touch-action:manipulation;}#chw{position:fixed;bottom:96px;right:24px;width:340px;height:560px;background:#FDF8F0;border-radius:20px;box-shadow:0 20px 60px rgba(28,17,10,0.25);display:flex;flex-direction:column;overflow:hidden;z-index:2147483646;transform:translateY(20px) scale(0.95);opacity:0;pointer-events:none;transition:transform 0.4s cubic-bezier(.34,1.56,.64,1),opacity 0.3s;}#chw.o{transform:none;opacity:1;pointer-events:all;}.ch{background:linear-gradient(160deg,#1C110A,#3D200E);padding:14px 18px;flex-shrink:0;}.cn{font-family:Georgia,serif;font-size:17px;color:#E8C97A;}.cs{font-size:10px;color:rgba(232,201,122,0.6);text-transform:uppercase;}.cr{background:linear-gradient(160deg,#1C110A,#3D200E);padding:8px 18px 12px;display:flex;align-items:center;gap:10px;border-top:1px solid rgba(201,168,76,0.12);flex-shrink:0;}.ca{width:32px;height:32px;border-radius:50%;background:linear-gradient(135deg,#E8C97A,#A07830);display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;color:#1C110A;position:relative;}.ca::after{content:"";position:absolute;bottom:1px;right:1px;width:8px;height:8px;border-radius:50%;background:#5AA876;border:2px solid #1C110A;}.cp{display:none;flex:1;flex-direction:column;overflow:hidden;}.cp.a{display:flex;}.cf{padding:16px;overflow-y:auto;flex:1;font-family:sans-serif;}.cf h2{font-family:Georgia,serif;font-size:18px;color:#1C110A;text-align:center;margin-bottom:4px;}.cf p{font-size:11px;color:#9A8468;text-align:center;margin-bottom:12px;}.ff{margin-bottom:8px;}.ff label{display:block;font-size:10px;font-weight:600;color:#9A8468;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:3px;}.ff input,.ff select{width:100%;padding:8px 10px;background:#F2E8D5;border:1.5px solid #E8D9BF;border-radius:8px;font-size:12px;color:#1C110A;outline:none;appearance:none;box-sizing:border-box;}.fr{display:grid;grid-template-columns:1fr 1fr;gap:7px;}.sb{width:100%;padding:10px;background:linear-gradient(135deg,#E8C97A,#A07830);border:none;border-radius:9px;font-size:13px;font-weight:600;color:#1C110A;cursor:pointer;margin-top:4px;}.cm{flex:1;overflow-y:auto;padding:10px;display:flex;flex-direction:column;gap:4px;}.mg{display:flex;gap:6px;align-items:flex-end;font-family:sans-serif;}.mg.u{flex-direction:row-reverse;}.ma{width:20px;height:20px;border-radius:50%;background:linear-gradient(135deg,#E8C97A,#A07830);display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:700;color:#1C110A;flex-shrink:0;}.mb{padding:7px 10px;font-size:12px;line-height:1.45;max-width:78%;}.mg:not(.u) .mb{background:#F2E8D5;color:#1C110A;border-radius:12px 12px 12px 3px;border:1px solid #E8D9BF;}.mg.u .mb{background:linear-gradient(135deg,#E8C97A,#A07830);color:#1C110A;border-radius:12px 12px 3px 12px;}.ci{padding:7px 10px 10px;background:#fff;border-top:1px solid #E8D9BF;display:flex;gap:6px;align-items:flex-end;flex-shrink:0;}.cw{flex:1;background:#F2E8D5;border:1.5px solid #E8D9BF;border-radius:10px;padding:7px 10px;}.cw textarea{width:100%;background:transparent;border:none;outline:none;font-size:12px;color:#1C110A;resize:none;line-height:1.4;max-height:60px;font-family:sans-serif;}.csb{width:32px;height:32px;border-radius:50%;border:none;background:linear-gradient(135deg,#E8C97A,#A07830);cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;opacity:0.35;}.csb.on{opacity:1;}.ft{text-align:center;padding:3px;font-size:9px;color:#9A8468;background:#fff;}@media(max-width:480px){#chw{right:0;bottom:0;width:100%;height:100%;border-radius:0;}}';
document.head.appendChild(s);
var d=document.createElement('div');
d.innerHTML='<button id="chl"><svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" fill="rgba(255,255,255,0.92)"/><circle cx="8.5" cy="11" r="1.2" fill="#C9A84C"/><circle cx="12" cy="11" r="1.2" fill="#C9A84C"/><circle cx="15.5" cy="11" r="1.2" fill="#C9A84C"/></svg></button>'
+'<div id="chw">'
+'<div class="ch"><div class="cn">Craftihouse</div><div class="cs">Handcrafted with love · Dubai</div></div>'
+'<div class="cr"><div class="ca">L</div><div><div style="font-size:12px;font-weight:600;color:#E8C97A;">Layla — Craft Advisor</div><div style="font-size:10px;color:#5AA876;">● Online now</div></div></div>'
+'<div class="cp a" id="cpf"><div class="cf"><h2>Welcome ✦</h2><p>Share your details and we'll connect you with the right advisor.</p>'
+'<div class="fr"><div class="ff"><label>First Name *</label><input id="cfn" type="text" placeholder="Ahmad"/></div><div class="ff"><label>Last Name</label><input id="cln" type="text" placeholder="Al Mansoori"/></div></div>'
+'<div class="ff"><label>Email *</label><input id="cfe" type="email" placeholder="ahmad@company.ae"/></div>'
+'<div class="ff"><label>Phone</label><input id="cfp" type="tel" placeholder="+971 50 000 0000"/></div>'
+'<div class="ff"><label>Topic</label><select id="cft"><option value="">— Select —</option><option>Product inquiry</option><option>Corporate gifts</option><option>Track my order</option><option>Request a refund</option><option>Custom order</option><option>Other</option></select></div>'
+'<button class="sb" id="cst">Start Chat</button></div></div>'
+'<div class="cp" id="cpc"><div class="cm" id="cms"></div>'
+'<div class="ci"><div class="cw"><textarea id="cin" rows="1" placeholder="Message Craftihouse..."></textarea></div>'
+'<button class="csb" id="csb"><svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M22 2L11 13" stroke="#1C110A" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="#1C110A" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button></div>'
+'<div class="ft">Powered by Craftihouse.com</div></div></div>';
document.body.appendChild(d);

function tog(){open=!open;document.getElementById('chw').classList.toggle('o',open);}
document.getElementById('chl').addEventListener('click',tog);
document.getElementById('chl').addEventListener('touchend',function(e){e.preventDefault();tog();});

document.getElementById('cst').addEventListener('click',function(){
var fn=document.getElementById('cfn').value.trim();
var em=document.getElementById('cfe').value.trim();
if(!fn||!em.includes('@'))return;
var ln=document.getElementById('cln').value.trim();
var ph=document.getElementById('cfp').value.trim();
var tp=document.getElementById('cft').value;
document.getElementById('cpf').classList.remove('a');
document.getElementById('cpc').classList.add('a');
if(window.chDB){
var r=window.chDB.ref('sessions').push();sid=r.key;
r.set({contact:{firstName:fn,lastName:ln,email:em,phone:ph,topic:tp},status:'open',unreadByAgent:true,lastMessage:'',createdAt:Date.now()});
window.chDB.ref('sessions/'+sid+'/messages').on('child_added',function(s){var m=s.val();if(m&&m.sender==='agent'&&!m.auto)aM('agent',m.text);});
}
setTimeout(function(){aM('agent','Hello '+fn+'! Welcome to Craftihouse. I'm Layla, your personal craft advisor. How can I help you today?');},400);
if(tp)setTimeout(function(){aM('agent',aR(tp.toLowerCase())||'How can I help you with "'+tp+'"?');},1600);
});

document.getElementById('cin').addEventListener('input',function(){
this.style.height='auto';this.style.height=Math.min(this.scrollHeight,60)+'px';
document.getElementById('csb').classList.toggle('on',this.value.trim().length>0);
});
document.getElementById('cin').addEventListener('keydown',function(e){if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();snd();}});
document.getElementById('csb').addEventListener('click',snd);

function snd(){
var i=document.getElementById('cin');var t=i.value.trim();if(!t)return;
i.value='';i.style.height='auto';document.getElementById('csb').classList.remove('on');
aM('user',t);
if(window.chDB&&sid){window.chDB.ref('sessions/'+sid+'/messages').push({sender:'user',text:t,time:nw(),ts:Date.now(),auto:false});window.chDB.ref('sessions/'+sid).update({unreadByAgent:true,lastMessage:t,lastMessageTime:nw()});}
setTimeout(function(){
var r=aR(t.toLowerCase())||'Thank you! Let me check on that right away. One moment please. 🔍';
aM('agent',r);
if(window.chDB&&sid)window.chDB.ref('sessions/'+sid+'/messages').push({sender:'agent',text:r,time:nw(),ts:Date.now(),auto:true});
},1600);
}
function aR(k){
if(k.includes('track')||k.includes('order'))return'Please share your order number and I will look that up right away! 📦';
if(k.includes('refund'))return'Please share your order ID and reason and I will arrange this right away.';
if(k.includes('corporate')||k.includes('gift'))return'We would love to help! We create bespoke corporate gifts for UAE businesses. What is the occasion and quantity? 🎁';
if(k.includes('custom'))return'A custom order, wonderful! Please share your idea, quantity, and timeline. ✨';
if(k.includes('product')||k.includes('inquiry'))return'Are you looking for leather goods, Persian handicrafts, or wooden pieces? 🌿';
return null;
}
function aM(w,t){
var ms=document.getElementById('cms');
var d=document.createElement('div');d.className='mg'+(w==='user'?' u':'');
d.innerHTML='<div class="ma">'+(w==='agent'?'L':'U')+'</div><div class="mb">'+t+'</div>';
ms.appendChild(d);ms.scrollTop=ms.scrollHeight;
}
function nw(){return new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});}
}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',init);}else{init();}
})();
