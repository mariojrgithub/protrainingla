import React, { Component } from "react";

import palmtrees from "../images/jacob-repko-64434-unsplash.jpg";
import weightLifter from "../images/pexels-photo-305239.jpeg";
import santaMonica from "../images/rob-bye-78646-unsplash.jpg";

export default class PictureCarousel extends Component {
  render() {
    return (
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-content">
            <h2>Mario Sanchez, Jr. Personal Training</h2>
            <hr />
            <h3>Safe.Effective.Personalized</h3>
            <button className="btn btn-danger">Click to Begin</button>
          </div>
          <div className="carousel-item active">
            <img src={palmtrees} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={weightLifter} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={santaMonica} className="d-block w-100" alt="..." />
          </div>
        </div>
      </div>
    );
  }
}
