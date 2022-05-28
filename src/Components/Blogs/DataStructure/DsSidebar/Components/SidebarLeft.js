import React from "react";
import "../DsSidebar.css";
import { SidebarData } from "./SidebarData";

function SidebarLeft() {
  return (
    <div className="SidebarLeft">
      <ul className="SidebarLeftList">
        {SidebarData.map((val, key) => {
          return (
            <li
              key={key}
              className="row"
              id={window.location.pathname == val.link ? "active" : ""}
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              <div id="icon">{val.icon}</div> <div id="title">{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SidebarLeft;
