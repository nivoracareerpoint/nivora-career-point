document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }

  // Netlify AJAX form submit -> show inline success message, no page reload
  document.querySelectorAll('form[data-netlify-ajax]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var data = new FormData(form);
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data).toString()
      })
        .then(function () {
          form.style.display = 'none';
          var success = form.parentElement.querySelector('.form-success');
          if (success) success.style.display = 'block';
        })
        .catch(function () {
          alert('Something went wrong sending your enquiry. Please try again or email us directly.');
        });
    });
  });
});
