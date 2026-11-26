(() => {
  const form = document.getElementById('enquiry-form');
  const status = document.getElementById('form-status');
  const frame = document.querySelector('iframe[name="enquiry-response-frame"]');
  const button = form.querySelector('button');
  let pending = false;
  let timeout;

  form.addEventListener('submit', () => {
    pending = true;
    button.disabled = true;
    status.textContent = 'Sending your enquiry…';
    timeout = setTimeout(() => {
      if (!pending) return;
      pending = false;
      button.disabled = false;
      status.textContent = 'We could not confirm your enquiry. Please try again or call 94347 57570.';
    }, 25000);
  });

  window.addEventListener('message', event => {
    if (!pending || event.source !== frame.contentWindow || event.data?.type !== 'purbasha-enquiry-result') return;
    clearTimeout(timeout);
    pending = false;
    button.disabled = false;
    if (event.data.ok) {
      form.reset();
      status.textContent = 'Thank you. Your enquiry has been received. Our team will be in touch.';
    } else {
      status.textContent = 'We could not save your enquiry. Please try again or call 94347 57570.';
    }
  });
})();
