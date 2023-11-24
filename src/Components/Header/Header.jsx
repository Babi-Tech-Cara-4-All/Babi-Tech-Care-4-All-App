import styles from "./Header.module.scss";
import babiMed from "../../assets/BabiMed.png";
import { useNavigate } from "react-router-dom";
import Botao from "../Botao/Botao";
import { useEffect, useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  function navigateTo(route) {
    window.scrollTo(0, 0);
    navigate(`${route}`);
  }

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const isScrollingUp = prevScrollPos > currentScrollPos;

    setPrevScrollPos(currentScrollPos);

    if (isScrollingUp || currentScrollPos === 0) {
      setVisible(true);
      setDropdownOpen(false)
    } else {
      setVisible(false);
      setDropdownOpen(false)
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <header className={`${styles.headerContainer} ${visible ? styles.visible : styles.hidden}`}>
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
                      navigateTo("/Prevencao-Doenca-Transmissiveis");
                      handleDropdownToggle();
                    }}
                  >
                    Combate a doenças transmissíveis
                  </li>
                  <li
                    onClick={() => {
                      navigateTo("/Tratamento-Doencas-Nao-Transmissiveis");
                      handleDropdownToggle();
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
