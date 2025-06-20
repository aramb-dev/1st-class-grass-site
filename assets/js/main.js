// 1st Class Grass - Main JavaScript

document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Address field data
  const streetData = {
    'Harlowe Point': [
      'Spoonbill Trail',
      'Red Wing Drive',
      'Cape May Lane',
      'Sora Way',
      'Rosefinch Drive',
      'Bunting Way',
      'Winter Wren Lane'
    ],
    'Pagehurst': [
      'Honey Suckle Lane',
      'Sagar Court',
      'Page Ford Drive',
      'Sameer Court',
      'Muscadine Court',
      'Galax Lane'
    ]
  };

  // Setup address fields
  setupAddressFields();

  // Form validation
  const contactForm = document.getElementById('contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      // Netlify handles form submission, but we can add client-side validation
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const messageInput = document.getElementById('message');
      const streetNumberInput = document.getElementById('street-number');
      const neighborhoodInput = document.getElementById('neighborhood');
      const streetNameInput = document.getElementById('street-name');
      const addressInput = document.getElementById('address');

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

      // Street number validation
      if (streetNumberInput && streetNumberInput.value.trim() === '') {
        isValid = false;
        showError(streetNumberInput, 'Please enter your street number');
      } else if (streetNumberInput && !/^\d+$/.test(streetNumberInput.value.trim())) {
        isValid = false;
        showError(streetNumberInput, 'Please enter a valid numeric street number');
      } else if (streetNumberInput) {
        removeError(streetNumberInput);
      }

      // Neighborhood validation
      if (neighborhoodInput && neighborhoodInput.value === '') {
        isValid = false;
        showError(neighborhoodInput, 'Please select your neighborhood');
      } else if (neighborhoodInput) {
        removeError(neighborhoodInput);
      }

      // Street name validation
      if (streetNameInput && streetNameInput.value === '') {
        isValid = false;
        showError(streetNameInput, 'Please select your street');
      } else if (streetNameInput) {
        removeError(streetNameInput);
      }

      // Concatenate address before submission
      if (isValid && streetNumberInput && streetNameInput && neighborhoodInput) {
        const fullAddress = `${streetNumberInput.value} ${streetNameInput.value}, Durham, NC 27703`;
        addressInput.value = fullAddress;
      }

      if (!isValid) {
        e.preventDefault();
      }
    });
  }

  // Setup address fields functionality
  function setupAddressFields() {
    const neighborhoodSelect = document.getElementById('neighborhood');
    const streetNameSelect = document.getElementById('street-name');
    const streetNumberInput = document.getElementById('street-number');

    if (neighborhoodSelect && streetNameSelect) {
      // When neighborhood changes, update street options
      neighborhoodSelect.addEventListener('change', () => {
        const selectedNeighborhood = neighborhoodSelect.value;

        // Clear current options
        streetNameSelect.innerHTML = '<option value="">Select Street</option>';

        // Disable street select if no neighborhood is selected
        if (selectedNeighborhood === '') {
          streetNameSelect.disabled = true;
          return;
        }

        // Enable street select and populate options
        streetNameSelect.disabled = false;

        // Add new options based on selected neighborhood
        const streets = streetData[selectedNeighborhood] || [];
        streets.forEach(street => {
          const option = document.createElement('option');
          option.value = street;
          option.textContent = street;
          streetNameSelect.appendChild(option);
        });
      });

      // Real-time address concatenation for preview (optional)
      [neighborhoodSelect, streetNameSelect, streetNumberInput].forEach(input => {
        if (input) {
          input.addEventListener('change', updateAddressPreview);
          if (input === streetNumberInput) {
            input.addEventListener('input', updateAddressPreview);
          }
        }
      });
    }
  }

  // Update address preview (optional)
  function updateAddressPreview() {
    const streetNumber = document.getElementById('street-number')?.value || '';
    const streetName = document.getElementById('street-name')?.value || '';

    if (streetNumber && streetName) {
      const fullAddress = `${streetNumber} ${streetName}, Durham, NC 27703`;
      document.getElementById('address').value = fullAddress;
    }
  }

  // Testimonials
  loadTestimonials();

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

  // Testimonial functions
  function loadTestimonials() {
    // Get the current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    fetch('/data/testimonials.json')
      .then(response => response.json())
      .then(data => {
        const testimonials = data.testimonials;

        // Filter testimonials if needed
        const filteredTestimonials = filterTestimonialsByService(testimonials, currentPage);

        // Set up rotation
        setupTestimonialRotation(filteredTestimonials);
      })
      .catch(error => console.error('Error loading testimonials:', error));
  }

  function filterTestimonialsByService(testimonials, currentPage) {
    // For the homepage, prioritize featured testimonials
    if (currentPage === 'index.html') {
      // Sort by featured first, then by rating
      return [...testimonials].sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return b.rating - a.rating;
      });
    }

    // For the services page, filter by service type
    if (currentPage === 'services.html') {
      // Include all testimonials but sort by service relevance
      return [...testimonials].sort((a, b) => {
        // Prioritize "Mowing + Trimming" testimonials
        if (a.service === "Mowing + Trimming" && b.service !== "Mowing + Trimming") return -1;
        if (a.service !== "Mowing + Trimming" && b.service === "Mowing + Trimming") return 1;

        // Then by rating
        return b.rating - a.rating;
      });
    }

    // Default: return all testimonials sorted by rating
    return [...testimonials].sort((a, b) => b.rating - a.rating);
  }

  function setupTestimonialRotation(testimonials) {
    const container = document.getElementById('testimonial-container');
    if (!container || testimonials.length === 0) return;

    let currentIndex = 0;

    // Initial display
    displayTestimonial(testimonials[currentIndex], container);

    // Set up rotation interval
    setInterval(() => {
      currentIndex = (currentIndex + 1) % testimonials.length;
      displayTestimonial(testimonials[currentIndex], container);
    }, 5000); // Rotate every 5 seconds
  }

  function displayTestimonial(testimonial, container) {
    // Create testimonial HTML and add to container
    const testimonialHTML = `
      <div class="testimonial fade-in">
        <div class="rating">${generateStars(testimonial.rating)}</div>
        <p class="text-lg italic mb-4">"${testimonial.text}"</p>
        <div class="flex items-center justify-between">
          <p class="font-medium">- ${testimonial.name}, ${testimonial.location}</p>
          <p class="text-sm text-gray-600">Service: ${testimonial.service}</p>
        </div>
      </div>
    `;

    // Apply fade-out to current content
    container.classList.add('fade-out');

    // After a short delay, update content and fade in
    setTimeout(() => {
      container.innerHTML = testimonialHTML;
      container.classList.remove('fade-out');
      container.classList.add('fade-in');

      // Remove the fade-in class after animation completes
      setTimeout(() => {
        container.classList.remove('fade-in');
      }, 500);
    }, 500);
  }

  function generateStars(rating) {
    // Fixed star rendering with proper styling
    const fullStar = '<span class="text-yellow-400 inline-block">★</span>';
    const emptyStar = '<span class="text-gray-300 inline-block">★</span>';

    let stars = '';
    for (let i = 1; i <= 5; i++) {
      stars += i <= rating ? fullStar : emptyStar;
    }

    return stars;
  }
});