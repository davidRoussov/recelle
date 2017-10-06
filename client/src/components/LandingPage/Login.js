import React, { Component } from 'react';
import { FormControl, FormGroup, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { login, hideLoginAlerts } from '../../actions/auth';
import Alert from 'react-s-alert';

import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
const alertConfig = {
  position: 'top-right',
  effect: 'bouncyflip',
  timeout: 3,
  onShow: () => console.log("blah blah")
};

class Login extends Component {
  constructor() {
    super();
    this.state = {
      userInputsEmailAddress: '',
      userInputsPassword: ''
    }
  }

  componentWillReceiveProps(props) {
    console.log(JSON.stringify(props, null, 2));
    if (props.redirectToAdmin) {
      window.location.href = "http://localhost:3000/admin";
    }
    if (props.displayFailedLoginAlert) {
      Alert.error('Invalid email address or password', alertConfig);
      this.props.hideLoginAlerts();
    }
  }

  handleLogin(e) {
    e.preventDefault();
    this.props.login({
      username: this.state.userInputsEmailAddress,
      password: this.state.userInputsPassword
    });
  }

  handleUserInputsEmailAddress = e => this.setState({ userInputsEmailAddress: e.target.value })
  handleUserInputsPassword = e => this.setState({ userInputsPassword: e.target.value })

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
      },
      spinner: {
        fontSize: '28px',
        color: 'black'
      }
    };

    return (
      <div style={style.container}>
        <div style={style.middle}>
          <div style={style.form} className='panel panel-default'>
            <div style={style.panelBody} className='panel-body'>
              <h3 style={style.formHeading}>Log in to your account</h3>

              {this.props.showLoginSpinner ? <i className="fa fa-spinner fa-spin" aria-hidden="true" style={style.spinner}></i> :

                <form onSubmit={this.handleLogin.bind(this)}>
                  <FormGroup>
                    <FormControl
                      type='email'
                      placeholder='Email address'
                      style={style.inputEmailAddress}
                      value={this.state.userInputsEmailAddress}
                      onChange={this.handleUserInputsEmailAddress.bind(this)}>
                    </FormControl>
                    <FormControl
                      type='password'
                      placeholder='Password'
                      style={style.inputPassword}
                      value={this.state.userInputsPassword}
                      onChange={this.handleUserInputsPassword}>
                    </FormControl>
                    <Button
                      type='submit'
                      className='btn-primary'
                      style={style.loginButton}>
                    Log In</Button>
                  </FormGroup>
                </form>

              }
            </div>

            <div style={style.panelFooter} className='panel-footer'>
              <span>No account?  </span>
              <a href='/signup'>  Sign up</a>              
            </div>
          </div>
          <a style={{color: 'white'}}>Forgot your password?</a>
        </div>
      

        <Alert/>
      </div>
    )
  }
}

const mapStateToProps = state => state.auth;

const mapDispatchToProps = {
  login,
  hideLoginAlerts
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);