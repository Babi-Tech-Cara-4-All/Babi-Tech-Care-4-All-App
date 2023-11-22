import React from 'react'
import styles from "./HomeCaracteristicas.module.scss"

const HomeCaracteristicas = ({children, img}) => {
  return (
    <div className={styles.card}>
      <img src={img} alt="Imgem de caracteristica" />
      <h2>{children}</h2>
    </div>
  )
}

export default HomeCaracteristicas