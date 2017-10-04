const blog = (state = {}, action) => {
  switch(action.type) {
    case 'REDIRECT_TO_ADMIN':
      return { ...state, redirectToAdmin: true };
    default:
      return state;
  }
};

export default blog;