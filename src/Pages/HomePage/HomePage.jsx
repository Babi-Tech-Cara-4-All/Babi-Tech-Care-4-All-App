import styles from "./HomePage.module.scss";
import Botao from "../../Components/Botao/Botao";
import HomeCaracteristicas from "../../Components/HomeCaracteristicas/HomeCaracteristicas";
import Metas from "../../Components/Metas/Metas";
import prevencao from "../../assets/imgHomePage/prevencao.png";
import automacao from "../../assets/imgHomePage/automacao.png";
import precisao from "../../assets/imgHomePage/precisao.png";
import star from "../../assets/imgHomePage/Star.png";
import arrow from "../../assets/imgHomePage/Arrow.png";
import babi1 from "../../assets/imgHomePage/babi1.png";
import babi2 from "../../assets/imgHomePage/babi2.png";
import motalidadeIntanil from "../../assets/imgHomePage/mortalidadeInfantil.png";
import CombateDoenca from "../../assets/imgHomePage/CombateDoenca.png";
import prevencaoDoenca from "../../assets/imgHomePage/prevencaoDoenca.png";
import melhoriaSaude from "../../assets/imgHomePage/melhoriaSaude.png";
import NumbersHome from "../../Components/NumbersHome/NumbersHome";
import Time from "../../Components/Time/Time";
import Forms from "../../Components/Forms/Forms";

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
          <section className={styles.caracteristicas}>
            <HomeCaracteristicas
              img={prevencao}
              text="Soluções baseadas em dados, wearables e apps capacitam o monitoramento eficaz da saúde, promovendo o autocuidado."
            >
              Prevenção
            </HomeCaracteristicas>
            <HomeCaracteristicas
              img={automacao}
              text="Cirurgias robóticas de precisão e sistemas de entrega de medicamentos autônomos para pacientes estão se tornando realidade."
            >
              Automação
            </HomeCaracteristicas>
            <HomeCaracteristicas
              img={precisao}
              text="A medicina personalizada permite tratamentos sob medida para pacientes com base em sua composição genética única."
            >
              Precisão
            </HomeCaracteristicas>
          </section>
          <section className={styles.videoPitchSection}>
            <div className={styles.text}>
              <p id="videoPitch" className={styles.textBlue}>VÍDEO PITCH</p>
              <h2 className={styles.sectionTitle}>
                BabiMed: Sempre ao seu lado e salvando vidas.
              </h2>
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
              <Botao cor="azul">Vídeo Pitch</Botao>
            </div>
            <div className={styles.imagensBabi}>
  <img className={styles.babi2} src={babi2} alt="" />
  <iframe
    className={styles.babi1}
    width="560"
    height="315"
    src="https://www.youtube.com/embed/-MCtv16U--Q"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>
          </section>
          <section className={styles.metasSection}>
            <p className={styles.textBlue}>METAS</p>
            <h2 className={styles.sectionTitle}>
              Metas a serem alcançadas até 2030
            </h2>
            <p className={styles.sectionSubTitle}>
              Objetivo 3. Assegurar uma vida saudável e promover o <br />{" "}
              bem-estar para todas e todos, em todas as idades
            </p>
            <div className={styles.metas}>
              <Metas
                imagem={motalidadeIntanil}
                titulo="Redução da Mortalidade
                Infantil"
                meta="Meta 3.2:"
                texto="Eliminar as mortes
                evitáveis de recém-
                nascidos e crianças
                menores de 5 anos,
                com metas específicas
                de mortalidade
                neonatal e infantil."
                rota="/Mortalidade-Infatil"
                direction="column"
              />
              <Metas
                imagem={CombateDoenca}
                titulo="Combate a doenças transmissíveis"
                meta="Meta 3.3:"
                texto="Combate contra malária, AIDS, tuberculose,
                hepatite, doenças
                transmitidas pela água e
                outras doenças
                transmissíveis."
                rota="/Prevencao-Doenca-Transmissiveis"
                direction="column"
              />
              <Metas
                imagem={prevencaoDoenca}
                titulo="Prevenção e tratamento de doenças não transmissíveis"
                meta="Meta 3.3:"
                texto="Reduzir
                em um terço a
                mortalidade
                prematura por
                doenças não
                transmissíveis."
                rota="/Tratamento-Doencas-Nao-Transmissiveis"
                direction="column"
              />
              <Metas
                imagem={melhoriaSaude}
                titulo="Melhoria Geral da Saúde"
                texto="Engloba diversas metas,
                como prevenção do abuso de
                substâncias, redução de
                acidentes de trânsito, acesso
                universal a serviços de saúde
                sexual e reprodutiva,
                redução de mortes por
                produtos químicos perigosos
                e poluição."
                rota="/Melhoria-Geral-Da-Saude"
                direction="row"
              />
            </div>
          </section>
        </div>
      </div>
      <NumbersHome />
      <Time />
      <Forms />
    </div>
  );
};

export default HomePage;
