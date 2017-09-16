const blog = (state = {}, action) => {
  switch(action.type) {
    case 'GET_BLOG_POSTS':
      return { ...state, posts: action.data };
    default:
      return state;
  }
};

export default blog;