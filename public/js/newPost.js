const newPost = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#post-title').value.trim();
    const post_content = document.querySelector('#post-content').value.trim();
    if (title && post_content) {
      // Fetch request to the server to create a new post
      const response = await fetch('/dashboard/posts/new', {
        method: 'POST',
        body: JSON.stringify({ title, post_content }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create post');
      }
    }
  };
  // Sumbit Event Listener
  document.querySelector('#newPostForm').addEventListener('submit', newPost);