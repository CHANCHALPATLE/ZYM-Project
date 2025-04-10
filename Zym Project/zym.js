// main.js
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuButton = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuButton && mobileMenu) {
      menuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
      });
    }
    
    // Authentication handling
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const logoutButton = document.getElementById('logout-button');
    
    // Check if user is logged in from localStorage
    const checkAuthStatus = () => {
      const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
      document.querySelectorAll('.auth-logged-in').forEach(el => {
        el.style.display = isLoggedIn ? 'block' : 'none';
      });
      document.querySelectorAll('.auth-logged-out').forEach(el => {
        el.style.display = isLoggedIn ? 'none' : 'block';
      });
    };
    
    // Call on page load
    checkAuthStatus();
    
    // Handle login form submission
    if (loginForm) {
      loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Mock authentication
        setTimeout(() => {
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('userEmail', email);
          
          // Show success message
          alert('Logged in successfully!');
          
          // Redirect to home page
          window.location.href = '/';
        }, 1000);
      });
    }
    
    // Handle signup form submission
    if (signupForm) {
      signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Mock registration
        setTimeout(() => {
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('userEmail', email);
          localStorage.setItem('userName', name);
          
          // Show success message
          alert('Account created successfully!');
          
          // Redirect to home page
          window.location.href = '/';
        }, 1000);
      });
    }
    
    // Handle logout
    if (logoutButton) {
      logoutButton.addEventListener('click', function() {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userName');
        checkAuthStatus();
        
        // Show message
        alert('Logged out successfully!');
        
        // Stay on current page but refresh auth state
        window.location.reload();
      });
    }
  });
  