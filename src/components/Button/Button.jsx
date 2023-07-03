/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./styles.css";

export const Button = ({ icon, dark, platform, className, buttonTextClassName, text = "Button Text" }) => {
  return (
    <div className={`button platform-3-${platform} dark-${dark} icon-${icon} ${className}`}>
      {!icon && <div className={`button-text ${buttonTextClassName}`}>{text}</div>}

      {icon && (
        <>
          <img
            className="pencil-alt"
            alt="Pencil alt"
            src={
              platform === "mobile"
                ? "https://generation-sessions.s3.amazonaws.com/a2e638957cb222e9fa9527cd5aaff3f0/img/pencilalt-2.svg"
                : "https://generation-sessions.s3.amazonaws.com/a2e638957cb222e9fa9527cd5aaff3f0/img/pencilalt-3.svg"
            }
          />
          <div className="text-wrapper">{text}</div>
        </>
      )}
    </div>
  );
};

Button.propTypes = {
  icon: PropTypes.bool,
  dark: PropTypes.bool,
  platform: PropTypes.oneOf(["desktop", "mobile"]),
  text: PropTypes.string,
};
