import styles from "./CopyTratamentoDoencasNaoTransmissiveis.module.scss";
import Reason from "../../Components/Reason/Reason";
import imgAbs from "../../assets/imgTratamentoDoencasNaoTransmissiveis/imgAbs.png";
import imgRela from "../../assets/imgTratamentoDoencasNaoTransmissiveis/imgRela.png";
import mulherFalando from "../../assets/imgTratamentoDoencasNaoTransmissiveis/mulherFalando.png";
import grafpizza from "../../assets/imgTratamentoDoencasNaoTransmissiveis/grafpizza.png";
import graflinha from "../../assets/imgTratamentoDoencasNaoTransmissiveis/graflinha.png";
import diabetes from "../../assets/imgTratamentoDoencasNaoTransmissiveis/diabetes.png";
import cancer from "../../assets/imgTratamentoDoencasNaoTransmissiveis/cancer.png";
import cardio from "../../assets/imgTratamentoDoencasNaoTransmissiveis/cardio.png";
import mentais from "../../assets/imgTratamentoDoencasNaoTransmissiveis/mentais.png";
import respiratorias from "../../assets/imgTratamentoDoencasNaoTransmissiveis/respiratorias.png";
import alcool from "../../assets/imgTratamentoDoencasNaoTransmissiveis/alcool.png";
import poluicao from "../../assets/imgTratamentoDoencasNaoTransmissiveis/poluicao.png";
import sedentarismo from "../../assets/imgTratamentoDoencasNaoTransmissiveis/sedentarismo.png";
import tabagismo from "../../assets/imgTratamentoDoencasNaoTransmissiveis/tabagismo.png";
import alimentacao from "../../assets/imgTratamentoDoencasNaoTransmissiveis/alimentacao.png";
import relogio from "../../assets/imgTratamentoDoencasNaoTransmissiveis/relogio.png";
import BemEstarItem from "../../Components/BemEstarItem/BemEstarItem";

const CopyTratamentoDoencasNaoTransmissiveis = () => {
  return (
    <div className={styles.nTransmissivelContainer}>
      <div className={styles.bannerNTransmissivel}>
        <p className={styles.nTransmissivelContainer}>
          Segundo o Ministério da Saúde, 57,4 milhões dos brasileiros possui ao
          menos uma das doenças crônicas não transmissíveis (DCNT)
        </p>
      </div>
      <div className={styles.gridArea}>
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
      </section>
    </div>
  );
};

export default CopyTratamentoDoencasNaoTransmissiveis;
