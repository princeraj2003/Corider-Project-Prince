import React from "react";
import Members from "../../icons/Members.svg";
import Call from "../../icons/Call.svg";
import Report from "../../icons/Report.svg";
import "./MenuPopup.css";

const Menu = () => {
  const menuItems = [
    {
      id: 1,
      title: "Members",
      icon: Members,
    },
    {
      id: 2,
      title: "Share Number",
      icon: Call,
    },
    {
      id: 3,
      title: "Report",
      icon: Report,
    },
  ];

  return (
    <div className="menu-block">
      {menuItems.map((item) => (
        <div className="menu-item" key={item.id}>
          <img src={item.icon} alt={item.title} />
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Menu;
