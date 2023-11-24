import React from "react";
import styles from "./Botao.module.scss";
import { useNavigate } from "react-router-dom";

const Botao = ({ children, cor, rota }) => {
  const navigate = useNavigate();

  function navigateTo(route, targetId) {
    if (cor === "azul") {

      window.open("https://youtu.be/-MCtv16U--Q", "_blank");
    } else {

      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const offset = targetElement.getBoundingClientRect().top + window.pageYOffset;

        window.scrollTo({
          top: offset,
          behavior: "smooth",
        });
      } else {
        window.scrollTo(0, 0);
      }

      navigate(`${route}`);
    }
  }

  return (
    <button
      onClick={() => navigateTo("/", "forms")}
      className={cor === "azul" ? styles.azul : styles.laranja}
    >
      {children}
    </button>
  );
};

export default Botao;