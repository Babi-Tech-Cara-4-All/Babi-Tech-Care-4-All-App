import styles from "./Header.module.scss";
import babiMed from "../../assets/BabiMed.png";
import { useNavigate } from "react-router-dom";
import Botao from "../Botao/Botao";

const Header = () => {

  const navigate = useNavigate()

  function navigateTo(route) {
    navigate(`${route}`)
  }

  return (
    <header className={styles.headerContainer}>
      <div className={styles.logoContainer} onClick={() => navigateTo("/")}>
        <img className={styles.logo} src={babiMed} alt="Logo" />
        <h1 className={styles.title}>BABIMED</h1>
      </div>
      <nav className={styles.optionsContainer}>
        <ul>
          <li onClick={() => navigateTo("/")} >Home</li>
          <li>Metas</li>
          <li onClick={() => navigateTo("/Melhoria-Geral-Da-Saude")}>Melhoria</li>
        </ul>
        <Botao>
          Fale conosco
        </Botao>
      </nav>
    </header>
  );
};

export default Header;
