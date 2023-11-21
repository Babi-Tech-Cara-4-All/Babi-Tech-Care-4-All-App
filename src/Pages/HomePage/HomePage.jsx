import Botao from "../../Components/Botao/Botao";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <div className={styles.homePageContainer}>
      <div className={styles.bannerHomePage}>
        <div className={styles.infoContainer}>
          <h2>
            Inovação e tecnologia moldando <br /> o futuro da saúde: <br />
            prevenção, automação e precisão.
          </h2>
          <p>
            A saúde é vital para a qualidade de vida. <br /> Essa revolução é
            essencial na sociedade atual, tornando o futuro da saúde uma
            prioridade urgente.
          </p>
          <div className={styles.buttonsContainer}>
            <Botao cor="laranja">Saiba Mais</Botao>
            <Botao cor="laranja">Fale conosco</Botao>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
