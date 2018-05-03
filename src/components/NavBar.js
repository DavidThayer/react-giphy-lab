import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand home-link" to="/">Giphy Search</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-nav" aria-controls="#main-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="main-nav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Search</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar;
