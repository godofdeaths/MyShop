document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    const username = document.getElementById('new-username').value;
    const password = document.getElementById('new-password').value;

    //Hardcoded credentials
    const validuser = "Rakesh";
    const validpass = "1412";
    // Example login logic (replace with actual authentication)
    if (username === validuser && password === validpass) {
        alert('Login successful');
        window.location.href = 'home.html'; // Redirect to home page
    } else {
        alert('Invalid username or password');
    }
});
