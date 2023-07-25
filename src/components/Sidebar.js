import React, { useState } from "react";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import Logo from "../imgs/icon-coffee.png";
import { SidebarData } from "../Data/Data";
import "./Sidebar.css";

const Sidebar = () => {
  const [selected, setSelected] = useState(1);
  const [expanded, setExpanded] = useState(true);

  const sidebarVariants = {
    true: {
      left: "1.5%",
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
        style={expanded ? { left: "60%", transition: '.5s' } : { left: "5%" , transition: '.5s'}}
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
                <span>
                  <item.icon />
                </span>
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
