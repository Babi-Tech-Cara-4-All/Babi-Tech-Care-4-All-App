import styles from './Botao.module.scss'
import PropTypes from 'prop-types';


const Botao = ({children, cor}) => {

  return (
    <button className={cor === "azul" ? styles.azul : styles.laranja} href="">{children}</button>
  )
}



export default Botao