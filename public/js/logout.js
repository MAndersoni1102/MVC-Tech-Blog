const logout = async (event) => {
    event.preventDefault();
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    // Redirect to the login page
    if (response.ok) {
      document.location.replace('/login');
    } else {
      alert(response.statusText);
    }
  };
  //Logout Listener
  document.querySelector('#logout').addEventListener('click', logout);