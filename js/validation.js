// ============================
// RK Tours & Travels - Form Validation
// ============================

var contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    var name = document.getElementById('name').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();

    var isValid = true;

    // Validate Name
    if (name === '' || name.length < 2) {
      document.getElementById('nameGroup').classList.add('error');
      isValid = false;
    } else {
      document.getElementById('nameGroup').classList.remove('error');
    }

    // Validate Phone (10 digit Indian number)
    var phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
      document.getElementById('phoneGroup').classList.add('error');
      isValid = false;
    } else {
      document.getElementById('phoneGroup').classList.remove('error');
    }

    // Validate Email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      document.getElementById('emailGroup').classList.add('error');
      isValid = false;
    } else {
      document.getElementById('emailGroup').classList.remove('error');
    }

    // Validate Message
    if (message === '') {
      document.getElementById('messageGroup').classList.add('error');
      isValid = false;
    } else {
      document.getElementById('messageGroup').classList.remove('error');
    }

    // If valid, show success message
    if (isValid) {
      document.getElementById('formSuccess').style.display = 'block';
      contactForm.reset();

      // Hide success message after 5 seconds
      setTimeout(function () {
        document.getElementById('formSuccess').style.display = 'none';
      }, 5000);
    }
  });

  // Remove error on input
  var inputs = contactForm.querySelectorAll('input, textarea, select');
  inputs.forEach(function (input) {
    input.addEventListener('input', function () {
      input.closest('.form-group').classList.remove('error');
    });
  });
}
