import React, { Component } from 'react';

import MenuBar from './MenuBar';
import AppFooter from '../AppFooter';

class Home extends Component {
  render() {
    const style = {
      container: {
        backgroundColor:'#f9f9f9', 
        height: '100vh',
        overflow: 'auto'
      }
    };

    return (
      <div style={style.container}>
        <MenuBar/>
        <AppFooter/>
      </div>
    );
  }
}

export default Home;