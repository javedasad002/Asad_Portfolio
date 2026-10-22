const p = window.portfolio;
document.querySelectorAll('[data-linkedin]').forEach(a => { a.href=p.linkedin; a.target='_blank'; a.rel='noopener noreferrer'; if(!a.getAttribute('aria-label')) a.setAttribute('aria-label','Connect with Asad Javed on LinkedIn (opens in new tab)'); });
document.querySelector('#cgpa').textContent=p.cgpa;
document.querySelector('#education-cgpa').textContent=p.cgpa;
document.querySelector('#year').textContent=new Date().getFullYear();
const themeButton=document.querySelector('#theme');
function themeLabel(){themeButton.setAttribute('aria-label',`Switch to ${document.documentElement.dataset.theme==='dark'?'light':'dark'} theme`);}
themeLabel();
themeButton.addEventListener('click',()=>{const t=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=t;try{localStorage.setItem('asad-theme-v2',t)}catch{}themeLabel();});
const artwork={power:'<div class="mini-circuit"><b>AC</b><i></i><b>∿</b><i></i><b>▥</b><i></i><b>DC</b></div>',code:'<div class="code-art"><small>● ● ● &nbsp; gym.cpp</small><span>class</span> Member {<br>&nbsp; <span>private:</span><br>&nbsp; &nbsp; string name;<br>&nbsp; <span>public:</span><br>&nbsp; &nbsp; void save();<br>};</div>',wiring:'<div class="wiring-art"><span>⊗</span><span>⊗</span><span>⌁</span><span>⊗</span></div>'};
const diagram=(body)=>`<svg class="project-diagram" viewBox="0 0 300 180" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${body}</svg>`;
artwork.radar=diagram('<path d="M50 145a100 100 0 0 1 200 0H50Zm30 0a70 70 0 0 1 140 0M110 145a40 40 0 0 1 80 0M150 145l65-76"/><circle cx="215" cy="69" r="5" fill="currentColor"/><path d="M150 145V45M50 145h200" opacity=".4"/><circle cx="150" cy="145" r="7" fill="currentColor"/>');
artwork.arm=diagram('<path d="M65 155h165M95 155v-18h72v18M130 135V91l53-41 42 27M218 72l13-19 19 10M225 81l2 23 22-2"/><circle cx="130" cy="91" r="12"/><circle cx="183" cy="50" r="10"/><circle cx="225" cy="77" r="8"/><path d="M55 35h25M55 35v25M245 135h-25M245 135v-25" opacity=".5"/>');
artwork.car=diagram('<rect x="84" y="65" width="124" height="65" rx="18"/><rect x="103" y="78" width="48" height="36" rx="6"/><path d="M107 65V50h19v15M170 65V50h19v15M107 130v15h19v-15M170 130v15h19v-15M208 88h17M208 106h17M233 75q25 22 0 44M247 61q37 36 0 72"/><circle cx="181" cy="88" r="5"/><circle cx="181" cy="106" r="5"/>');
artwork.stepper=diagram('<circle cx="120" cy="90" r="43"/><circle cx="120" cy="90" r="17"/><path d="M120 90l28-28M120 47V35M120 133v12M77 90H65M163 90h12M187 55h30M187 90h30M187 125h30"/><circle cx="230" cy="55" r="9" fill="currentColor"/><circle cx="230" cy="90" r="9" opacity=".55"/><circle cx="230" cy="125" r="9" opacity=".3"/><path d="M85 30q45-20 76 17M160 47h-15M160 47V32" opacity=".5"/>');
document.querySelector('#project-grid').innerHTML=p.projects.map((x,i)=>`<article class="project-card"><div class="project-visual" aria-hidden="true">${artwork[x.art]}</div><div class="project-body"><div class="project-meta"><span>${x.category.toUpperCase()}</span><span>${x.year || ''}</span></div><h3>${x.title}</h3>${x.status?`<span class="project-status">${x.status}</span>`:''}<p>${x.intro}</p><button class="detail-button" data-project="${i}" aria-label="Explore ${x.title}">Explore project <span>↗</span></button></div></article>`).join('');
document.querySelector('#experience-list').innerHTML=p.experience.map((x,i)=>`<article class="experience-item"><span class="experience-index">0${i+1}</span><div><h3>${x[0]}</h3><p class="organization">${x[1]}</p>${i===0?`<p>${x[3]}</p>`:`<details class="role-more"><summary>Read more</summary><p>${x[3]}</p></details>`}</div>${x[2]?`<time>${x[2]}</time>`:''}</article>`).join('');
document.querySelector('#learning-grid').innerHTML=p.learning.map(x=>`<article class="learning-card"><span class="symbol" aria-hidden="true">⌘</span><div><h3>${x[0]}</h3><p>${x[1]}</p></div></article>`).join('');
document.querySelector('#skills-grid').innerHTML=p.skills.map(x=>`<div class="skill-group"><h3>${x[0]}</h3>${x.slice(1).map(s=>`<p>${s}</p>`).join('')}</div>`).join('');
const dialog=document.querySelector('dialog');let opener;
document.querySelectorAll('[data-project]').forEach(b=>b.addEventListener('click',()=>{opener=b;const x=p.projects[Number(b.dataset.project)];document.querySelector('#dialog-content').innerHTML=`<p class="eyebrow">${x.category.toUpperCase()}${x.year?` / ${x.year}`:''}</p><h2 id="project-title">${x.title}</h2>${x.status?`<span class="project-status">${x.status}</span>`:''}<p>${x.intro}</p><h3>The problem</h3><p>${x.problem}</p><h3>The approach</h3><p>${x.approach}</p><h3>Learning focus</h3><p>${x.learning}</p><div class="tags">${x.tools.map(t=>`<span>${t}</span>`).join('')}</div>`;dialog.setAttribute('aria-labelledby','project-title');dialog.showModal();document.body.classList.add('dialog-open');}));
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});dialog.addEventListener('close',()=>{document.body.classList.remove('dialog-open');opener?.focus();});
const motionQuery=matchMedia('(prefers-reduced-motion:reduce)');
const revealTargets=document.querySelectorAll('.section-heading,.about>div,.project-card,.experience-item,.award,.education-list article,.learning-card,.skill-group,.contact,#education>h2,#skills>h2');
let revealObserver;
function configureReveals(){
  revealObserver?.disconnect();
  revealTargets.forEach(el=>{el.classList.remove('reveal');el.classList.remove('scroll-float','is-visible');});
  if(motionQuery.matches || !('IntersectionObserver' in window))return;
  revealObserver=new IntersectionObserver(entries=>entries.forEach(e=>{
    if(e.isIntersecting){e.target.classList.add('is-visible');}
    else{e.target.dataset.enter=e.boundingClientRect.top<0?'above':'below';e.target.classList.remove('is-visible');}
  }),{threshold:0,rootMargin:'40px 0px 40px 0px'});
  revealTargets.forEach(el=>{el.classList.add('scroll-float');el.dataset.enter='below';revealObserver.observe(el);});
}
configureReveals();motionQuery.addEventListener('change',configureReveals);
const cursor=document.createElement('div');cursor.className='glass-cursor';cursor.setAttribute('aria-hidden','true');document.body.append(cursor);
const cursorQuery=matchMedia('(pointer:fine) and (hover:hover) and (prefers-reduced-motion:no-preference)');
function hideCursor(){document.documentElement.classList.remove('custom-cursor');cursor.classList.remove('visible');}
window.addEventListener('pointermove',e=>{
  if(!cursorQuery.matches || e.pointerType==='touch'){hideCursor();return;}
  document.documentElement.classList.add('custom-cursor');cursor.classList.add('visible');cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px';
  cursor.classList.toggle('over-control',!!e.target.closest('a,button,summary'));
});
document.addEventListener('pointerleave',hideCursor);window.addEventListener('blur',hideCursor);document.addEventListener('keydown',e=>{if(e.key==='Tab')hideCursor();});cursorQuery.addEventListener('change',hideCursor);
// Native dialogs occupy the top layer, so keep the native cursor visible there.
dialog.addEventListener('close',hideCursor);
if(matchMedia('(hover:hover) and (prefers-reduced-motion:no-preference)').matches){const art=document.querySelector('.hero-art');art.addEventListener('pointermove',e=>{const r=art.getBoundingClientRect();art.style.transform=`rotateY(${(e.clientX-r.left-r.width/2)/80}deg) rotateX(${-(e.clientY-r.top-r.height/2)/100}deg)`;});art.addEventListener('pointerleave',()=>art.style.transform='');}
