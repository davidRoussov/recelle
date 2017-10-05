const blog = (state = {}, action) => {
  switch(action.type) {
    case 'REDIRECT_TO_ADMIN':
      return { ...state, redirectToAdmin: true };
    case 'FAILED_LOGIN':
      return { ...state, displayFailedLoginAlert: true };
    default:
      return state;
  }
};

export default blog;