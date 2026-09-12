const q=(s,c=document)=>c.querySelector(s),qa=(s,c=document)=>[...c.querySelectorAll(s)];

const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}
}),{threshold:.12});
qa('.reveal').forEach(el=>observer.observe(el));

qa('[data-intent-card]').forEach(card=>{
  const buttons=qa('[data-intent]',card),status=q('.selection-status',card),cta=q('[data-show-options]',card);
  const update=()=>{
    const selected=buttons.filter(button=>button.getAttribute('aria-pressed')==='true').map(button=>button.dataset.intent);
    status.textContent=selected.length?selected.join(' + '):'Nothing selected yet';
    cta.disabled=selected.length===0;
  };
  buttons.forEach(button=>button.addEventListener('click',()=>{
    const selected=buttons.filter(item=>item.getAttribute('aria-pressed')==='true');
    const pressed=button.getAttribute('aria-pressed')==='true';
    if(!pressed&&selected.length===2){status.textContent='Choose up to two';return}
    button.setAttribute('aria-pressed',String(!pressed));update();
  }));
  cta.addEventListener('click',()=>q('#next-results').scrollIntoView({behavior:'smooth'}));
  q('[data-skip]',card).addEventListener('click',()=>{status.textContent='Personalisation skipped — normal browsing stays available.'});
});

qa('[data-scroll-results]').forEach(button=>button.addEventListener('click',()=>q('#next-results').scrollIntoView({behavior:'smooth'})));

const resultsPhone=q('.results-phone');
const openSheet=()=>{resultsPhone.classList.add('sheet-open');q('[data-close-sheet]',resultsPhone).focus()};
const closeSheet=()=>resultsPhone.classList.remove('sheet-open');
qa('[data-why]').forEach(button=>button.addEventListener('click',openSheet));
q('[data-open-why]').addEventListener('click',()=>{q('#next-results').scrollIntoView({behavior:'smooth'});setTimeout(openSheet,450)});
q('[data-close-sheet]').addEventListener('click',closeSheet);
q('[data-sheet-backdrop]').addEventListener('click',closeSheet);
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeSheet()});

const simulate=q('[data-simulate]'),prompt=q('[data-assist-prompt]'),toast=q('[data-toast]');
simulate.addEventListener('click',()=>{prompt.hidden=false;simulate.hidden=true;q('[data-help]').focus()});
q('[data-help]').addEventListener('click',()=>q('#assist-panel').scrollIntoView({behavior:'smooth'}));
q('[data-keep]').addEventListener('click',()=>{prompt.hidden=true;simulate.hidden=false;toast.textContent='You’re back to normal browsing.';toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2200)});

qa('.assist-chips button').forEach(button=>button.addEventListener('click',()=>{
  button.setAttribute('aria-pressed',String(button.getAttribute('aria-pressed')!=='true'));
}));
q('[data-find]').addEventListener('click',()=>q('#assist-results').scrollIntoView({behavior:'smooth'}));

const different=q('[data-different]'),differentStatus=q('[data-different-status]'),firstPick=q('[data-pick-one]');
different.addEventListener('click',()=>{
  const image=q('.food-img',firstPick),title=q('h4',firstPick),meta=q('span',firstPick),reason=q('p',firstPick);
  image.classList.remove('maggi');image.classList.add('bun');image.setAttribute('aria-label','Bun maska');
  title.textContent='Bun Maska';meta.textContent='₹69 · 19 mins';reason.textContent='Quick · Under ₹200 · Different from your recent sandwich';q('button',firstPick).setAttribute('aria-label','View Bun Maska');
  differentStatus.textContent='Different demo options are now shown.';different.textContent='Show another set';
});

