import styles from './Botao.module.scss'

const Botao = ({children, cor}) => {

  return (
    <button className={cor === "azul" ? styles.azul : styles.laranja} href="">{children}</button>
  )
}



export default Botao