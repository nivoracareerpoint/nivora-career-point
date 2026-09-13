document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-controls', 'site-navigation');
    links.id = 'site-navigation';
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    links.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  document.querySelectorAll('form[data-netlify-ajax]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var button = form.querySelector('button[type="submit"]');
      var data = new FormData(form);
      var success = form.parentElement.querySelector('.form-success');
      if (button) { button.disabled = true; button.setAttribute('aria-busy', 'true'); }
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data).toString()
      }).then(function (response) {
        if (!response.ok) throw new Error('Form submission failed');
        form.hidden = true;
        if (success) { success.hidden = false; success.setAttribute('tabindex', '-1'); success.focus(); }
      }).catch(function () {
        if (button) { button.disabled = false; button.removeAttribute('aria-busy'); }
        if (success) { success.hidden = false; success.textContent = 'We could not send your enquiry. Please try again or email us directly.'; }
      });
    });
  });
});
