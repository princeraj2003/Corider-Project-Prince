import { useState } from "react";
import "./Input.css";
import Paperclip from "../../icons/Paperclip.svg";
import Send from "../../icons/Send.svg";
import FilePopup from "../FilePopup/FilePopup";

const Input = () => {
  const [showFilePopup, setShowFilePopup] = useState(false);

  return (
    <div className="input-block">
      {showFilePopup && (
        <div className="file-popup">
          <FilePopup />
        </div>
      )}
      <div className="input-box">
        <input type="text" placeholder="Reply to @Rohit Yadav" />
        <div className="input-block-icons">
          <img
            src={Paperclip}
            alt="paperclip"
            onClick={() => setShowFilePopup(!showFilePopup)}
          />
          <img src={Send} alt="send" />
        </div>
      </div>
    </div>
  );
};

export default Input;
