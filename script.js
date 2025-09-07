/**
 * ========================================
 * script.js
 * A JavaScript file with event handling, custom interactive features,
 * and a fully functioning form validation system.
 * ========================================
 */

// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    /**
     * ========================================
     * Section 1: Interactive Features
     * ========================================
     */

    // Feature 1: Content Toggler
    // This feature shows or hides a block of content with a button click.
    const toggleButton = document.getElementById('toggleButton');
    const toggleContent = document.getElementById('toggleContent');

    if (toggleButton && toggleContent) {
        toggleButton.addEventListener('click', () => {
            // The classList.toggle method adds the 'hidden' class if it's not
            // present, and removes it if it is. This is more efficient than
            // manually checking and setting display styles.
            toggleContent.classList.toggle('hidden');
        });
    }

    // Feature 2: Simple Counter
    // This feature increments and decrements a numerical value displayed on the page.
    const decrementButton = document.getElementById('decrementButton');
    const incrementButton = document.getElementById('incrementButton');
    const counterDisplay = document.getElementById('counterDisplay');
    let count = 0;

    if (decrementButton && incrementButton && counterDisplay) {
        // Event listener for the increment button
        incrementButton.addEventListener('click', () => {
            count++;
            counterDisplay.textContent = count;
        });

        // Event listener for the decrement button
        decrementButton.addEventListener('click', () => {
            count--;
            counterDisplay.textContent = count;
        });
    }

    /**
     * ========================================
     * Section 2: Custom Form Validation
     * ========================================
     */

    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const formSuccess = document.getElementById('formSuccess');

    // Add a submit event listener to the form
    contactForm.addEventListener('submit', (event) => {
        // Prevent the default form submission behavior (reloading the page)
        event.preventDefault();
        
        // Run the validation and check if it passes
        if (validateForm()) {
            // If the form is valid, display a success message and reset the form
            formSuccess.textContent = "Form submitted successfully!";
            formSuccess.classList.remove('hidden');
            contactForm.reset();
        } else {
            // If validation fails, hide any previous success message
            formSuccess.classList.add('hidden');
        }
    });

    /**
     * Function to validate the form inputs.
     * @returns {boolean} True if the form is valid, otherwise False.
     */
    function validateForm() {
        let isValid = true;

        // Reset error messages and classes before re-validating
        nameError.textContent = '';
        emailError.textContent = '';
        passwordError.textContent = '';
        nameInput.classList.remove('error');
        emailInput.classList.remove('error');
        passwordInput.classList.remove('error');

        // --- Validation Rule 1: Name ---
        // Check if the name field is empty
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required.';
            nameInput.classList.add('error');
            isValid = false;
        }

        // --- Validation Rule 2: Email ---
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // Check if email is empty or invalid
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Email is required.';
            emailInput.classList.add('error');
            isValid = false;
        } else if (!emailRegex.test(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email address.';
            emailInput.classList.add('error');
            isValid = false;
        }

        // --- Validation Rule 3: Password ---
        // Check if password is empty or too short
        if (passwordInput.value.trim() === '') {
            passwordError.textContent = 'Password is required.';
            passwordInput.classList.add('error');
            isValid = false;
        } else if (passwordInput.value.length < 8) {
            passwordError.textContent = 'Password must be at least 8 characters.';
            passwordInput.classList.add('error');
            isValid = false;
        }

        return isValid;
    }

});