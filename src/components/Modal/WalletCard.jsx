import React from "react";
import PropTypes from "prop-types";
import "../../styles/componets/Modal/WalletCard.scss";

function WalletCard({ type, value, description }) {
  return (
    <div className="walletContainer">
      <div className="walletItems">
        <p className={type === "red" ? "redText" : "walletMoney"}>₹{value}</p>
        <p className="walletMessage">{description}</p>
      </div>
    </div>
  );
}

WalletCard.propTypes = {
  type: PropTypes.oneOf(["red", "green"]).isRequired,
  value: PropTypes.number,
  description: PropTypes.string,
};

export default WalletCard;
