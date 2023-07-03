/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./styles.css";

export const Testimonial = ({
  platform,
  className,
  testimonialContentClassName,
  amazingWorkWellClassName,
  text = "Amazing Work! Well done!",
  janeCooperClassName,
  developerSonyClassName,
  text1 = "Developer, Sony",
  text2 = "Jane Cooper",
  ellipse = "https://generation-sessions.s3.amazonaws.com/03ee85b534d755c380d5ee8b2409ba7b/img/ellipse-1-3@2x.png",
}) => {
  return (
    <div className={`testimonial ${className}`}>
      <div className={`testimonial-content ${testimonialContentClassName}`}>
        <div className={`amazing-work-well ${amazingWorkWellClassName}`}>{text}</div>
      </div>
      <div className="name-image">
        <div className="testimonial-name">
          <div className={`jane-cooper platform-${platform} ${janeCooperClassName}`}>{text2}</div>
          <div className={`developer-sony platform-0-${platform} ${developerSonyClassName}`}>{text1}</div>
        </div>
        <div className={`testimonial-image platform-1-${platform}`}>
          <img
            className="ellipse"
            alt="Ellipse"
            src={
              platform === "mobile"
                ? "https://generation-sessions.s3.amazonaws.com/03ee85b534d755c380d5ee8b2409ba7b/img/ellipse-1-2@2x.png"
                : ellipse
            }
          />
        </div>
      </div>
    </div>
  );
};

Testimonial.propTypes = {
  platform: PropTypes.oneOf(["desktop", "mobile"]),
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  ellipse: PropTypes.string,
};
