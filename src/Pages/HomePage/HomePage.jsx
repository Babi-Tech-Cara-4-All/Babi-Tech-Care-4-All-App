import Botao from "../../Components/Botao/Botao";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <div className={styles.homePageContainer}>
      <div className={styles.bannerHomePage}>
        <div>
        <h2>
          Inovação e tecnologia moldando <br /> o futuro da saúde: <br />
          prevenção, automação e precisão.
        </h2>
        <p>
          A saúde é vital para a qualidade de vida. <br /> Essa revolução é essencial
          na sociedade atual, tornando o futuro da saúde uma prioridade urgente.
        </p>
        <Botao cor="laranja">
          <p>Saiba Mais</p>
        </Botao>
        <Botao cor="laranja">
          <p>Fale conosco</p>
        </Botao>
        </div>

      </div>
    </div>
  );
};

export default HomePage;
