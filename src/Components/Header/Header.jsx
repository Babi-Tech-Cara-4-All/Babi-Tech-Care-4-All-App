import styles from "./Header.module.scss";
import babiMed from "../../assets/BabiMed.png";
import { useNavigate } from "react-router-dom";
import Botao from "../Botao/Botao";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  function navigateTo(route) {
    window.scrollTo(0, 0);
    navigate(`${route}`);
  }

  return (
    <header className={styles.headerContainer}>
      <div className={styles.logoContainer} onClick={() => navigateTo("/")}>
        <img className={styles.logo} src={babiMed} alt="Logo" />
        <h1 className={styles.title}>BABIMED</h1>
      </div>
      <nav className={styles.optionsContainer}>
        <ul>
          <li onClick={() => navigateTo("/")}>Home</li>
          <li>
            <div className={styles.dropdown}>
              <button onClick={handleDropdownToggle}>
                Metas
                <i className={`arrow ${dropdownOpen ? "up" : "down"}`}></i>
              </button>
              {dropdownOpen && (
                <ul className={styles.dropdownMenu}>
                  <li
                    onClick={() => {
                      navigateTo("/Mortalidade-Infatil");
                      handleDropdownToggle();
                    }}
                  >
                    Redução da Mortalidade infantil
                  </li>
                  <li
                    onClick={() => {
                      navigateTo("/Tratamento-Doencas-Nao-Transmissiveis");
                      handleDropdownToggle()
                    }}
                  >
                    Combate a doenças transmissíveis
                  </li>
                  <li
                    onClick={() => {
                      navigateTo("/Prevencao-Doenca-Transmissiveis");
                      handleDropdownToggle()
                    }}
                  >
                    Prevenção e tratamento de doenças não transmissíveis
                  </li>
                </ul>
              )}
            </div>
          </li>
          <li onClick={() => navigateTo("/Melhoria-Geral-Da-Saude")}>
            Melhoria
          </li>
        </ul>
        <Botao>Fale conosco</Botao>
      </nav>
    </header>
  );
};

export default Header;
