import styles from './Botao.module.scss'
import PropTypes from 'prop-types';


const Botao = ({children, cor}) => {

  return (
    <button className={cor === "azul" ? styles.azul : styles.laranja} href="">{children}</button>
  )
}

Botao.propTypes = {
  cor: function(props, propName, componentName) {
    if (props[propName] !== "azul" && props[propName] !== "laranja") {
      return new Error(
        'A prop `' + propName + '` do componente `' + componentName + '` deve ser "azul" ou "laranja".'
      );
    }
  }
}


export default Botao