'use strict';
const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Open navigation');
  navigation.classList.remove('is-open');
}
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  navigation.classList.toggle('is-open', open);
});
navigation.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    toggle.focus();
  }
});
document.addEventListener('click', event => {
  if (!event.target.closest('.nav-wrap')) closeMenu();
});
window.matchMedia('(min-width: 1001px)').addEventListener('change', event => {
  if (event.matches) closeMenu();
});
document.querySelectorAll('[data-service]').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('#service').value = link.dataset.service;
  });
});
document.querySelector('#enquiry-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const status = document.querySelector('#form-status');
  status.textContent = 'Your enquiry is ready. Live delivery is not connected yet, so nothing has been sent or stored. Please keep your message until booking contact details are available.';
  status.hidden = false;
  status.focus();
});
document.querySelector('#year').textContent = new Date().getFullYear();
