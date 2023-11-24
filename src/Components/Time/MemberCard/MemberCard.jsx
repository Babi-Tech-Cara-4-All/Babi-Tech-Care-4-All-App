import React from 'react'
import styles from "./MemberCard.module.scss"

const MemberCard = ({img, nome, link}) => {
  return (
    <div className={styles.memberCard}>
      <div className={styles.memberImg}>
        <img src={img} alt="" className={styles.imgHover} />
      </div>
      <div className={styles.memberName}>
        <a  href={link} target="_blank" rel="noreferrer">{nome}</a>
      </div>
    </div>
  )
}

export default MemberCard