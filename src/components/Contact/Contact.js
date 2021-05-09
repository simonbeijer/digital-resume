import React from "react";
import useWindowDimensions from "../../sizeHook";
import "./contact.scss";
import linked from "./LI-In-Bug.png";
import github from "./Octocat.png";
import hooli from "./hooli.png";
import gmail from "./gmail.png";
const Contact = () => {
  const { width, height } = useWindowDimensions();
  return (
    <div id="contact" className="grid-col-5 ">
      <div className="col-5-div display-flex max-width">
        <div>
          <h2>Contact</h2>
        </div>
        <div
          className="footer-div"
          style={
            width > 600
              ? {
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }
              : {
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }
          }
        >
          <a
            className="display-flex footer-divs gmail"
            href="mailto:simon.beijer@gmail.com"
            rel="noreferrer"
            target="_blank"
            style={
              width > 600
                ? {
                    marginRight: "1rem",
                    flexDirection: "column",
                  }
                : {
                    flexDirection: "column",
                    marginRight: "0rem",
                  }
            }
          >
            <p>Please contact me if you are intrested</p>
          </a>

          <a
            href="https://www.linkedin.com/in/simon-beijer-a27b37181?trk=people-guest_profile-result-card_result-card_full-click&originalSubdomain=se"
            rel="noreferrer"
            target="_blank"
            className="display-flex footer-divs linkedin"
            style={
              width > 600
                ? {
                    flexDirection: "column",
                  }
                : {
                    marginRight: "0rem",
                  }
            }
          >
            <p>Add me on LinkedIn</p>
          </a>

          <a
            href="https://github.com/simonbeijer"
            rel="noreferrer"
            target="_blank"
            className="display-flex footer-divs github"
            style={
              width > 600
                ? {
                    marginLeft: "1rem",
                    flexDirection: "column",
                  }
                : {
                    flexDirection: "column",
                    marginLeft: "0rem",
                  }
            }
          >
            <p>Feel free to visit my Github</p>
          </a>
        </div>
        <p
          style={{ margin: "5rem 0 2rem 0", flexDirection: "column" }}
          className="display-flex"
        >
          &copy; Simon Beijer 2021
          <img
            alt="hooli"
            style={{
              height: "2rem",
            }}
            src={hooli}
          ></img>
        </p>
      </div>
    </div>
  );
};

export default Contact;