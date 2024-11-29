import React from "react";
import ModalHeader from "./ModalHeader";

import ModalNotification from "./ModalNotification";
import GstBenifitCard from "./GstBenifitCard";
import "../../styles/componets/Modal/Modal.scss";
// import ModalDeposit from './ModalDeposit'

function Modal({ data }) {
  return (
    <div className="modal">
      <ModalHeader />
      <div className="modalContent">
        <ModalNotification />
        <GstBenifitCard gstEarned={data.gstEarned} />
      </div>

      {/* <ModalDeposit /> */}
    </div>
  );
}

export default Modal;
