import React, { useRef, useState } from "react";
import Modal from "react-modal";
import styles from "./Forms.module.scss";
import babi from "../../assets/imgHomePage/babiForms.png";
import { Box, Typography } from "@mui/material";

const Forms = () => {
  const nome = useRef(null);
  const telefone = useRef(null);
  const email = useRef(null);
  const assunto = useRef(null);
  const mensagem = useRef(null);

  function isBlank(str) {
    return str.trim() === "";
  }

  function clearFields() {
    nome.current.value = "";
    telefone.current.value = "";
    email.current.value = "";
    assunto.current.value = "";
    mensagem.current.value = "";
  }

  function sendMensage(e) {
    if (
      !isBlank(nome.current.value) &&
      !isBlank(telefone.current.value) &&
      !isBlank(email.current.value) &&
      !isBlank(assunto.current.value) &&
      !isBlank(mensagem.current.value)
    ) {
      e.preventDefault();
      alert(
        `${nome.current.value}, muito obrigado pela sua mensagem! Já já iremos te responder`
      );
      clearFields();
    } else {
      // Exibe uma mensagem de erro se algum campo estiver vazio ou contiver apenas espaços
      alert("Por favor, preencha todos os campos antes de enviar a mensagem.");
    }
  }

  return (
    <section className={styles.formsSection}>
      <div id="forms" className={styles.gridAreaForms}>
        <form className={styles.bodyPageForms}>
          <div className={styles.formsHeader}>
            <img src={babi} alt="Babi" />
            <h1>Babimail: entre em contato com a Babi !</h1>
          </div>
          <div className={styles.formsRowInputs}>
            <div className={styles.inputLabel}>
              <label htmlFor="nome">Nome: </label>
              <input type="text" name="nome" id="nome" ref={nome} required />
            </div>
            <div className={styles.inputLabel}>
              <label htmlFor="telefone">Telefone: </label>
              <input
                type="text"
                name="telefone"
                id="telefone"
                ref={telefone}
                required
              />
            </div>
          </div>
          <div className={styles.inputLabel}>
            <label htmlFor="email">Email: </label>
            <input type="text" name="email" id="email" ref={email} required />
          </div>
          <div className={styles.inputLabel}>
            <label htmlFor="assunto">Assunto: </label>
            <input
              type="text"
              name="assunto"
              id="assunto"
              ref={assunto}
              required
            />
          </div>
          <div className={styles.inputLabelMensagem}>
            <label htmlFor="mensagem">Mensagem: </label>
            <textarea
              type="text"
              name="mensagem"
              id="mensagem"
              ref={mensagem}
              required
            />
          </div>
          <button onClick={(e) => sendMensage(e)}>Enviar para a Babi</button>
        </form>
      </div>
    </section>
  );
};

export default Forms;
