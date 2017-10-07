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
        height: '100vh'
      },
      mainContent: {
        marginLeft: '250px'
      }
    };

    return (
      <div style={style.container}>
        <MenuBar/>
        <SideBar/>
        <div style={style.mainContent}>
          <Switch>
            <Route exact path='/admin/analysis' component={Analysis}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default Admin;