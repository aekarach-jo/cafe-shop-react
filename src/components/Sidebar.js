import React, { useState } from "react";
import { UilBars, UilSignOutAlt } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import Logo from "../imgs/icon-coffee.png";
import { SidebarData } from "../Data/Data";
import { UilCoffee } from "@iconscout/react-unicons";
import "./Sidebar.css";

const Sidebar = () => {
  const [selected, setSelected] = useState();
  const [expanded, setExpanded] = useState(true);

  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };
  // console.log(window.innerWidth);
  return (
    <>
      <div
        className="bars"
        style={expanded ? { left: "60%" } : { left: "5%" }}
        onClick={() => setExpanded(!expanded)}
      >
        <UilBars />
      </div>
      <motion.div
        className="sidebar"
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ""}
      >
        <div className="logo">
          <img src={Logo} alt="logo" />
          <span>
          <span>K</span>affe <span>P</span>rimo
          </span>
        </div>

        <div className="menu">
          {SidebarData.map((item, index) => {
            return (
              <div
                className={selected === index ? "menuItem active" : "menuItem"}
                key={index}
                onClick={() => setSelected(index)}
              >
                <item.icon />
                <span>{item.heading}</span>
              </div>
            );
          })}
          <div className="menuItem">{/* <UilSignOutAlt /> */}</div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
