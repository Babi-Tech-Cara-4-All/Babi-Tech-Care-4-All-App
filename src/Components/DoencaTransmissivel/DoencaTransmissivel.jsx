import React from 'react'
import styles from "./DoencaTransmissivel.module.scss"

const DoencaTransmissivel = ({nome,casos, mortes, cor}) => {
  return (
    <div className={styles.cardDoenca}>
      <h1 className={cor === "azul" ? styles.titleAzul: styles.titleLaranja}>{nome}</h1>
      <p className={styles.number}>{casos}</p>
      <p className={styles.text}>De casos</p>
      <p className={styles.number}>{mortes}</p>
      <p className={styles.text}>Mortes</p>
    </div>
  )
}

export default DoencaTransmissivel