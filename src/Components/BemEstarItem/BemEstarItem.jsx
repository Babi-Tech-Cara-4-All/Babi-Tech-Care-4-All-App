import React from "react";
import styles from "./BemEstarItem.module.scss"

const BemEstarItem = ({nome, children, cor}) => {
  return (
    <div className={styles.cardBemEstar}>
      <h1 className={cor == "azul" ? styles.titleAzul : styles.titleLaranja}>
        {nome}
      </h1>
      <p>{children}</p>
    </div>
  );
};

export default BemEstarItem;
