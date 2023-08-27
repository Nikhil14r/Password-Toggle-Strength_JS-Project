// Get references to the necessary HTML elements
let eyeIcon = document.getElementById('icon');           // Eye icon element
let password = document.getElementById('password');     // Password input field
let msg = document.getElementById('message');            // Message element
let strength = document.getElementById('strength');     // Password strength indicator element
let inputBox = document.getElementById('input-box');     // Input box element

// Toggle password visibility when the eye icon is clicked
eyeIcon.onclick = () => {
    // Check the current type of the password input field
    if (password.type === 'password') {
        // Change the input type to display characters
        password.type = 'text';
        // Change the icon to an open eye icon
        eyeIcon.src = 'assets/eye-open.png';
    } else {
        // Change the input type to hide characters (password)
        password.type = 'password';
        // Change the icon to a closed eye icon
        eyeIcon.src = 'assets/eye-close.png';
    }
}

// Listen for input events on the password input field
password.addEventListener('input', () => {
    // Show or hide the message based on whether the password field is empty
    if (password.value.length > 0) {
        msg.style.display = 'block';
    } else {
        msg.style.display = 'none';
    }

    // Determine the password strength based on its length
    if (password.value.length < 4) {
        // Password is weak
        strength.innerHTML = 'weak';
        msg.style.color = '#ff5925';            // Set message color to red
        inputBox.style.borderColor = '#ff5925'; // Set input box border color to red
    } else if (password.value.length > 4 && password.value.length < 8) {
        // Password is medium
        strength.innerHTML = 'medium';
        msg.style.color = 'yellow';             // Set message color to yellow
        inputBox.style.borderColor = 'yellow';  // Set input box border color to yellow
    } else if (password.value.length >= 8) {
        // Password is strong
        strength.innerHTML = 'strong';
        msg.style.color = '#26d730';            // Set message color to green
        inputBox.style.borderColor = '#26d730'; // Set input box border color to green
    }
});
