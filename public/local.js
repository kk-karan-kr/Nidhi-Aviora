'use strict';
const menuToggle=document.querySelector('.repair-menu-toggle');
const navigation=document.querySelector('#repair-navigation');
function closeMenu(){navigation.classList.remove('is-open');menuToggle.setAttribute('aria-expanded','false');menuToggle.setAttribute('aria-label','Open menu');}
menuToggle.addEventListener('click',()=>{const open=menuToggle.getAttribute('aria-expanded')!=='true';navigation.classList.toggle('is-open',open);menuToggle.setAttribute('aria-expanded',String(open));menuToggle.setAttribute('aria-label',open?'Close menu':'Open menu');});
navigation.addEventListener('click',event=>{if(event.target.closest('a'))closeMenu();});
document.addEventListener('click',event=>{if(!event.target.closest('.repair-header'))closeMenu();});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&menuToggle.getAttribute('aria-expanded')==='true'){closeMenu();menuToggle.focus();}});
window.matchMedia('(min-width:1001px)').addEventListener('change',event=>{if(event.matches)closeMenu();});
document.querySelectorAll('[data-service]').forEach(link=>link.addEventListener('click',()=>{document.querySelector('#client-service').value=link.dataset.service;}));
document.querySelector('.repair-enquiry').addEventListener('submit',event=>{event.preventDefault();const form=event.currentTarget;if(!form.reportValidity())return;const status=form.querySelector('.repair-form-status');status.textContent='Your enquiry is ready. Live delivery is not connected yet, so nothing has been sent or stored. Keep your message until booking contact details are available.';status.hidden=false;status.focus();});
document.querySelector('#client-year').textContent=new Date().getFullYear();
