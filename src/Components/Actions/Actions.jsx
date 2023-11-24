import React from "react";
import styles from "./Actions.module.scss"

const Actions = ({ imagem, children, link }) => {
  return (
    <div className={styles.containerActions}>
      <img src={imagem} alt="" />
      <div className={styles.actionsInfo}>
        {children}
        <div className={styles.actionsBotao}>
          <a href={link}>Saiba Mais</a>
        </div>
      </div>
    </div>
  );
};

export default Actions;
