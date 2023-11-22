import Botao from "../../Components/Botao/Botao";
import HomeCaracteristicas from "../../Components/HomeCaracteristicas/HomeCaracteristicas";
import styles from "./HomePage.module.scss";
import prevencao from "../../assets/imgHomePage/prevencao.png";
import automacao from "../../assets/imgHomePage/automacao.png";
import precisao from "../../assets/imgHomePage/precisao.png";
import star from "../../assets/imgHomePage/Star.png";
import arrow from "../../assets/imgHomePage/Arrow.png";
import babi1 from "../../assets/imgHomePage/babi1.png";
import babi2 from "../../assets/imgHomePage/babi2.png";

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
      <div className={styles.gridArea}>
        <div className={styles.bodyPage}>
          <div className={styles.caracteristicas}>
            <HomeCaracteristicas img={prevencao}>Prevenção</HomeCaracteristicas>
            <HomeCaracteristicas img={automacao}>Automação</HomeCaracteristicas>
            <HomeCaracteristicas img={precisao}>Precisão</HomeCaracteristicas>
          </div>
          <div className={styles.videoPitchSection}>
            <div className={styles.text}>
              <p className={styles.videoPich}>VÍDEO PITCH</p>
              <h2>BabiMed: Sempre ao seu lado e salvando vidas.</h2>
              <div className={styles.space}>
                <img src={star} alt="star" />
                <img src={arrow} alt="arrow" />
              </div>
              <p className={styles.strong}>
                Imagine um futuro da saúde onde a tecnologia não apenas
                facilita, mas transforma a experiência de cuidados médicos.
              </p>
              <p className={styles.weak}>
                Ao unir tecnologia, automação e empatia, BabiMed está moldando o
                futuro da saúde, tornando-a mais acessível, eficaz e centrada no
                paciente. Junte-se a nós nesta jornada rumo a uma revoluçã o na
                maneira como cuidamos de nós mesmos e daqueles que amamos.
              </p>
              <div>
                <Botao cor="azul">Saiba Mais</Botao>
              </div>
            </div>
            <div className={styles.imagensBabi}>
              <img className={styles.babi2} src={babi2} alt="" />
              <img className={styles.babi1} src={babi1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
