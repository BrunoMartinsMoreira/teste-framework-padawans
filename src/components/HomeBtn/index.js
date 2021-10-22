import React from "react";
import { Link } from "react-router-dom";
import "./btn.css";

const BackHomeBtn = () => {
  return (
    <div className="backBtn">
      <Link className="btn" to="/">
        Voltar
      </Link>
    </div>
  );
};

export default BackHomeBtn;
