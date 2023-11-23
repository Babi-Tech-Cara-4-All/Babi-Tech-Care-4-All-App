import React, { useState } from "react";
import styles from "./Reason.module.scss";

const Reason = ({ link, icone, texto }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`${styles.reasonItem} ${isHovered ? styles.hovered : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href={link} target="_blank" rel="noreferrer">
        <img src={icone} alt="Ícone 1" />
      </a>
      <p>{texto}</p>
    </div>
  );
};

export default Reason;
