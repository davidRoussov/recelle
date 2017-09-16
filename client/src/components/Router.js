import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import '../index.css';
import LandingPage from './LandingPage/LandingPage';
import Login from './LandingPage/Login';
import Signup from './LandingPage/Signup';
import Admin from './App/Admin';
import Pricing from './LandingPage/Pricing';
import Contact from './LandingPage/Contact';
import Blog from './LandingPage/Blog/Blog';

class Router extends Component {

  render() {
    return (
      <BrowserRouter>
        <div style={{height: '100%'}}>
          <Route exact path='/' component={LandingPage}/>
          <Route exact path='/admin' component={Admin}/>
          <Route path='/login' component={Login}/>
          <Route path='/signup' component={Signup}/>
          <Route path='/intro' component={LandingPage}/>
          <Route path='/pricing' component={Pricing}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/blog' component={Blog}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
