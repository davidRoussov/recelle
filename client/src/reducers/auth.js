const auth = (state = {}, action) => {
  switch(action.type) {
    case 'REDIRECT_TO_ADMIN':
      return { ...state, redirectToAdmin: true };
    case 'FAILED_LOGIN':
      return { ...state, displayFailedLoginAlert: true };
    case 'HIDE_FAILED_LOGIN':
      return { ...state, displayFailedLoginAlert: false };
    case 'SHOW_LOGIN_SPINNER':
      return { ...state, showLoginSpinner: true };
    case 'HIDE_LOGIN_SPINNER':
      return { ...state, showLoginSpinner: false };
    case 'ERROR_CREATING_NEW_USER':
      return { ...state, showErrorCreatingUserAlert: true, showErrorCreatingUserAlertMessage: action.data };
    case 'HIDE_ALERTS':
      return { ...state, 
        showErrorCreatingUserAlert: false
      };
    default:
      return state;
  }
};

export default auth;