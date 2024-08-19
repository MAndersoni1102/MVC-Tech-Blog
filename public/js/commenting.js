const newCommentHandler = async (event) => {
    event.preventDefault();
    const post_id = document.querySelector('#post_id').value?.trim();
    const comment_text = document.querySelector('#comment_text').value?.trim();
    if (post_id && comment_text) {
      const response = await fetch(`/api/comments/newComment`, {
        method: 'POST',
        body: JSON.stringify({ post_id, comment_text }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        // Clear the comment form upon submisson.
        // Upon submission, you will be redirected to the post page.
        document.location.replace('/post/' + post_id);
      } else {
        alert('Failed to create comment');
      }
    }
  };
  document
    .querySelector('#new-comment-form')
    .addEventListener('submit', newCommentHandler);