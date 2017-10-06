import { SERVER_URL } from '../config';

export const signup = user =>
  dispatch => {
    fetch(SERVER_URL + 'api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      body: JSON.stringify({
        user
      })
    })
    .then(response => response.json())
    .then(response => {
      console.log('SUCCESS!');
      console.log(JSON.stringify(response, null, 2));
    })
    .catch(error => {
      console.log('ERROR!');
      console.log(JSON.stringify(error, null, 2));
    });
  }

export const login = creds =>
  dispatch => {
    dispatch({
      type: 'SHOW_LOGIN_SPINNER'
    });

    fetch(SERVER_URL + 'auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...creds
      }),
      credentials: 'include'
    })
    .then(response => {
      if(response.status === 200) {
        dispatch({
          type: 'REDIRECT_TO_ADMIN'
        });
      } else {
        dispatch({
          type: 'FAILED_LOGIN'
        });
      }
    })
    .then(() => {
      dispatch({
        type: 'HIDE_LOGIN_SPINNER'
      });
    });
  }

  export const hideLoginAlerts = () => dispatch => {
    dispatch({
      type: 'HIDE_FAILED_LOGIN'
    });
  }