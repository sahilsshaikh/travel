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

    // If valid, open WhatsApp with formatted message
    if (isValid) {
      var destinationEl = document.getElementById('destination');
      var destinationVal = destinationEl ? destinationEl.value : '';

      var formattedText = 'Hello RK Tours %26 Travels,%0A%0A' +
        '*New Booking Inquiry*%0A' +
        '👤 *Name:* ' + encodeURIComponent(name) + '%0A' +
        '📞 *Phone:* ' + encodeURIComponent(phone) + '%0A' +
        '✉️ *Email:* ' + encodeURIComponent(email) + '%0A';

      if (destinationVal) {
        formattedText += '📍 *Destination/Package:* ' + encodeURIComponent(destinationVal) + '%0A';
      }

      formattedText += '💬 *Message:* ' + encodeURIComponent(message);

      var whatsappUrl = 'https://wa.me/917285038337?text=' + formattedText;

      document.getElementById('formSuccess').style.display = 'block';
      contactForm.reset();

      // Redirect directly to WhatsApp without popup blocking
      window.location.href = whatsappUrl;

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
