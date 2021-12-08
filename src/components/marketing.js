import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCertificate,
  faHistory,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

import nutrition from "../images/ella-olsson-mmnKI8kMxpc-unsplash.jpg";
import stretch from "../images/people-g57716a5ad_1920.jpg";
import assessment from "../images/belly-g6ebb1763b_1920.jpg";
import weights from "../images/samuel-girven-VJ2s0c20qCo-unsplash.jpg";

export default class Marketing extends Component {
  render() {
    return (
      <div className="container marketing">
        <div className="row">
          <div className="col-lg-4 text-center">
            <FontAwesomeIcon icon={faCertificate} size="5x" />

            <h2>Expertise</h2>
            <ul>
              <li>Athletic Performance</li>
              <li>Injury Prevention</li>
              <li>Pre/Post Surgery</li>
              <li>Balance/Fall Prevention</li>
              <li>Sport Specific Programming</li>
            </ul>
          </div>
          <div className="col-lg-4 text-center">
            <FontAwesomeIcon icon={faHistory} size="5x" />

            <h2>Experience</h2>
            <p>
              Over 12 years working with all age groups and fitness levels
              Previous Physical Therapy Experience
            </p>
          </div>
          <div className="col-lg-4 text-center">
            <FontAwesomeIcon icon={faGraduationCap} size="5x" />

            <h2>Education</h2>
            <p>
              Bachelor of Science in Kinesiology from the University of Southern
              California
              <br /> CPR/AED Certified by the American Red Cross
            </p>
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">
              Nutrition & Diet Planning.{" "}
              <span className="text-muted">Learn to Eat Healthy Today.</span>
            </h2>
            <p className="lead">
              Dependent on performance and/or body composition goals in addition
              to other variables such as your age and regular activity levels.
              <br />
              The ratio of nutrients; most important being carbohydrates, fat
              and protein; are adjusted with each 3-month microcycle.
            </p>
          </div>
          <div className="col-md-5">
            <img
              className="marketing-image bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              src={nutrition}
              alt="..."
            />
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">
              Full Body Stretch.{" "}
              <span className="text-muted">Increase Your Flexibility.</span>
            </h2>
            <p className="lead">
              Full body with an emphasis on any specific areas of tightness or
              imbalance.
              <br /> Simple and easy to integrate into your busy schedule.
            </p>
          </div>
          <div className="col-md-5 order-md-1">
            <img
              className="marketing-image bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              src={stretch}
              alt="..."
            />
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">
              Fitness Assessment.{" "}
              <span className="text-muted">Do You Know Your Measurements?</span>
            </h2>
            <p className="lead">
              Before lifting a single weight, you will undergo an in-depth
              physical assessment to determine your baseline fitness levels.
              <br />
              Going forward, this assessment is repeated at regular intervals to
              track your improvement.
              <br /> How do you measure up?
            </p>
          </div>
          <div className="col-md-5">
            <img
              className="marketing-image bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              src={assessment}
              alt="..."
            />
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">
              Personal Training.{" "}
              <span className="text-muted">In-Home & Online Available.</span>
            </h2>
            <p className="lead">
              <h4>Goals:</h4> • Primary : What are your most important reasons
              for exercising?
              <br /> • Secondary : Do you have specific performance or body
              composition goals such as weight-loss?
              <br /> <h4>Strength Training Program:</h4>
              • Based on functional training principles; a well-balanced upper
              and lower body resistance program is developed and revised with
              each 3-month microcycle.
              <br /> • No equipment needed!{" "}
              <h4>Cardiovascular Endurance Program:</h4> • Designed to
              supplement your one-on-one sessions and goals.
              <br /> • Changes with improvement in your fitness level. Each
              3-month microcycle consists of 4 main variables that will change
              depending on our overall fitness emphasis. This allows us to
              maximize your results in addition to reducing the overall risk of
              injury.
            </p>
          </div>
          <div className="col-md-5">
            <img
              className="marketing-image bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              src={weights}
              alt="..."
            />
          </div>

          <hr className="featurette-divider" />
        </div>
      </div>
    );
  }
}
