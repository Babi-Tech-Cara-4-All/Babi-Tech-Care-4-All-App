import styles from "./Footer.module.scss";
import { useNavigate } from "react-router-dom";
import x from "../../assets/imgFooter/X.png";
import email from "../../assets/imgFooter/email.png";
import fiap from "../../assets/imgFooter/fiap.png";
import hapvida from "../../assets/imgFooter/hapvida.png";
import logo from "../../assets/imgFooter/logo.png";
import notredame from "../../assets/imgFooter/notredame.png";
import insta from "../../assets/imgFooter/insta.png";
import { useEffect, useState } from "react";


const Footer = () => {
    const navigate = useNavigate();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);
  
    function navigateTo(route, targetId) {
        const targetElement = document.getElementById(targetId);
        const headerHeight = document.querySelector('header').offsetHeight;
      
        if (targetElement) {
          const offset = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      
          window.scrollTo({
            top: offset,
            behavior: "smooth",
          });
        } else {
          window.scrollTo(0, 0);
        }
      
        navigate(`${route}`);
      }

    return (
      <footer className={`${styles.footerContainer} ${visible ? styles.visible : styles.hidden}`}>
        <div className={styles.thingsContainer}>
            <img className={styles.logo} src={logo} alt="BabiMed" />
            <div className={styles.title}>
                <h2>Início</h2>
                <ul className={styles.lista}>
                    <li onClick={() => navigateTo("/", "home")}>Home</li>
                    <li onClick={() => navigateTo("/", "videoPitch")}>Vídeo Pitch</li>
                    <li onClick={() => navigateTo("/", "time")}>Sobre nós</li>
                    <li onClick={() => navigateTo("/", "dados")}>Dados tecnologia</li>
                </ul>
            </div>
            <div className={styles.title}>
                <h2>Temas</h2>
                <ul className={styles.lista}>
                    <li onClick={() => navigateTo("/Mortalidade-Infatil")}>Mortalidade Infantil</li>
                    <li onClick={() => navigateTo("/Prevencao-Doenca-Transmissiveis")}>Prevenção de doenças transmissíveis</li>
                    <li onClick={() => navigateTo("/Tratamento-Doencas-Nao-Transmissiveis")}>Tratamento e prevenção de doenças não transmissíveis</li>
                    <li onClick={() => navigateTo("/Melhoria-Geral-Da-Saude")}>Melhoria Geral da Saúde</li>
                </ul>
            </div>
            <div className={styles.redesContainer}>
                <div className={styles.redes}>
                    <img className={styles.rede} src={x} alt="Twitter"></img>
                    <img className={styles.rede} src={insta} alt="Instagram"></img>
                    <img className={styles.rede} src={email} alt="Email"></img>
                </div>
                <button onClick={() => navigateTo("/", "forms")} className={styles.faleConosco}>Fale conosco</button>
            </div>
        </div>
        <div className={styles.deepFooter}>
            <p>Global Solution - Tech Care 4 All</p>
            <div className={styles.parcerias}>
                <img className={styles.logoParcerias} src={hapvida} alt="Hapvida"></img>
                <img className={styles.logoParcerias} src={notredame} alt="NotreDame"></img>
                <img className={styles.logoParcerias} src={fiap} alt="Fiap"></img>
            </div>
        </div>
        
      </footer>
    )
  }
  

export default Footer;