const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Get the email and password from the login form
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    // Sends the user to the login route
    if (email && password) {
      try {
        const response = await fetch('/api/users/login', {
          method: 'POST',
          body: JSON.stringify({ email, password }),
          headers: { 'Content-Type': 'application/json' },
        });
        // Redirects to the homepage
        if (response.ok) {
          document.location.replace('/');
        } else {
          throw new Error('Failed to log in');
        }
      } catch (err) {
        alert(err.message);
      }
    }
  };
  
  document
    .querySelector('#login-form')
    .addEventListener('submit', loginFormHandler);