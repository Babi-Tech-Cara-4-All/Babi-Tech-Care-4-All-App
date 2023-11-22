import React from "react";
import Botao from "../Botao/Botao";
import styles from "./Metas.module.scss"

const Metas = ({ imagem, titulo, meta, texto, rota, direction }) => {
  return (
    <div className={direction === "column" ? styles.flexColumn : styles.row }>
      <img src={imagem} alt="" />
      <div>
        <h1>{titulo}</h1>
        <h3>{meta}</h3>
        <p>{texto}</p>
      </div>

      <Botao cor="laranja" rota={rota}>Saiba mais</Botao>
    </div>
  );
};

export default Metas;
