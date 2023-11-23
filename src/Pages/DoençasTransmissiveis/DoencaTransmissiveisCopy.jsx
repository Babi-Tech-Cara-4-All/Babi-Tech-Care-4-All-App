import styles from "./DoencaTransmissiveisCopy.module.scss";
import vacina from "../../assets/imgDoencasTransmissiveis/vacina.png";
import mascara from "../../assets/imgDoencasTransmissiveis/mascara.png";
import IconBacterias from "../../assets/imgDoencasTransmissiveis/IconBacterias.png";
import IconProtozoarios from "../../assets/imgDoencasTransmissiveis/IconProtozoarios.png";
import IconMetazoarios from "../../assets/imgDoencasTransmissiveis/IconMetazoarios.png";
import IconVirus from "../../assets/imgDoencasTransmissiveis/IconVirus.png";
import IconFungos from "../../assets/imgDoencasTransmissiveis/IconFungos.png";
import menina from "../../assets/imgDoencasTransmissiveis/menina.png";
import mapa from "../../assets/imgDoencasTransmissiveis/mapa.png";
import grafico from "../../assets/imgDoencasTransmissiveis/grafico.png";
import Reason from "../../Components/Reason/Reason";
import DoencaTransmissivel from "../../Components/DoencaTransmissivel/DoencaTransmissivel";

const DoencaTransmissiveisCopy = () => {
  return (
    <div className={styles.mortalidadeContainer}>
      <div className={styles.bannerMortalidade}>
        <p className={styles.infoContainer}>
          Doenças transmissíveis, como tuberculose, HIV, malária e hepatite B,
          <br />
          ainda causam quase metade das mortes em países de baixa e média renda.
        </p>
      </div>
      <div className={styles.gridArea}>
        <div className={styles.bodyPage}>
          <section className={styles.odsContainer}>
            <div className={styles.odsImages}>
              <img className={styles.baby} src={vacina} alt="baby"></img>
              <img className={styles.babies} src={mascara} alt="babies"></img>
            </div>
            <div className={styles.odsText}>
              <div>
                <h1>ODS 3.3 DA ONU</h1>
                <h3>
                  Até 2030, acabar com as epidemias de AIDS, tuberculose,
                  malária e doenças tropicais negligenciadas, e combater a
                  hepatite, doenças transmitidas pela água, e outras doenças
                  transmissíveis.
                </h3>
              </div>
            </div>
          </section>
          <section className={styles.gridDoencas}>
            <h2>Principais doenças transmissiveis e motalidades</h2>
            <div className={styles.gridDoencasContainer}>
              <DoencaTransmissivel cor="azul" nome="HIV" casos="37.7 M" mortes="680 K"/>
              <DoencaTransmissivel cor="laranja" nome="Tuberculose" casos="5.8 M" mortes="1.3 M"/>
              <DoencaTransmissivel cor="azul" nome="Malaria" casos="241 M" mortes="627 K"/>
              <DoencaTransmissivel cor="laranja" nome="Hepatite B" casos="296 M" mortes="820 K"/>
              <DoencaTransmissivel cor="azul" nome="DTNs" casos="1.7 B" mortes="750 K"/>
            </div>
          </section>
          <section className={styles.gridCausadores}>
            <h2>AGENTES CAUSADORES</h2>
            <div className={styles.gridCausadoresContainer}>
              <Reason icone={IconBacterias} texto="Bacterias" />
              <Reason icone={IconMetazoarios} texto="Metazoários" />
              <Reason icone={IconVirus} texto="Vírus" />
              <Reason icone={IconFungos} texto="Fungos" />
              <Reason icone={IconProtozoarios} texto="Protozoários" />
            </div>
          </section>
          {/* <section className={styles.dataContainer}>
          <div className={styles.dataImage}>
            <h1>Taxa de Mortalidade Infantil - Brasil</h1>
            <img src={dado1} alt="taxa de mortalidade"></img>
            <p>
              Taxa de Mortalidade Infantil (por mil Nascidos Vivos). Regiões,
              1990 a 2019
            </p>
          </div>
          <div className={styles.dataText}>
            <p className={styles.dataText1}>
              A mortalidade infantil é um importante indicador de saúde e
              condições de vida de uma população.
            </p>
            <p className={styles.dataText2}>
              No Brasil, vem-se observando um declínio na taxa de mortalidade
              nesse grupo.
            </p>
          </div>
        </section>
*/}
        </div>
      </div>
      {/* <section className={styles.dataSection}>
      <div className={styles.gridAreaData}>
        <div className={styles.bodyData}>
          <div className={styles.dataBox}>
            <p>
              Taxa de mortalidade infantil (menores de um ano de idade) - 2019
              (para cada mil nascidos vivos)
            </p>
            <img src={dado2} alt="dado2"></img>
          </div>
          <div className={styles.dataBox}>
            <p>
              Taxa de mortalidade na infância (menores de um cinco de idade) -
              2019 (para cada mil nascidos vivos)
            </p>
            <img src={dado3} alt="dado3"></img>
          </div>
        </div>
      </div>
    </section>

    <section className={styles.flipCard}>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div className={styles.front}>
          <img src={kids} alt="" />
          <button onClick={(e) => flipCard(e)}>Click to flip</button>
        </div>
        <div className={styles.back}>
          <p>
            O Brasil vem avançando na redução da mortalidade infantil, mas
            ainda é preciso um grande esforço para enfrentar as diferenças
            regionais e alcançar patamares mais baixos.
          </p>
          <div className={styles.starSpace}>
            <img src={star} alt="star" />
            <img src={arrow} alt="arrow" />
          </div>
          <p>
            A mobilização não somente de todas as esferas de governo, mas de
            toda a sociedade e de cada cidadão é importante para consolidar
            essa redução, num movimento em defesa da vida.
          </p>
          <button onClick={(e) => flipCard(e)}>Click to flip</button>
        </div>
      </ReactCardFlip>
    </section> */}
    </div>
  );
};

export default DoencaTransmissiveisCopy;
