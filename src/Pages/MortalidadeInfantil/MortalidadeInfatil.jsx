import styles from "./MortalidadeInfantil.module.scss";
import babies from "../../assets/imgMortalidadeInfantil/babies.png";
import baby from "../../assets/imgMortalidadeInfantil/baby.png";
import Banner1 from "../../assets/imgMortalidadeInfantil/Banner1.png";
import dado1 from "../../assets/imgMortalidadeInfantil/dado1.png";
import dado2 from "../../assets/imgMortalidadeInfantil/dado2.png";
import dado3 from "../../assets/imgMortalidadeInfantil/dado3.png";
import icon1 from "../../assets/imgMortalidadeInfantil/icon1.png";
import icon2 from "../../assets/imgMortalidadeInfantil/icon2.png";
import icon3 from "../../assets/imgMortalidadeInfantil/icon3.png";
import icon4 from "../../assets/imgMortalidadeInfantil/icon4.png";
import icon5 from "../../assets/imgMortalidadeInfantil/icon5.png";
import icon6 from "../../assets/imgMortalidadeInfantil/icon6.png";
import FlipCardKids from "../../Components/FlipCardKids/FlipCardKids";

const MortalidadeInfatil = () => {
  return (
    <div className={styles.mortalidadeContainer}>
      <div className={styles.bannerContainer}>
        <img src={Banner1} alt="Banner" />
        <div className={styles.tituloBanner}>
          65,8% dos óbitos de crianças menores de 1 ano poderiam ser evitados.
        </div>
      </div>

      <div className={styles.odsContainer}>
        <div className={styles.odsImages}>
          <img className={styles.baby} src={baby} alt="baby"></img>
          <img className={styles.babies} src={babies} alt="babies"></img>
        </div>

        <div className={styles.odsText}>
          <h1>ODS 3.2 DA ONU</h1>
          <h3>
            O Brasil precisa, até 2030, enfrentar as mortes evitáveis de
            recém-nascidos e crianças menores de 5 anos, objetivando reduzir a:
          </h3>
          <ul>
            <li>
              taxa da mortalidade infantil para no máximo 5 por 1.000 nascidos
              vivos{" "}
            </li>
            <li>
              e a mortalidade na infância para no máximo 8 por 1.000 nascidos
              vivos.
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.dataContainer}>
        <div className={styles.dataImage}>
          <h1>Taxa de Mortalidade Infantil - Brasil</h1>
          <img src={dado1} alt="taxa de mortalidade"></img>
          <p>
            Taxa de Mortalidade Infantil (por mil Nascidos Vivos). Regiões, 1990
            a 2019
          </p>
          <h2>Essa queda normalmente é atribuída a:</h2>
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
      </div>

      <div className={styles.gridWrapper}>
        <div className={styles.gridContainer}>
          <div className={styles.gridItem}>
            <a
              href="https://www.scielo.br/j/csp/a/CGMbDPr4FL5qYQCpPKSVQpC/?lang=pt"
              target="_blank"
              rel="noreferrer"
            >
              <img src={icon1} alt="Ícone 1" />
            </a>
            <p>Acesso Pré-Natal</p>
          </div>
          <div className={styles.gridItem}>
            <a
              href="https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/a/aleitamento-materno#:~:text=O%20aleitamento%20materno%20%C3%A9%20uma,ch%C3%A1s%2C%20%C3%A1gua%20e%20outros%20alimentos."
              target="_blank"
              rel="noreferrer"
            >
              <img src={icon2} alt="Ícone 2" />
            </a>
            <p>Promoção do aleitamento materno</p>
          </div>
          <div className={styles.gridItem}>
            <a
              href="https://www.gov.br/saude/pt-br/vacinacao/calendario"
              target="_blank"
              rel="noreferrer"
            >
              <img src={icon3} alt="Ícone 3" />
            </a>
            <p>Cobertura vacinal</p>
          </div>
          <div className={styles.gridItem}>
            <a
              href="https://institutoneurosaber.com.br/como-acompanhar-o-desenvolvimento-infantil/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={icon4} alt="Ícone 4" />
            </a>
            <p>Acompanhamento do desenvolvimento da criança</p>
          </div>
          <div className={styles.gridItem}>
            <a
              href="https://www.gov.br/saude/pt-br/composicao/saps"
              target="_blank"
              rel="noreferrer"
            >
              <img src={icon5} alt="Ícone 5" />
            </a>
            <p>Atenção primária na saúde</p>
          </div>
          <div className={styles.gridItem}>
            <a
              href="https://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/13100-asi-aumento-da-escolaridade-feminina-reduz-fecundidade-e-mortalidade-infantil"
              target="_blank"
              rel="noreferrer"
            >
              <img src={icon6} alt="Ícone 6" />
            </a>
            <p>Nível de escolaridade da mãe</p>
          </div>
        </div>
      </div>

      <div className={styles.dataContainer2}>
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
      <div className={styles.flipCardContainer}>
        <FlipCardKids/>
      </div>


    </div>
  );
};

export default MortalidadeInfatil;
