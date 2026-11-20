(() => {
 'use strict';
 const reduce=matchMedia('(prefers-reduced-motion: reduce)');
 const film=document.getElementById('hero-film'), control=document.getElementById('hero-motion-toggle');
 const icon=control.querySelector('.motion-state-icon'),label=control.querySelector('.motion-state-text');
 let manuallyPaused=false;
 function syncFilm(){const playing=!film.paused;icon.textContent=playing?'Ⅱ':'▶';label.textContent=playing?'Pause motion':'Play motion';control.setAttribute('aria-label',playing?'Pause background motion':'Play background motion');control.setAttribute('aria-pressed',String(playing));}
 function playFilm(){film.muted=true;film.play().then(syncFilm).catch(syncFilm);}
 control.addEventListener('click',()=>{if(film.paused){manuallyPaused=false;playFilm();}else{manuallyPaused=true;film.pause();syncFilm();}});
 film.addEventListener('play',syncFilm);film.addEventListener('pause',syncFilm);
 if(!reduce.matches&&!navigator.connection?.saveData)playFilm();else syncFilm();
 reduce.addEventListener('change',()=>{if(reduce.matches){film.pause();syncFilm();}else if(!manuallyPaused)playFilm();});
 const hero=document.querySelector('.hero-film'),header=document.querySelector('.header');
 const journey=document.getElementById('site-journey'),sticky=journey.querySelector('.journey-sticky'),panels=journey.querySelectorAll('.journey-panel');
 const number=document.getElementById('journey-number'),title=document.getElementById('journey-title'),description=document.getElementById('journey-description'),buttons=journey.querySelectorAll('.chapter-button');
 const chapters=[['The structure.','See the building taking shape, from its concrete frame to its brickwork.'],['A closer look.','Explore the construction detail in the supplied project footage.'],['Beyond the building.','Look out across the surrounding residential streets and greenery of Gopalpur.']];
 let frame=0,active=-1;
 const clamp=n=>Math.max(0,Math.min(1,n));
 function update(){frame=0;header.classList.toggle('over-film',hero.getBoundingClientRect().bottom>header.offsetHeight+32);if(reduce.matches)return;const r=journey.getBoundingClientRect();const span=Math.max(1,journey.offsetHeight-sticky.offsetHeight);const progress=clamp((header.offsetHeight-r.top)/span);journey.style.setProperty('--journey-progress',progress.toFixed(4));panels[1].style.clipPath=`inset(${(1-clamp(progress*2.5))*100}% 0 0 0)`;panels[2].style.clipPath=`inset(${(1-clamp((progress-.4)/.5))*100}% 0 0 0)`;const next=progress<.32?0:progress<.72?1:2;if(next!==active){active=next;number.textContent=`0${next+1} / 03`;title.textContent=chapters[next][0];description.textContent=chapters[next][1];buttons.forEach((b,i)=>{b.classList.toggle('active',i===next);b.setAttribute('aria-pressed',String(i===next));});}}
 function schedule(){if(!frame)frame=requestAnimationFrame(update);}
 addEventListener('scroll',schedule,{passive:true});addEventListener('resize',schedule);reduce.addEventListener('change',schedule);schedule();
 buttons.forEach((button,index)=>button.addEventListener('click',()=>{const top=journey.getBoundingClientRect().top+scrollY-header.offsetHeight;const span=journey.offsetHeight-sticky.offsetHeight;scrollTo({top:top+span*[0,.5,.95][index],behavior:reduce.matches?'auto':'smooth'});}));
 const visibility=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.target===hero){if(!entry.isIntersecting)film.pause();else if(!reduce.matches&&!manuallyPaused&&!navigator.connection?.saveData)playFilm();}}},{threshold:.05});visibility.observe(hero);
 document.addEventListener('visibilitychange',()=>{if(document.hidden)film.pause();else if(hero.getBoundingClientRect().bottom>0&&!manuallyPaused&&!reduce.matches)playFilm();});
})();
