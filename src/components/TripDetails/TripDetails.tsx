import { useState } from "react";
import "./TripDetails.css";
import Menu from "../../icons/Menu.svg";
import MenuPopup from "../MenuPopup/MenuPopup";

const TripDetails = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="trip-details-block">
      <div className="trip-details-block-left">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw5V9XAWGTDmHp5liXlmsAmV_0tcyzdKO6B44dlpTq3HsjafGv2A-xiyHZz5xsxSNFZvY&usqp=CAU"
          alt="trip"
        />
        <div className="trip-details-text">
          <p className="bold">
            <span className="regular">From </span>IGI Airport, T3
          </p>
          <p className="bold">
            <span className="regular">To </span>Sector 28
          </p>
        </div>
      </div>
      <img src={Menu} alt="Menu" onClick={() => setShowMenu(!showMenu)} />
      {showMenu && (
        <div className="menu-popup">
          <MenuPopup />
        </div>
      )}
    </div>
  );
};

export default TripDetails;
