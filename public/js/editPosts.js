document.addEventListener('DOMContentLoaded', () => {
    // This function is used to edit a post
    const editPost = async (event) => {
      event.preventDefault();
      const title = document.querySelector('#title').value.trim();
      const content = document.querySelector('#post_content').value.trim();
      const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];
      if (title && content) {
        const response = await fetch(`/api/posts/editPost/${id}`, {
          method: 'PUT',
          body: JSON.stringify({ title, post_content: content }),
          headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
          document.location.replace('/dashboard');
        } else {
          alert('Failed to edit post');
        }
      }
    };
    // This code is used to listen for the submit event on the edit-post-form and call the editPost function.
    document
      .querySelector('#edit-post-form')
      .addEventListener('submit', editPost);
    // This function deletes a post
    const deletePost = async (event) => {
      event.preventDefault();
      // This will get rid of the post id
      const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];
      // Fetch request for the server to delete the post
      const response = await fetch(`/api/posts/editpost/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete post');
      }
    };
    document
      .querySelector('#delete-post-btn')
      .addEventListener('click', deletePost);
  });