import React, { Component } from 'react';
import { FormControl, FormGroup, Button } from 'react-bootstrap';

class Login extends Component {
  render() {
    const style = {
      container: {
        background: '#ad1c0c',//'linear-gradient(#2c3e50, #0C2032)',
        height: '100%',
        width: '100%',
        textAlign: 'center',
        display: 'table'
      },
      middle: {
        display: 'table-cell',
        verticalAlign: 'middle'
      },
      form: {
        backgroundColor: '#F8F8F8',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: '8px',
        width: '30%',
        // padding: '40px',
        boxShadow: '0 0 10px #000'
      },
      panelBody: {
        padding: '40px'
      },
      panelFooter: {
        borderRadius: '0px 0px 8px 8px',
        padding: '20px'
      },  
      formHeading: {
        margin: '0px',
        marginBottom: '20px'
      },
      inputEmailAddress: {
        marginBottom: '20px'
      },
      inputPassword: {
        marginBottom: '20px'
      },
      loginButton: {
        width: '100%'
      }
    };

    return (
      <div style={style.container}>
        <div style={style.middle}>
          <div style={style.form} className='panel panel-default'>
            <div style={style.panelBody} className='panel-body'>
              <h3 style={style.formHeading}>Log in to your account</h3>
              <FormGroup>
                <FormControl
                  type='email'
                  placeholder='Email address'
                  style={style.inputEmailAddress}>
                </FormControl>
                <FormControl
                  type='password'
                  placeholder='Password'
                  style={style.inputPassword}>
                </FormControl>
                <Button
                  type='submit'
                  className='btn-primary'
                  style={style.loginButton}>
                Log In</Button>
              </FormGroup>
            </div>

            <div style={style.panelFooter} className='panel-footer'>
              <span>No account?  </span>
              <a href='/signup'>  Sign up</a>              
            </div>
          </div>
          <a style={{color: 'white'}}>Forgot your password?</a>
        </div>
      </div>
    )
  }
}

export default Login;