document.addEventListener('DOMContentLoaded', () => {
  const signUpButton = document.getElementById('signUp');
  const signInButton = document.getElementById('signIn');
  const container = document.getElementById('container');
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  // Form Switching
  signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
  });

  signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
  });

  // Dark Mode Toggle
  themeToggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
  });

  // Check saved theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.checked = true;
  }

  // Form Validation
  const signUpForm = document.getElementById('signUpForm');
  const signInForm = document.getElementById('signInForm');

  signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const password = signUpForm.querySelector('input[type="password"]');
    const confirmPassword = signUpForm.querySelectorAll('input[type="password"]')[1];
    
    if (password.value !== confirmPassword.value) {
      alert('Passwords do not match!');
      return;
    }
    // Add your signup logic here
    console.log('Sign Up Submitted');
  });

  signInForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your signin logic here
    console.log('Sign In Submitted');
  });

  // Input Validation
  const inputs = document.querySelectorAll('input');
  inputs.forEach(input => {
    input.addEventListener('input', () => {
      if (input.checkValidity()) {
        input.style.borderColor = '#ddd';
      } else {
        input.style.borderColor = 'var(--primary-color)';
      }
    });
  });

  // Social Login Handlers
  document.querySelectorAll('.social').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const provider = button.querySelector('i').classList[1].split('-')[1];
      alert(`Signing in with ${provider.charAt(0).toUpperCase() + provider.slice(1)}`);
    });
  });
});