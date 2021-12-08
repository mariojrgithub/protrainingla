import React, { Component } from "react";
import headshot from "../images/Headshot.png";

export default class About extends Component {
  render() {
    return (
      <div
        className="container marketing"
        style={{
          padding: "2em",
        }}
      >
        <div className="row">
          <div className="text-center">
            <h2>About Me</h2>

            <img
              src={headshot}
              alt="..."
              height="300px"
              width="300px"
              style={{
                padding: "2em",
                borderRadius: "50%",
              }}
            />
            <h3>Mario Sanchez, Jr.</h3>
            <h4>Owner/Operator</h4>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="text-center">
            <h2>My Mission</h2>
            <h5>
              Deliver the most effective in-home health and fitness experience;
              professional, fun, engaging, and most importantly, safe.
            </h5>
            <h5>
              Design personalized plans enabling the achievement of your goals.
            </h5>
            <h5>
              I strive to make health and fitness easy to incorporate into your
              busy and demanding lifestyle and welcome those with even the most
              complex health conditions.
            </h5>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}
