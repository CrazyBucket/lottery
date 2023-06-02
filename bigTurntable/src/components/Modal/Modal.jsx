import { useState } from "react";
import "./Modal.css";

const Modal = ({ text, optionalButton, requiredButton, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleOptionalClick = () => {
    if (optionalButton.onClick) {
      optionalButton.onClick();
    }
    setIsVisible(false);
    onClose();
  };

  const handleRequiredClick = () => {
    requiredButton.onClick();
    setIsVisible(false);
    onClose();
  };


  return isVisible ? (
    <div className="modal-wrapper">
      <div className="modal-backdrop"></div>
      <div className="modal-box">
        <div className="modal-text">{text}</div>
        <div>
          {optionalButton && (
            <button className="modal-btn" onClick={handleOptionalClick}>
              {optionalButton.text}
            </button>
          )}
          <button className="modal-btn" onClick={handleRequiredClick}>
            {requiredButton.text}
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
