import React, { Component } from "react";

export default class Purchase extends Component {
  render() {
    return (
      <div className="container marketing">
        <div className="row">
          <div id="purchase" className="col-lg-4 text-center">
            <h3>Online Check Out</h3>

            <div
              style={{
                width: "500px",
                margin: "0 auto",
                background: "#FFFFFF",
                border: "1px solid rgba(0, 0, 0, 0.1)",
                boxShadow: "-2px 10px 5px rgba(0, 0, 0, 0)",
                borderRadius: "50px",
                fontFamily:
                  "SQ Market, SQ Market, Helvetica, Arial, sans-serif",
              }}
            >
              <div style={{ padding: "20px" }}>
                <p
                  style={{
                    fontSize: "18px",
                    lineHeight: "20px",
                  }}
                >
                  Personal Training
                </p>
                <p
                  style={{
                    fontSize: "18px",
                    lineHeight: "20px",
                    fontWeight: "600",
                  }}
                >
                  $80.00
                </p>
                <a
                  id="embedded-checkout-modal-checkout-button"
                  target="_blank"
                  rel="noreferrer"
                  data-url="https://square.link/u/CmAcG7Wj?src=embd"
                  href="https://square.link/u/CmAcG7Wj?src=embed"
                  style={{
                    display: "inline-block",
                    fontSize: "18px",
                    lineHeight: "48px",
                    height: " 48px",
                    color: "#ffffff",
                    minWidth: "212px",
                    backgroundColor: "#006aff",
                    textAlign: "center",
                    boxShadow: "0 0 0 1px rgba(0,0,0,.1) inset",
                    borderRadius: " 25px",
                  }}
                >
                  Buy now
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}
