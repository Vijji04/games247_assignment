import React from "react";
import "../../styles/componets/Modal/ModalHeader.scss";
import closeIcon from "../../assets/closeIcon.svg";
import closeMobile from "../../assets/closeMobile.svg";

function ModalHeader() {
  return (
    <div className="headerContainer">
      <div className="headerWrapper">
        <div className="headerText">
          <p>GST? No Worries!</p>
        </div>

        {/* Desktop Close Button */}
        <div className="closeBtn">
          <button className="btn">
            <img src={closeIcon} alt="Close" />
          </button>
        </div>

        {/* Mobile Close Icon */}
        <div className="mobileClose">
          <img src={closeMobile} alt="Close" />
        </div>
      </div>
    </div>
  );
}

export default ModalHeader;
