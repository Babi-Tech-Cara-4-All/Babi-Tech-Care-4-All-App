import styles from "./MelhoriaGeralSaude.module.scss";
import { useState, useEffect } from "react";
import ODS3 from "../../assets/imgMelhoria/ODS3.png";
import c1 from "../../assets/imgMelhoria/c1.png";
import c2 from "../../assets/imgMelhoria/c2.png";
import c3 from "../../assets/imgMelhoria/c3.png";
import c4 from "../../assets/imgMelhoria/c4.png";
import c5 from "../../assets/imgMelhoria/c5.png";
import i1 from "../../assets/imgMelhoria/i1.png";
import i2 from "../../assets/imgMelhoria/i2.png";
import i3 from "../../assets/imgMelhoria/i3.png";
import i4 from "../../assets/imgMelhoria/i4.png";
import i5 from "../../assets/imgMelhoria/i5.png";
import i6 from "../../assets/imgMelhoria/i6.png";
import info2 from "../../assets/imgMelhoria/info2.png";

const MelhoriaGeralSaude = () => {
  const [textoVisivel, setTextoVisivel] = useState("");
  const [tituloAtivo, setTituloAtivo] = useState("");

  const odsList = [
    {
      titulo: "ODS 3.5",
      texto:
        "Reforçar a prevenção e o tratamento dos problemas decorrentes do uso de substâncias, incluindo o abuso de drogas entorpecentes e uso nocivo do álcool.",
    },
    {
      titulo: "ODS 3.6",
      texto:
        "Até 2030, reduzir pela metade as mortes e lesões por acidentes no trânsito.",
    },
    {
      titulo: "ODS 3.7",
      texto:
        "Até 2030, assegurar o acesso universal aos serviços e insumos de saúde sexual e reprodutiva, incluindo o planejamento reprodutivo, à informação e educação, bem como a integração da saúde reprodutiva em estratégias e programas nacionais.",
    },
    {
      titulo: "ODS 3.8",
      texto:
        "Assegurar, por meio do Sistema Único de Saúde (SUS), a cobertura universal de saúde, o acesso a serviços essenciais de saúde de qualidade em todos os níveis de atenção e o acesso a medicamentos e vacinas essenciais seguros, eficazes e de qualidade que estejam incorporados ao rol de produtos oferecidos pelo SUS.",
    },
    {
      titulo: "ODS 3.9",
      texto:
        "Até 2030, reduzir substancialmente o número de mortes e doenças por produtos químicos perigosos, contaminação e poluição do ar e água do solo.",
    },
  ];
  const handleClick = (titulo, texto) => {
    setTituloAtivo(titulo);
    setTextoVisivel(texto);
  };

  const [currentImage, setCurrentImage] = useState(0);

  const images = [c1, c2, c3, c4, c5];
  const imageLinks = [
    "https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/s/sus/carta-dos-direitos-dos-usuarios-do-sus",
    "https://news.un.org/pt/story/2023/07/1817182",
    "https://grupoft.com.br/seguranca-ao-dirigir/",
    "https://viverbem.unimedbh.com.br/maternidade/planejamento-familiar/planejamento-familiar/",
    "https://vidasaudavel.einstein.br/dependencia-quimica/",
  ]; 

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  


  return (
    <div className={styles.nTransmissivelContainer}>
      <div className={styles.bannerNTransmissivel}>
        <p className={styles.nTransmissivelContainer}>
          Em busca do bem-estar global, a promoção da saúde emerge como um pilar
          fundamental, alinhando-se a ODS 3, que visa assegurar uma vida
          saudável e promover o bem-estar para todos, em todas as idades.
        </p>
      </div>
      <div className={styles.gridArea}>
        <div className={styles.bodyPage}>
          <section className={styles.odsContainer}>
            <div className={styles.odsInfo}>
              <div className={styles.odsList}>
                {odsList.map((ods, index) => (
                  <h3
                    key={index}
                    onClick={() => handleClick(ods.titulo, ods.texto)}
                    className={
                      ods.titulo === tituloAtivo
                        ? styles.tituloAtivo
                        : styles.tituloInativo
                    }
                  >
                    {ods.titulo}
                  </h3>
                ))}
              </div>
              <p className={styles.odsText}>{textoVisivel}</p>
            </div>
            <img src={ODS3} alt="" />
          </section>
          <section className={styles.carrossel}>


          <a href={imageLinks[currentImage]} target="_blank" rel="noopener noreferrer">
          <img src={images[currentImage]} alt="" />
          </a>

        <button className={styles.botao1} onClick={nextImage}> next </button>
      </section>
        </div>
      </div>
      {/* <div className={styles.gridArea}>
        <div className={styles.bodyPage}>
          <section className={styles.odsContainer}>
            <div className={styles.odsImages}>
              <img className={styles.baby} src={imgAbs} alt="baby"></img>
              <img className={styles.babies} src={imgRela} alt="babies"></img>
            </div>
            <div className={styles.odsText}>
              <div>
                <h1>ODS 3.4 DA ONU</h1>
                <h3>
                  Até 2030, reduzir em um terço a mortalidade prematura por
                  doenças não transmissíveis via prevenção e tratamento,
                  promover a saúde mental e o bem-estar, a saúde do trabalhador
                  e da trabalhadora, e prevenir o suicídio, alterando
                  significativamente a tendência de aumento.
                </h3>
              </div>
            </div>
          </section>
          <section className={styles.mulherFalando}>
            <h2>O que é uma doença crônica?</h2>
            <img src={mulherFalando} alt="" />
          </section>
        </div>
      </div>
      <section className={styles.NTransmissivelSection}>
        <div className={styles.gridNTransmissivel}>
          <div className={styles.bodyNTransmissivel}>
            <div className={styles.informacoes}>
              <div className={styles.grafPizza}>
                <img src={grafpizza} alt="grafico de pizza" />
                <p>
                  69% das mortes ocorridas no Brasil em 2016 <br /> foram por
                  doenças crônicas não <br /> transmissíveis.
                </p>
              </div>
              <p className={styles.informacoesDestaque}>
                Maior alerta é na faixa de 30 a 69 anos, quando maioria das
                mortes são consideradas evitáveis
              </p>
            </div>
            <div className={styles.grafico}>
              <img src={graflinha} alt="grafico de Linha" />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section2}>
        <section className={styles.gridArea2}>
          <div className={styles.bodyPage2}>
            <section className={styles.doencas}>
              <h2>Doenças</h2>
              <div className={styles.doencasFlex}>
                <Reason icone={diabetes} texto="Diabetes" />
                <Reason
                  icone={mentais}
                  texto="Condições mentais e neurológicas"
                />
                <Reason icone={cardio} texto="Doenças cardiovasculares" />
                <Reason icone={respiratorias} texto="Doenças Respiratórias" />
                <Reason icone={cancer} texto="Câncer" />
              </div>
            </section>
            <section className={styles.doencas}>
              <h2 className={styles.doencasH1azul}>Fatores de Risco</h2>
              <div className={styles.doencasFlex}>
                <Reason icone={alimentacao} texto="Alimentação inadequada" />
                <Reason icone={alcool} texto="Uso abusivo de álcool" />
                <Reason icone={poluicao} texto="Poluiçãou do ar" />
                <Reason icone={tabagismo} texto="Tabagismo" />
                <Reason icone={sedentarismo} texto="Sedentarismo" />
              </div>
            </section>
          </div>
        </section>
      </section>
      <section className={styles.BemEstarSection}>
        <div className={styles.gridBemEstar}>
          <div className={styles.bodyBemEstar}>
            <div className={styles.headerBemEstar}>
              <h1 className={styles.headerH1}>O Bem-Estar</h1>
              <p className={styles.headerP}>
                Conforme a Organização Mundial da Saúde, a definição que temos
                sobre saúde é “um estado de completo bem-estar físico, mental e
                social, e não apenas a ausência de doenças”
              </p>
            </div>
            <div className={styles.bodyBemEstar}>
              <BemEstarItem cor="azul" nome="Físico">
                <p>
                  Se refere a condição, ausência de doenças associada a um bom
                  metabolismo.
                </p>
              </BemEstarItem>
              <BemEstarItem cor="azul" nome="Econômico">
                <p>Está relacionado a condições monetárias.</p>
              </BemEstarItem>
              <BemEstarItem cor="azul" nome="Social">
                <p>
                  Relacionado a qualidade de vida, envolvendo relações, prazer,
                  liberdade e saúde ambiental.
                </p>
              </BemEstarItem>
              <BemEstarItem cor="azul" nome="Mental">
                <p>
                  É o equilíbrio de sentimentos e emoções e o controle sobre
                  eles.
                </p>
              </BemEstarItem>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.TecnlogiaSection}>
        <div className={styles.gridTecnlogia}>
          <div className={styles.bodyTecnlogia}>
            <img src={relogio} alt="" />
            <div className={styles.TecnlogiaItens}>
              <h1>Superheroína: A Tecnologia!</h1>
              <ul>
                <li>+ monitoramento da própria saúde</li>
                <li>+ alimentação saudável </li>
                <li>+ exercícios</li>
                <li>+ registros de condições</li>
                <li>
                  {" "}
                  <span>
                    {" "}
                    = Prevenção de doenças e melhoria no tratamento e cuidado!
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default MelhoriaGeralSaude;
