import React from 'react'
import styles from "./NumbersHome.module.scss"

const NumbersHome = () => {
  return (
    <section className={styles.numbersSection}>
    <div className={styles.gridAreaNumbers}>
      <div className={styles.bodyPageNumbers}>
        <h2>
          Veja números sobre como a tecnologia é super aliada na
          modernização dos espaços de saúde
        </h2>
        <div className={styles.numbers}>
          <div>
            <h3>U$ 11,3 bilhões</h3>
            <p>investidos em IA aplicada na saúde</p>
          </div>
          <div>
            <h3>63%</h3>
            <p>das clínicas usam a telemedicina</p>
          </div>
          <div>
            <h3>73,3 milhões</h3>
            <p>pacientes atendidos pelo TeleSUS em 2020</p>
          </div>
          <div>
            <h3>U$ 51,9 bilhões</h3>
            <p>investidos em Cloud Computing para a saúde</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default NumbersHome