import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './SideBar.css';

class SideBar extends Component {
  render() {
    return (






      <div className="row">
          <div className="side-menu">
          
            <nav className="navbar navbar-default">
              <div className="navbar-header">
                  <div className="brand-wrapper">
                      <button type="button" className="navbar-toggle">
                          <span className="sr-only">Toggle navigation</span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                      </button> 

                      <div id="search" className="panel-collapse collapse">
                          <div className="panel-body">
                              <form className="navbar-form" role="search">
                                  <div className="form-group">
                                      <input type="text" className="form-control" placeholder="Search"/>
                                  </div>
                                  <button type="submit" className="btn btn-default "><span className="glyphicon glyphicon-ok"></span></button>
                              </form>
                          </div>
                      </div>
                  </div>

              </div>

              <div className="side-menu-container">
                  <ul className="nav navbar-nav">

                      <li><Link to='/admin/analysis'><span className="glyphicon glyphicon-send"></span>Analysis</Link></li>
                      {/* <li className="active"><a href="#"><span className="glyphicon glyphicon-plane"></span> Active Link</a></li> */}
                      <li><a href=""><span className="glyphicon glyphicon-cloud"></span>Record</a></li>
                      <li><a href=""><span className="glyphicon glyphicon-signal"></span>Research</a></li>

                  </ul>
              </div>
            </nav>
          
          </div>
      </div>














    );
  }
}

export default SideBar;