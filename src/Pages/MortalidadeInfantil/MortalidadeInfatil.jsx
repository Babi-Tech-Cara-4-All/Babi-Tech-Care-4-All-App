import ReactCardFlip from "react-card-flip";
import styles from "./MortalidadeInfantil.module.scss";
import babies from "../../assets/imgMortalidadeInfantil/babies.png";
import baby from "../../assets/imgMortalidadeInfantil/baby.png";
import dado1 from "../../assets/imgMortalidadeInfantil/dado1.png";
import dado2 from "../../assets/imgMortalidadeInfantil/dado2.png";
import dado3 from "../../assets/imgMortalidadeInfantil/dado3.png";
import icon1 from "../../assets/imgMortalidadeInfantil/icon1.png";
import icon2 from "../../assets/imgMortalidadeInfantil/icon2.png";
import icon3 from "../../assets/imgMortalidadeInfantil/icon3.png";
import icon4 from "../../assets/imgMortalidadeInfantil/icon4.png";
import icon5 from "../../assets/imgMortalidadeInfantil/icon5.png";
import icon6 from "../../assets/imgMortalidadeInfantil/icon6.png";
import kids from "../../assets/imgMortalidadeInfantil/kids.png";
import star from "../../assets/imgHomePage/Star.png";
import arrow from "../../assets/imgHomePage/Arrow.png";
import Reason from "../../Components/Reason/Reason";
import { useState } from "react";

const MortalidadeInfatilCopy = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  function flipCard(e) {
    e.preventDefault();
    setIsFlipped((prevState) => !prevState);
  }

  return (
    <div className={styles.mortalidadeContainer}>
      <div className={styles.bannerMortalidade}>
        <p className={styles.infoContainer}>
          65,8% dos óbitos de crianças menores de 1 ano poderiam ser evitados.
        </p>
      </div>
      <div className={styles.gridArea}>
        <div className={styles.bodyPage}>
          <section className={styles.odsContainer}>
            <div className={styles.odsImages}>
              <img className={styles.baby} src={baby} alt="baby"></img>
              <img className={styles.babies} src={babies} alt="babies"></img>
            </div>
            <div className={styles.odsText}>
              <div>
                <h1>ODS 3.2 DA ONU</h1>
                <h3>
                  O Brasil precisa, até 2030, enfrentar as mortes evitáveis de
                  recém-nascidos e crianças menores de 5 anos, objetivando
                  reduzir a:
                </h3>
              </div>

              <ul>
                <li>
                  Taxa da mortalidade infantil para no máximo 5 por 1.000
                  nascidos vivos
                </li>
                <li>
                  Mortalidade na infância para no máximo 8 por 1.000 nascidos
                  vivos.
                </li>
              </ul>
            </div>
          </section>
          <section className={styles.dataContainer}>
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
          <section className={styles.gridWrapper}>
            <h2>Essa queda normalmente é atribuída a:</h2>
            <div className={styles.gridContainer}>
              <Reason
                link="https://www.scielo.br/j/csp/a/CGMbDPr4FL5qYQCpPKSVQpC/?lang=pt"
                icone={icon1}
                texto="Acesso Pré-Natal"
              />
              <Reason
                link="https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/a/aleitamento-materno#:~:text=O%20aleitamento%20materno%20%C3%A9%20uma,ch%C3%A1s%2C%20%C3%A1gua%20e%20outros%20alimentos."
                icone={icon2}
                texto="Promoção do aleitamento materno"
              />
              <Reason
                link="https://www.gov.br/saude/pt-br/vacinacao/calendario"
                icone={icon3}
                texto="Cobertura vacinal"
              />
              <Reason
                link="https://institutoneurosaber.com.br/como-acompanhar-o-desenvolvimento-infantil/"
                icone={icon4}
                texto="Acompanhamento do desenvolvimento da criança"
              />
              <Reason
                link="https://www.gov.br/saude/pt-br/composicao/saps"
                icone={icon5}
                texto="Atenção primária na saúde"
              />
              <Reason
                link="https://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/13100-asi-aumento-da-escolaridade-feminina-reduz-fecundidade-e-mortalidade-infantil"
                icone={icon6}
                texto="Nível de escolaridade da mãe"
              />
            </div>
          </section>
        </div>
      </div>
      <section className={styles.dataSection}>
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
      </section>
    </div>
  );
};

export default MortalidadeInfatilCopy;
