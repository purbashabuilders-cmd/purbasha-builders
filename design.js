(() => {
  'use strict';
  const root=document.documentElement; root.dataset.theme="light";
  const menu=document.querySelector('.mobile-menu'),toggle=document.querySelector('.menu-toggle');
  function closeMenu(){menu.hidden=true;toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open navigation');}
  toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';menu.hidden=!open;toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');});
  menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!menu.hidden){closeMenu();toggle.focus();}});
  matchMedia('(min-width:801px)').addEventListener('change',e=>{if(e.matches)closeMenu();});
  const homes={one:{title:'The 1 BHK residence',kicker:'For a first home of your own',description:'A comfortable starting point, with distinct living, sleeping and kitchen areas. Explore the concept, then request the actual project drawing.',config:'1 bedroom',area:'684 sq ft',alt:'Illustrative one-bedroom apartment layout; not an approved project drawing'},two:{title:'The 2 BHK residence',kicker:'Room for life to grow',description:'Two bedrooms open up more possibilities: a family room, a workspace, or a place for guests. Use this illustrative layout to begin the conversation.',config:'2 bedrooms',area:'868 sq ft',alt:'Illustrative two-bedroom apartment layout; not an approved project drawing'},three:{title:'The 3 BHK residence',kicker:'A little more room for everyone',description:'Space for a larger household, visitors, or a room that is yours to define. Ask our team about the actual layout, orientation and current availability.',config:'3 bedrooms',area:'1,212 sq ft',alt:'Illustrative three-bedroom apartment layout; not an approved project drawing'},penthouse:{title:'The penthouse residence',kicker:'A home with a little more sky',description:'Explore a top-level residence with a separately listed terrace area. Confirm terrace rights, access, specifications and the approved drawing with our team.',config:'Penthouse + terrace',area:'1,209 sq ft + 868 sq ft terrace',alt:'Illustrative penthouse apartment and terrace layout; not an approved project drawing'}};
  document.querySelectorAll('.home-tab').forEach(button=>button.addEventListener('click',()=>{const h=homes[button.dataset.home];document.querySelectorAll('.home-tab').forEach(b=>{const active=b===button;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});document.getElementById('home-name').textContent=h.title;document.getElementById('home-kicker').textContent=h.kicker;document.getElementById('home-description').textContent=h.description;document.getElementById('home-config').textContent=h.config;document.getElementById('home-area').textContent=h.area;document.querySelector('.home-enquiry').dataset.enquiry=h.title;}));
  document.querySelectorAll('[data-enquiry]').forEach(link=>link.addEventListener('click',()=>{document.getElementById('selected-home').textContent=`Interested in: ${link.dataset.enquiry}`;}));
  const enquiryForm=document.getElementById('enquiry-form');
  if(enquiryForm){
    const status=document.getElementById('form-status');
    const frame=document.querySelector('.form-response-frame');
    let submitted=false;
    let responseTimeout;
    enquiryForm.addEventListener('submit',event=>{
      if(enquiryForm.action.includes('PASTE_DEPLOYMENT_ID_HERE')){
        event.preventDefault();
        status.textContent='The secure form connection is being finished. Please email purbashabuilders@gmail.com for now.';
        return;
      }
      submitted=true;
      status.textContent='Sending your enquiry…';
      enquiryForm.querySelector('button[type="submit"]').disabled=true;
      responseTimeout=setTimeout(()=>{
        if(!submitted)return;
        submitted=false;
        enquiryForm.querySelector('button[type="submit"]').disabled=false;
        status.textContent='We could not confirm the submission. Your details are still here; please try again or email purbashabuilders@gmail.com.';
      },25000);
    });
    window.addEventListener('message',event=>{
      if(event.source!==frame.contentWindow||event.data?.type!=='purbasha-enquiry-result'||!submitted)return;
      clearTimeout(responseTimeout);
      submitted=false;
      enquiryForm.querySelector('button[type="submit"]').disabled=false;
      if(event.data.ok){
        enquiryForm.reset();
        status.textContent='Thank you. Your enquiry has been received; our team will confirm any requested visit.';
      }else{
        status.textContent='We could not save your enquiry. Your details are still here; please try again or email purbashabuilders@gmail.com.';
      }
    });
  }
  document.getElementById('year').textContent=new Date().getFullYear();
})();
