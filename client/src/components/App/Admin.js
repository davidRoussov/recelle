import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import MenuBar from './MenuBar';
import SideBar from './SideBar';
import Analysis from './Analysis';

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
        <Switch>
          <Route exact path='/admin/analysis' component={Analysis}/>
        </Switch>
      </div>
    );
  }
}

export default Admin;