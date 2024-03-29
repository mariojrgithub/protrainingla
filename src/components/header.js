import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              ProTraining LA
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#nutrition">
                    Nutrition
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#stretch">
                    Stretch
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#assessment">
                    Assessment
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#training">
                    Training
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#purchase">
                    Purchase
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
