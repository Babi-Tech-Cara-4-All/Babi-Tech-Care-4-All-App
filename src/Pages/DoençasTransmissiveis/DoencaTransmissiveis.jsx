import styles from "./DoencaTransmissiveis.module.scss";
import Reason from "../../Components/Reason/Reason";
import DoencaTransmissivel from "../../Components/DoencaTransmissivel/DoencaTransmissivel";
import Botao from "../../Components/Botao/Botao";
import Actions from "../../Components/Actions/Actions";
import vacina from "../../assets/imgDoencasTransmissiveis/vacina.png";
import mascara from "../../assets/imgDoencasTransmissiveis/mascara.png";
import IconBacterias from "../../assets/imgDoencasTransmissiveis/IconBacterias.png";
import IconProtozoarios from "../../assets/imgDoencasTransmissiveis/IconProtozoarios.png";
import IconMetazoarios from "../../assets/imgDoencasTransmissiveis/IconMetazoarios.png";
import IconVirus from "../../assets/imgDoencasTransmissiveis/IconVirus.png";
import IconFungos from "../../assets/imgDoencasTransmissiveis/IconFungos.png";
import mulherFalando from "../../assets/imgDoencasTransmissiveis/mulherFalando.png";
import mapa from "../../assets/imgDoencasTransmissiveis/mapa.png";
import grafico from "../../assets/imgDoencasTransmissiveis/grafico.png";
import muqueDaMedica from "../../assets/imgDoencasTransmissiveis/muqueDaMedica.png";
import helpHumanidade from "../../assets/imgDoencasTransmissiveis/helpHumanidade.png";
import medicoTecnologico from "../../assets/imgDoencasTransmissiveis/medicoTecnologico.png";


const DoencaTransmissiveis = () => {
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
          <section className={styles.gridCausadores}>
            <h2>AGENTES CAUSADORES</h2>
            <div className={styles.gridCausadoresContainer}>
              <Reason
                icone={IconBacterias}
                texto="Bacterias"
                link="https://mundoeducacao.uol.com.br/amp/doencas/doencas-por-bacterias.htm"
              />
              <Reason
                icone={IconMetazoarios}
                texto="Metazoários"
                link="https://www.bio.fiocruz.br/index.php/br/esquistossomose-e-outras-doencas-parasitarias"
              />
              <Reason
                icone={IconVirus}
                texto="Vírus"
                link="https://m.brasilescola.uol.com.br/amp/doencas/doencas-causadas-virus.htm"
              />
              <Reason
                icone={IconFungos}
                texto="Fungos"
                link="https://www.tuasaude.com/doencas-causadas-por-fungos/"
              />
              <Reason
                icone={IconProtozoarios}
                texto="Protozoários"
                link="https://midia.atp.usp.br/plc/plc0501/impressos/plc0501_06.pdf"
              />
            </div>
          </section>
        </div>
      </div>
      <section className={styles.informationSection}>
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
      </section>

      <section className={styles.section2}>
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
      </section>

      <section className={styles.actionsSection}>
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
      </section>
    </div>
  );
};

export default DoencaTransmissiveis;
