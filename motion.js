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
 function updateHeader(){header.classList.toggle('over-film',hero.getBoundingClientRect().bottom>header.offsetHeight+32);}
 addEventListener('scroll',updateHeader,{passive:true});addEventListener('resize',updateHeader);updateHeader();
 const visibility=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.target===hero){if(!entry.isIntersecting)film.pause();else if(!reduce.matches&&!manuallyPaused&&!navigator.connection?.saveData)playFilm();}}},{threshold:.05});visibility.observe(hero);
 document.addEventListener('visibilitychange',()=>{if(document.hidden)film.pause();else if(hero.getBoundingClientRect().bottom>0&&!manuallyPaused&&!reduce.matches)playFilm();});
})();
