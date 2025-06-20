// First Class Grass - Main JavaScript

document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Form validation
  const contactForm = document.getElementById('contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      // Netlify handles form submission, but we can add client-side validation
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const messageInput = document.getElementById('message');

      let isValid = true;

      // Simple validation
      if (nameInput && nameInput.value.trim() === '') {
        isValid = false;
        showError(nameInput, 'Please enter your name');
      } else if (nameInput) {
        removeError(nameInput);
      }

      if (emailInput && !isValidEmail(emailInput.value)) {
        isValid = false;
        showError(emailInput, 'Please enter a valid email');
      } else if (emailInput) {
        removeError(emailInput);
      }

      if (messageInput && messageInput.value.trim() === '') {
        isValid = false;
        showError(messageInput, 'Please enter a message');
      } else if (messageInput) {
        removeError(messageInput);
      }

      if (!isValid) {
        e.preventDefault();
      }
    });
  }

  // Helper functions
  function showError(input, message) {
    const formGroup = input.parentElement;
    const errorElement = formGroup.querySelector('.error-message') || document.createElement('p');

    errorElement.className = 'error-message text-red-500 text-sm mt-1';
    errorElement.textContent = message;

    if (!formGroup.querySelector('.error-message')) {
      formGroup.appendChild(errorElement);
    }

    input.classList.add('border-red-500');
  }

  function removeError(input) {
    const formGroup = input.parentElement;
    const errorElement = formGroup.querySelector('.error-message');

    if (errorElement) {
      formGroup.removeChild(errorElement);
    }

    input.classList.remove('border-red-500');
  }

  function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
});