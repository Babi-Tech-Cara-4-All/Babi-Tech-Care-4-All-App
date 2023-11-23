import styles from "./DoencaTransmissiveis.module.scss";
import BannerDT from "../../assets/imgDoencasTransmissiveis/BannerDT.png";
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

const DoencaTransmissiveis = () => {
  return (
    <div className={styles.DoencaTransmissiveisContainer}>
      {/* --- BANNER */}

      <div className={styles.Banner}>
        <img src={BannerDT} alt="Banner" />
        <div className={styles.tituloBanner}>
          Doenças transmissíveis, como tuberculose, HIV, malária e hepatite B,
          <br />
          ainda causam quase metade das mortes em países de baixa e média renda.
        </div>
      </div>

      {/*  BOX ODS */}

      <div className={styles.odsContainer}>
        <div className={styles.odsImages}>
          <img className={styles.vacina} src={vacina} alt="baby"></img>
          <img className={styles.mascara} src={mascara} alt="babies"></img>
        </div>

        <div className={styles.odsText}>
          <h1>ODS 3.3 DA ONU</h1>
          <h3>
            Até 2030, acabar com as epidemias de AIDS, tuberculose, malária e
            doenças tropicais negligenciadas, e combater a hepatite, doenças
            transmitidas pela água, e outras doenças transmissíveis.
          </h3>
        </div>
      </div>

      {/* DOENÇAS TRANSMISSIVEIS E MORTALIDADES */}

      <div className={styles.boxMortalidades}>
        <div>
          <h2 className={styles.txtMortalidades}>
            Principais doenças transmissiveis e motalidades
          </h2>
        </div>

        <div className={styles.Mortalidades}>
          <div className={styles.blockMortalidades}>
            <div className={styles.tituloMortalidades}>
              <h3>HIV</h3>
            </div>

            <div className={styles.bodyMortalidades}>
              <p className={styles.pnum}>37.7 M</p>
              <p className={styles.pfont}>De Casos</p>
              <p className={styles.pnum}>680 K</p>
              <p className={styles.pfont}>Mortes</p>
            </div>
          </div>

          <div className={styles.blockMortalidades}>
            <div className={styles.tituloMortalidadesOrange}>
              <h3>Tuberculose</h3>
            </div>

            <div className={styles.bodyMortalidades}>
              <p className={styles.pnum}>5.8 M</p>
              <p className={styles.pfont}>De Casos</p>
              <p className={styles.pnum}>1.3 M</p>
              <p className={styles.pfont}>Mortes</p>
            </div>
          </div>

          <div className={styles.blockMortalidades}>
            <div className={styles.tituloMortalidades}>
              <h3>Malaria</h3>
            </div>

            <div className={styles.bodyMortalidades}>
              <p className={styles.pnum}>241 M</p>
              <p className={styles.pfont}>De Casos</p>
              <p className={styles.pnum}>627 K</p>
              <p className={styles.pfont}>Mortes</p>
            </div>
          </div>

          <div className={styles.blockMortalidades}>
            <div className={styles.tituloMortalidadesOrange}>
              <h3>Hepatite B</h3>
            </div>

            <div className={styles.bodyMortalidades}>
              <p className={styles.pnum}>296 M</p>
              <p className={styles.pfont}>De Casos</p>
              <p className={styles.pnum}>820 K</p>
              <p className={styles.pfont}>Mortes</p>
            </div>
          </div>

          <div className={styles.blockMortalidades}>
            <div className={styles.tituloMortalidades}>
              <h3>DTNs</h3>
            </div>

            <div className={styles.bodyMortalidades}>
              <p className={styles.pnum}>1,7 B</p>
              <p className={styles.pfont}>De Casos</p>
              <p className={styles.pnum}>750 K</p>
              <p className={styles.pfont}>Mortes</p>
            </div>
          </div>
        </div>
      </div>

      {/* ICONS*/}
      <div className={styles.boxCausas}>
        <div>
          <h2 className={styles.txtCausas}>AGENTES CAUSADORES</h2>
        </div>

        <div className={styles.Causas}>
          <div className={styles.blockIcons}>
            <div>
              <img src={IconBacterias} alt="Bacterias" />
            </div>
            <div>
              <h3>Bactérias</h3>
            </div>
          </div>

          <div className={styles.blockIcons}>
            <div>
              <img src={IconMetazoarios} alt="Metazoários" />
            </div>
            <div>
              <h3>Metazoários</h3>
            </div>
          </div>

          <div className={styles.blockIcons}>
            <div>
              <img src={IconVirus} alt="Vírus" />
            </div>
            <div>
              <h3>Vírus</h3>
            </div>
          </div>

          <div className={styles.blockIcons}>
            <div>
              <img src={IconFungos} alt="Fungos" />
            </div>
            <div>
              <h3>Fungos</h3>
            </div>
          </div>

          <div className={styles.blockIcons}>
            <div>
              <img src={IconProtozoarios} alt="Protozoários" />
            </div>
            <div>
              <h3>Protozoários</h3>
            </div>
          </div>
        </div>
      </div>

      {/* BOX DESIGUALDADE */}

      <div className={styles.boxDesigualdade}>
        <div className={styles.Mulher}>
          <div className={styles.balaoMulher}>
            <div className={styles.circulo}></div>

            <div className={styles.balao}>
              <div className={styles.txtBalao}>
                <p>
                  Em um mundo de avanços em saúde, a desigualdade persistente
                  nos lembra da necessidade urgente de garantir que cada vida
                  conte
                </p>
              </div>
            </div>
          </div>

          <div className={styles.txtMulher}>
            <ul>
              <li>
                Em muitos países, a realização de testes para HIV é
                substancialmente mais baixa entre populações empobrecidas,
                mal-educadas ou em áreas rurais.{" "}
              </li>
              <br />
              <li>
                Jovens mulheres (15-24 anos) na Região Africana da OMS têm maior
                risco de infecção por HIV do que seus colegas masculinos.
              </li>
              <br />
              <li>
                Globalmente, os homens são menos propensos a fazer o teste de
                HIV ou receber terapia antirretroviral.
              </li>
            </ul>
          </div>

          <div className={styles.btnMulher}>
            <h2>Saiba Mais</h2>
            {/* LINK DO BOTAO
      https://iris.who.int/bitstream/handle/10665/356584/9789240051140-eng.pdf?sequence=1 */}
          </div>
        </div>

        <div className={styles.dados}>
          <div>
            <img className={styles.mapa} src={mapa} alt="mapa" />
            <figcaption>
              Estimated numbers of people (all ages) living with HIV, 2020
            </figcaption>
          </div>

          <div>
            <img className={styles.grafico} src={grafico} alt="grafico" />
            <figcaption>
              New HIV infections (per 1000 uninfected population), by WHO region
              and global, 2000–2020
            </figcaption>
          </div>
        </div>
      </div>

      {/* A MULHER ESTA AQUI */}
      <img className={styles.Mulherimg} src={menina} alt="muie" />
    </div>
  );
};

export default DoencaTransmissiveis;
