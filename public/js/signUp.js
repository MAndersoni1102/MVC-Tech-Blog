const signupFormHandler = async (event) => {
    event.preventDefault();
    // Grabs values from form
    const email = document.querySelector('#email-signup').value.trim();
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    // Send a POST request to the API endpoint.
    if (email && username && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, password, email }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to sign up');
      }
    }
  };
  // Calls signupFormHandler after sign up from is listened for
  document
    .querySelector('#signup-form')
    .addEventListener('submit', signupFormHandler);