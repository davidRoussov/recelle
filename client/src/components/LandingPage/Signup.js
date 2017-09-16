import React, { Component } from 'react';
import { FormControl, FormGroup, Button, ControlLabel } from 'react-bootstrap';

class Signup extends Component {
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
        boxShadow: '0 0 10px #000'
      },
      panelBody: {
        padding: '40px'
      },
      label: {
        float: 'left'
      },
      inputField: {
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
              <form>
                <FormGroup>
                  <ControlLabel style={style.label}>First name</ControlLabel>
                  <FormControl
                    type='text'
                    placeholder='First name'
                    style={style.inputField}
                  />
                </FormGroup>
                <FormGroup>
                  <ControlLabel style={style.label}>Last name</ControlLabel>
                  <FormControl
                    type='text'
                    placeholder='Last name'
                    style={style.inputField}
                  />
                </FormGroup>
                <FormGroup>
                  <ControlLabel style={style.label}>Email address</ControlLabel>
                  <FormControl
                    type='email'
                    placeholder='Email address'
                    style={style.inputField}
                  />
                </FormGroup>
                <FormGroup>
                  <ControlLabel style={style.label}>Password</ControlLabel>
                  <FormControl
                    type='password'
                    placeholder='Password'
                    style={style.inputField}
                  />
                </FormGroup>
                <FormGroup>
                  <ControlLabel style={style.label}>Re-type password</ControlLabel>
                  <FormControl
                    type='password'
                    placeholder='Re-type password'
                    style={style.inputField}
                  />
                </FormGroup>
                <Button
                  type='submit'
                  className='btn-primary'
                  style={style.loginButton}>
                CREATE ACCOUNT</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Signup;