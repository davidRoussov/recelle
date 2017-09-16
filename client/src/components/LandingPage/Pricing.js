import React, { Component } from 'react';

import LandingMenuBar from './LandingMenuBar';

class Pricing extends Component {
  render() {
    return (
      <div>
        <LandingMenuBar pricingActive={true}/>
        <h2>Pricing page</h2>
      </div>
    );
  }
}

export default Pricing;