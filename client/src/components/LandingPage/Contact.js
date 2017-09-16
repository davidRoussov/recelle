import React, { Component } from 'react';

import LandingMenuBar from './LandingMenuBar';

class Contact extends Component {
  render() {
    return (
      <div>
        <LandingMenuBar contactActive={true}/>
        <h2>Contact page</h2>
      </div>
    );
  }
}

export default Contact;