import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

const Links = () => {
  return (
    <nav className="nav">
      <div className="link">
        <NavLink className="links" to="/albuns">
          Albuns
        </NavLink>
      </div>

      <div className="link">
        <NavLink className="links" to="/tasks">
          Tarefas
        </NavLink>
      </div>

      <div className="link">
        <NavLink className="links" to="/posts">
          Postagens
        </NavLink>
      </div>
    </nav>
  );
};

export default Links;
