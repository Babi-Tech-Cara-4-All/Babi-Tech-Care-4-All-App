import React from "react";
import ReactCardFlip from "react-card-flip";
import styles from "./HomeCaracteristicas.module.scss";
import { useState } from "react";

const HomeCaracteristicas = ({ children, img, text }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  function flipCard(e) {
    e.preventDefault();
    setIsFlipped((prevState) => !prevState);
  }
  return (
    <div className={styles.card}>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div className={styles.front}>
          <img src={img} alt="Imgem de caracteristica" />
          <h2>{children}</h2>
          <button onClick={(e) => flipCard(e)}>Saiba mais</button>
        </div>
        <div className={styles.back}>
          <h2>{children}</h2>
          <p>{text}</p>

          <button onClick={(e) => flipCard(e)}>Saiba mais</button>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default HomeCaracteristicas;
