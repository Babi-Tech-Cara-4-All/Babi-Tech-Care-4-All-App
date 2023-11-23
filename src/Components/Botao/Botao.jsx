import styles from "./Botao.module.scss";
import { useNavigate } from "react-router-dom";

const Botao = ({ children, cor, rota }) => {
  const navigate = useNavigate();

  function navigateTo(route) {
    window.scrollTo(0, 0);
    navigate(`${route}`);
  }

  return (
    <button
      onClick={() => navigateTo(rota)}
      className={cor === "azul" ? styles.azul : styles.laranja}
      href=""
    >
      {children}
    </button>
  );
};

export default Botao;
