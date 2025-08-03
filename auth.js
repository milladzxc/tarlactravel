// Auth System - Handles login, registration, and session management
document.addEventListener('DOMContentLoaded', function() {
    // Initialize auth system
    initAuth();
    
    // Setup login form if it exists
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    // Setup registration form if it exists
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }
});

// Initialize authentication system
function initAuth() {
    updateAuthUI();
    
    // Check for logout request
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('logout')) {
        handleLogout();
    }
}

// Update UI based on authentication state
function updateAuthUI() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const nav = document.querySelector('nav ul');
    
    if (!nav) return;
    
    // Remove any existing auth links
    const existingAuthLinks = nav.querySelectorAll('.auth-link');
    existingAuthLinks.forEach(link => link.remove());
    
    if (isLoggedIn) {
        // User is logged in
        const userName = localStorage.getItem('userName') || 'My Account';
        
        const profileLink = document.createElement('li');
        profileLink.className = 'auth-link';
        profileLink.innerHTML = `<a href="profile.html">${userName}</a>`;
        
        const logoutLink = document.createElement('li');
        logoutLink.className = 'auth-link';
        logoutLink.innerHTML = '<a href="?logout=true">Logout</a>';
        
        nav.appendChild(profileLink);
        nav.appendChild(logoutLink);
    } else {
        // User is not logged in
        const loginLink = document.createElement('li');
        loginLink.className = 'auth-link';
        loginLink.innerHTML = '<a href="login.html">Login</a>';
        
        const registerLink = document.createElement('li');
        registerLink.className = 'auth-link';
        registerLink.innerHTML = '<a href="register.html">Register</a>';
        
        nav.appendChild(loginLink);
        nav.appendChild(registerLink);
    }
}

// Handle login form submission
function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const rememberMe = document.querySelector('input[name="remember"]').checked;
    
    // Simple validation
    if (!email || !password) {
        alert('Please fill in all fields');
        return;
    }
    
    // In a real app, you would send this to your backend
    console.log('Login attempt with:', { email, password });
    
    // Simulate successful login
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userEmail', email);
    
    // Generate a random name for demo purposes
    const fakeName = "User " + Math.floor(Math.random() * 1000);
    localStorage.setItem('userName', fakeName);
    
    // Set session expiration (1 day if remember me is checked)
    const expiration = rememberMe ? Date.now() + (24 * 60 * 60 * 1000) : null;
    if (expiration) {
        localStorage.setItem('sessionExpires', expiration);
    }
    
    // Redirect to profile page
    window.location.href = 'profile.html';
}

// Handle registration form submission
function handleRegister(e) {
    e.preventDefault();
    
    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const confirm = document.getElementById('regConfirm').value;
    
    // Validation
    if (!name || !email || !password || !confirm) {
        alert('Please fill in all fields');
        return;
    }
    
    if (password !== confirm) {
        alert('Passwords do not match!');
        return;
    }
    
    if (!document.querySelector('input[name="terms"]').checked) {
        alert('You must agree to the Terms of Service');
        return;
    }
    
    // In a real app, you would send this to your backend
    console.log('Registration with:', { name, email, password });
    
    // Simulate successful registration
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userName', name);
    
    // Redirect to profile page
    alert('Registration successful! You are now logged in.');
    window.location.href = 'profile.html';
}

// Handle logout
function handleLogout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    localStorage.removeItem('sessionExpires');
    
    // Remove logout parameter from URL
    const cleanUrl = window.location.href.split('?')[0];
    window.history.replaceState({}, document.title, cleanUrl);
    
    // Update UI and redirect
    updateAuthUI();
    window.location.href = 'index.html';
}

// Check session expiration periodically
setInterval(() => {
    const expiration = localStorage.getItem('sessionExpires');
    if (expiration && Date.now() > parseInt(expiration)) {
        handleLogout();
    }
}, 60 * 1000); // Check every minute