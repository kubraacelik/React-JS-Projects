import React from "react";
import "./modal.css";

const Modal = ({ score }) => {
  return (
    <div className="modal-container ">
      <div className="modal-title">SKORUNUZ : {score}</div>
      <div onClick={() => (window.location = "/")} className="modal-btn">
        <span className="modal-btn-text">YENİDEN BAŞLAT</span>
      </div>
    </div>
  );
};

export default Modal;
