// Registration form validation script

document.addEventListener('DOMContentLoaded', function() {
    // Get form elements
    const form = document.getElementById('registrationForm');
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const surname = document.getElementById('surname');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const genderInputs = document.querySelectorAll('input[name="gender"]');
    const country = document.getElementById('country');
    const terms = document.getElementById('terms');
    const submitBtn = document.getElementById('submitBtn');
    const summarySection = document.getElementById('summarySection');
    const summaryContent = document.getElementById('summaryContent');
    const backToFormBtn = document.getElementById('backToFormBtn');

    // Error divs
    const firstNameError = document.getElementById('firstNameError');
    const lastNameError = document.getElementById('lastNameError');
    const surnameError = document.getElementById('surnameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    const genderError = document.getElementById('genderError');
    const countryError = document.getElementById('countryError');
    const termsError = document.getElementById('termsError');

    // Validation state object
    const validationState = {
        firstName: false,
        lastName: false,
        surname: false,
        email: false,
        password: false,
        confirmPassword: false,
        gender: false,
        country: false,
        terms: false
    };

    // Validation functions
    function validateFirstName() {
        const value = firstName.value.trim();

        // Clear previous error message
        clearErrorMessage(firstNameError);

        if (value.length < 5) {
            showError(firstNameError, 'First name must be at least 5 characters long');
            setInputInvalid(firstName);
            validationState.firstName = false;
        } else {
            setInputValid(firstName);
            validationState.firstName = true;
        }

        updateSubmitButton();
    }

    function validateLastName() {
        const value = lastName.value.trim();

        clearErrorMessage(lastNameError);

        if (value.length < 1) {
            showError(lastNameError, 'Last name is required');
            setInputInvalid(lastName);
            validationState.lastName = false;
        } else {
            setInputValid(lastName);
            validationState.lastName = true;
        }

        updateSubmitButton();
    }

    function validateSurname() {
        const value = surname.value.trim();

        clearErrorMessage(surnameError);

        if (value.length < 1) {
            showError(surnameError, 'Surname/Family name is required');
            setInputInvalid(surname);
            validationState.surname = false;
        } else {
            setInputValid(surname);
            validationState.surname = true;
        }

        updateSubmitButton();
    }

    function validateEmail() {
        const value = email.value.trim();

        clearErrorMessage(emailError);

        if (!value.includes('@')) {
            showError(emailError, 'Email must contain "@" symbol');
            setInputInvalid(email);
            validationState.email = false;
        } else {
            setInputValid(email);
            validationState.email = true;
        }

        updateSubmitButton();
    }

    function validatePassword() {
        const value = password.value;

        clearErrorMessage(passwordError);

        const hasMinLength = value.length >= 8;
        const hasUpperCase = /[A-Z]/.test(value);

        if (!hasMinLength || !hasUpperCase) {
            let errorMessage = 'Password must contain at least 8 characters and one uppercase letter';
            if (!hasMinLength && !hasUpperCase) {
                errorMessage = 'Password must contain at least 8 characters and one uppercase letter';
            } else if (!hasMinLength) {
                errorMessage = 'Password must contain at least 8 characters';
            } else if (!hasUpperCase) {
                errorMessage = 'Password must contain at least one uppercase letter';
            }

            showError(passwordError, errorMessage);
            setInputInvalid(password);
            validationState.password = false;
        } else {
            setInputValid(password);
            validationState.password = true;
        }

        // Also validate confirm password if it has a value
        if (confirmPassword.value) {
            validateConfirmPassword();
        }

        updateSubmitButton();
    }

    function validateConfirmPassword() {
        const passwordValue = password.value;
        const confirmPasswordValue = confirmPassword.value;

        clearErrorMessage(confirmPasswordError);

        if (confirmPasswordValue !== passwordValue) {
            showError(confirmPasswordError, 'Passwords do not match');
            setInputInvalid(confirmPassword);
            validationState.confirmPassword = false;
        } else if (confirmPasswordValue.length < 1) {
            showError(confirmPasswordError, 'Please confirm your password');
            setInputInvalid(confirmPassword);
            validationState.confirmPassword = false;
        } else {
            setInputValid(confirmPassword);
            validationState.confirmPassword = true;
        }

        updateSubmitButton();
    }

    function validateGender() {
        clearErrorMessage(genderError);

        const isChecked = Array.from(genderInputs).some(radio => radio.checked);

        if (!isChecked) {
            showError(genderError, 'Please select a gender');
            validationState.gender = false;
        } else {
            validationState.gender = true;
        }

        updateSubmitButton();
    }

    function validateCountry() {
        clearErrorMessage(countryError);

        if (country.value === '') {
            showError(countryError, 'Please select a country');
            setInputInvalid(country);
            validationState.country = false;
        } else {
            setInputValid(country);
            validationState.country = true;
        }

        updateSubmitButton();
    }

    function validateTerms() {
        clearErrorMessage(termsError);

        if (!terms.checked) {
            showError(termsError, 'You must agree to the Terms and Conditions');
            validationState.terms = false;
        } else {
            validationState.terms = true;
        }

        updateSubmitButton();
    }

    // Helper functions for displaying errors
    function showError(errorDiv, message) {
        // Clear existing content
        errorDiv.textContent = '';

        // Create error element
        const errorElement = document.createElement('div');
        errorElement.className = 'error';
        errorElement.textContent = message;

        // Append error element to error div
        errorDiv.appendChild(errorElement);
    }

    function clearErrorMessage(errorDiv) {
        // Clear all child elements
        while (errorDiv.firstChild) {
            errorDiv.removeChild(errorDiv.firstChild);
        }
    }

    function setInputValid(inputElement) {
        inputElement.classList.remove('invalid');
        inputElement.classList.add('valid');
    }

    function setInputInvalid(inputElement) {
        inputElement.classList.remove('valid');
        inputElement.classList.add('invalid');
    }

    function updateSubmitButton() {
        const allValid = Object.values(validationState).every(isValid => isValid);
        submitBtn.disabled = !allValid;
    }

    // Event listeners for live validation
    firstName.addEventListener('input', validateFirstName);
    firstName.addEventListener('blur', validateFirstName);

    lastName.addEventListener('input', validateLastName);
    lastName.addEventListener('blur', validateLastName);

    surname.addEventListener('input', validateSurname);
    surname.addEventListener('blur', validateSurname);

    email.addEventListener('input', validateEmail);
    email.addEventListener('blur', validateEmail);

    password.addEventListener('input', validatePassword);
    password.addEventListener('blur', validatePassword);

    confirmPassword.addEventListener('input', validateConfirmPassword);
    confirmPassword.addEventListener('blur', validateConfirmPassword);

    genderInputs.forEach(input => {
        input.addEventListener('change', validateGender);
    });

    country.addEventListener('change', validateCountry);

    terms.addEventListener('change', validateTerms);

    // Form submission handler
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default form submission

        // Validate all fields one final time
        validateFirstName();
        validateLastName();
        validateSurname();
        validateEmail();
        validatePassword();
        validateConfirmPassword();
        validateGender();
        validateCountry();
        validateTerms();

        // Check if all validations pass
        const allValid = Object.values(validationState).every(isValid => isValid);

        if (allValid) {
            // Create summary section
            createSummary();

            // Hide the form and show the summary
            form.style.display = 'none';
            summarySection.style.display = 'block';
        }
    });

    function createSummary() {
        // Clear existing summary content
        summaryContent.innerHTML = '';

        // Create summary items
        const firstNameValue = firstName.value.trim();
        const lastNameValue = lastName.value.trim();
        const surnameValue = surname.value.trim();
        const emailValue = email.value.trim();
        const genderValue = Array.from(genderInputs).find(radio => radio.checked)?.value || '';
        const countryValue = country.options[country.selectedIndex]?.text || '';

        // Create and append summary items
        const nameItem = document.createElement('div');
        nameItem.className = 'summary-item';
        nameItem.innerHTML = `<strong>Name:</strong> ${firstNameValue} ${lastNameValue} ${surnameValue}`;

        const emailItem = document.createElement('div');
        emailItem.className = 'summary-item';
        emailItem.innerHTML = `<strong>Email:</strong> ${emailValue}`;

        const genderItem = document.createElement('div');
        genderItem.className = 'summary-item';
        genderItem.innerHTML = `<strong>Gender:</strong> ${genderValue.charAt(0).toUpperCase() + genderValue.slice(1)}`;

        const countryItem = document.createElement('div');
        countryItem.className = 'summary-item';
        countryItem.innerHTML = `<strong>Country:</strong> ${countryValue}`;

        // Append all items to summary content
        summaryContent.appendChild(nameItem);
        summaryContent.appendChild(emailItem);
        summaryContent.appendChild(genderItem);
        summaryContent.appendChild(countryItem);
    }

    // Back to form button functionality
    backToFormBtn.addEventListener('click', function() {
        // Hide the summary section
        summarySection.style.display = 'none';

        // Show the form again
        form.style.display = 'block';

        // Scroll to the top of the form
        form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});