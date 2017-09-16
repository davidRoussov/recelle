import React, { Component } from 'react';

import MenuBar from './MenuBar';
import SideBar from './SideBar';

class Admin extends Component {
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
        <SideBar/>
      </div>
    );
  }
}

export default Admin;