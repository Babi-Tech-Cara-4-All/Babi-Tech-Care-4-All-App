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
            <section className={styles.risco}>
              <h2>Fatores de Risco</h2>
              <div className={styles.riscoFlex}>
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
      {/* <section className={styles.informationSection}>
        <div className={styles.gridInformation}>
          <div className={styles.bodyInformation}>
            <div className={styles.informacoes}>
              <img src={mulherFalando} alt="" />
              <ul>
                <li>
                  Em muitos países, a realização de testes para HIV é
                  substancialmente mais baixa entre populações empobrecidas,
                  mal-educadas ou em áreas rurais.
                </li>
                <br />
                <li>
                  Jovens mulheres (15-24 anos) na Região Africana da OMS têm
                  maior risco de infecção por HIV do que seus colegas
                  masculinos.
                </li>
                <br />
                <li>
                  Globalmente, os homens são menos propensos a fazer o teste de
                  HIV ou receber terapia antirretroviral.
                </li>
              </ul>
              <Botao>
                {" "}
                <a
                  href="https://iris.who.int/bitstream/handle/10665/356584/9789240051140-eng.pdf?sequence=1"
                  target="_blank"
                  rel="noreferrer"
                >
                  Saiba Mais
                </a>
              </Botao>
            </div>
            <div className={styles.maps}>
              <img src={mapa} alt="dado2"></img>
              <img src={grafico} alt="dado3"></img>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className={styles.section2}>
        <section className={styles.gridArea2}>
          <div className={styles.bodyPage2}>
            <section className={styles.gridPrevencoes}>
              <h2>Prevenções</h2>
              <div className={styles.gridPrevencoesContainer}>
                <DoencaTransmissivel cor="azul" nome="HIV">
                  <ul>
                    <li>Vacinação HPV;</li>
                    <li>O uso da camisinha em todas as relações sexuais;</li>
                    <li>Testagem para HIV.</li>
                  </ul>
                </DoencaTransmissivel>
                <DoencaTransmissivel cor="laranja" nome="Tuberculose">
                  <ul>
                    <li>Vacinação BCG;</li>
                    <li>
                      O tratamento da Infecção Latente da Tuberculose (ILTB).
                    </li>
                  </ul>
                </DoencaTransmissivel>
                <DoencaTransmissivel cor="azul" nome="Malaria">
                  <ul>
                    <li>Uso de mosquiteiros;</li>
                    <li>Roupas que protejam pernas e braços; </li>
                    <li>Telas em portas e janelas; uso de repelentes;</li>
                    <li>Uso de repelentes</li>
                  </ul>
                </DoencaTransmissivel>
                <DoencaTransmissivel cor="laranja" nome="Hepatite B">
                  <ul>
                    <li>Vacinação;</li>
                    <li>Usar camisinha em todas as relações sexuais;</li>
                    <li>Não compartilhar objetos de uso pessoal.</li>
                  </ul>
                </DoencaTransmissivel>
                <DoencaTransmissivel cor="azul" nome="DTNs">
                  <ul>
                    <li>Vacinação;</li>
                    <li>Cuidado com hiegene pessoal; </li>
                    <li>Evitar contato com trasmissores;</li>
                    <li>
                      Evitar deixar ambientes propicios para o transmissor.
                    </li>
                  </ul>
                </DoencaTransmissivel>
                <DoencaTransmissivel
                  cor="laranja"
                  nome="Transmissíveis por Água"
                >
                  <ul>
                    <li>Beber água que tenha sido filtrada e/ou fervida;</li>
                    <li>Higienizar alimentos com água potável; </li>
                    <li>Não jogar lixo fora do lixo.</li>
                  </ul>
                </DoencaTransmissivel>
              </div>
            </section>
            <section className={styles.solitarioInformation}>
              <div>
                <h3>
                  O emprego de medidas de controle de infecção também faz parte
                  das ações de prevenção da doença, tais como:
                  <li>
                    manter ambientes bem ventilados e com entrada de luz solar;
                  </li>
                  <li>
                    proteger a boca com o antebraço ou com um lenço ao tossir e
                    espirrar (higiene da tosse);
                  </li>
                  <li>evitar aglomerações.</li>
                </h3>
                <a
                  href="https://www.gov.br/aids/pt-br/assuntos/tuberculose/prevencao"
                  target="_blank"
                  rel="noreferrer"
                >
                  Saiba Mais
                </a>
              </div>
            </section>
          </div>
        </section>
      </section> */}

      {/* <section className={styles.actionsSection}>
        <div className={styles.gridActions}>
          <div className={styles.bodyActions}>
            <h2>O que está sendo feito?</h2>

            <div className={styles.actions}>
              <Actions
                imagem={muqueDaMedica}
                link="https://www.scielo.br/j/csc/a/qQCnB7Fb4w6NwYQrHFzbmPL/"
              >
                Processo de reorganização e universalização de ações para várias
                doenças transmissíveis implementado pelo SUS.
              </Actions>
              <Actions
                imagem={helpHumanidade}
                link="https://bvsms.saude.gov.br/agir-agora-agir-juntos-investir-em-dtns-30-01-dia-mundial-das-doencas-tropicais-negligenciadas/"
              >
                “Agir agora. Agir juntos. Investir em DTNs”: 30/01 – Dia Mundial
                das Doenças Tropicais Negligenciadas
              </Actions>
              <Actions
                imagem={medicoTecnologico}
                link="https://www.bio.fiocruz.br/index.php/br/noticias/1936-sus-tera-novas-tecnologias-para-tuberculose"
              >
                SUS terá novas tecnologias para diagnóstico e tratamento da
                tuberculose
              </Actions>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default CopyTratamentoDoencasNaoTransmissiveis;
