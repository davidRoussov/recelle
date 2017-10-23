import { SERVER_URL } from '../config';

const handleErrors = response => new Promise((resolve, reject) => {
  if(response.ok) resolve(response);
  else {
    response.json()
      .then(json => reject(json))
      .catch(() => reject(response.statusText));
  }
});

export const hideAlerts = () => dispatch => {
  dispatch({
    type: 'HIDE_ALERTS'
  });
};

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
    .then(handleErrors)
    .then(response => {
      window.location = '/login';
    })
    .catch(error => {
      dispatch({
        type: 'ERROR_CREATING_NEW_USER',
        data: error.message
      });
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