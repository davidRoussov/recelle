export function getBlogPosts() {
  return dispatch => {
    fetch('/api/blog')
    .then(response => response.json())
    .then(response => {
      dispatch({
        type: 'GET_BLOG_POSTS',
        data: response.data
      });
    });
  }
}