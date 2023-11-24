import styles from './TratamentoDoencasNaoTransmissiveis.module.scss';
import Banner1 from "../../assets/imgTratamentoDoencasNaoTransmissiveis/Banner1.png";
import imgAbs from "../../assets/imgTratamentoDoencasNaoTransmissiveis/imgAbs.png";
import imgRela from "../../assets/imgTratamentoDoencasNaoTransmissiveis/imgRela.png";
import mulher from "../../assets/imgTratamentoDoencasNaoTransmissiveis/mulher.png";
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
const TratamentoDoencasNaoTransmissiveis = () => {
  return (
    <div className={styles.TratamentoDoencasNaoTransmissiveisContainer}>

      <div className={styles.bannerContainer}>

        <img src={Banner1} alt="Banner"/>

        <div className={styles.tituloBanner}>Segundo o Ministério da Saúde, 57,4 milhões dos brasileiros possui ao menos uma <br></br>das doenças crônicas não transmissíveis (DCNT)</div>

      </div>

      <div className={styles.odsContainer}>

        <div className={styles.odsImages}>
          <img className={styles.imgabs} src={imgAbs} alt="abs"></img>
          <img className={styles.imgRela} src={imgRela} alt='rela'></img>
        </div>

        <div className={styles.odsText}>
          <h1>ODS 3.4 DA ONU</h1>
          <h3>Até 2030, reduzir em um terço a mortalidade prematura por doenças não transmissíveis via prevenção e tratamento, promover a saúde mental e o bem-estar, a saúde do trabalhador e da trabalhadora, e prevenir o suicídio, alterando significativamente a tendência de aumento.</h3>
        </div>

      </div>


      <div className={styles.info1}>
        <div className={styles.Tituloinfo1}>o que é uma doença crônica?</div>

        <div className={styles.divinfo1}>

        <img className={styles.mulher} src={mulher} alt="mulher apontando"/>
          <div className={styles.txtinfo1}><h2>As doenças crônicas são aquelas que apresentam início gradual, com duração longa ou incerta, que, em geral, apresentam múltiplas causas e cujo tratamento envolva mudanças de estilo de vida, em um processo de cuidado contínuo.</h2></div>
        </div>
        
        <div className={styles.circulo}></div>
      </div>

      <div className={styles.grafContainer}>

        <div className={styles.grafPizza}>
        <img className={styles.imgGrafPizza} src={grafpizza} alt="grafico de pizza"/>
        <p>69% das mortes ocorridas no Brasil em 2016 <br /> foram por doenças crônicas não <br /> transmissíveis.</p>
        </div>

        <div className={styles.info2}><p>Maior alerta é na faixa de 30 a 69 anos, quando maioria das mortes são consideradas evitáveis</p></div>

        

        <div className={styles.grafLinha}>

        <img className={styles.imggrafLinha} src={graflinha} alt="grafico de Linha"/>

        </div>
      </div>

      <div className={styles.boxDoencas}>
        <div><h2 className={styles.txtDoencas}>AGENTES CAUSADORES</h2></div>

        <div className={styles.Doencas}>
        <div className={styles.blockIcons}>
          <div>
            <img src={diabetes} alt="diabetes" />
          </div>
          <div>
            <h3>Diabetes</h3>
          </div>
        </div>

        <div className={styles.blockIcons}>
          <div>
            <img src={mentais} alt="Metazoários" />
          </div>
          <div>
            <h3>Condições Mentais <br /> e Neurológicas</h3>
          </div>
        </div>


        <div className={styles.blockIcons}>
          <div>
            <img src={cardio} alt="Vírus" />
          </div>
          <div>
            <h3>Doenças <br />Cardiovasculares</h3>
          </div>
        </div>

        <div className={styles.blockIcons}>
          <div>
            <img src={respiratorias} alt="Fungos" />
          </div>
          <div>
            <h3>Doenças <br />Respiratórias</h3>
          </div>
        </div>



        <div className={styles.blockIcons}>
          <div>
            <img src={cancer} alt="Protozoários" />
          </div>
          <div>
            <h3>Câncer</h3>
          </div>
        </div>

        </div>
      </div>

      <div className={styles.boxDoencas}>
        <div><h2 className={styles.txtDoencas}>FATORES DE RISCO</h2></div>

        <div className={styles.Doencas}>
        <div className={styles.blockIcons}>
          <div>
            <img src={alimentacao} alt="Alimentação inadequada" />
          </div>
          <div>
            <h3>Alimentação <br /> inadequada</h3>
          </div>
        </div>

        <div className={styles.blockIcons}>
          <div>
            <img src={alcool} alt="Alcolimso" />
          </div>
          <div>
            <h3>Uso Abusivo <br /> de álcool</h3>
          </div>
        </div>


        <div className={styles.blockIcons}>
          <div>
            <img src={poluicao} alt="Poluição do ar" />
          </div>
          <div>
            <h3>Poluição <br />Do ar</h3>
          </div>
        </div>

        <div className={styles.blockIcons}>
          <div>
            <img src={tabagismo} alt="Tabagismo" />
          </div>
          <div>
            <h3>Tabagismo</h3>
          </div>
        </div>



        <div className={styles.blockIcons}>
          <div>
            <img src={sedentarismo} alt="Sedentarismo" />
          </div>
          <div>
            <h3>Sedentarismo</h3>
          </div>
        </div>

        </div>
      </div>

      <div className={styles.boxInfo3}>

        <div className={styles.tituloInfo3}> <p>O Bem-Estar</p></div>

          <div className={styles.box1}>

            <div className={styles.box1txt}><p>Conforme a Organização Mundial da Saúde, a definição que temos sobre <br />saúde é “um estado de completo bem-estar físico, mental e social, e não <br />apenas a ausência de doenças”</p></div>

          </div>

        <div className={styles.bloco1}>
          <div className={styles.linha}><p>Físico</p></div>
          <div className={styles.txtbloco1}>Se refere a condição, ausência de doenças associada a um bom metabolismo.</div>
        </div>

        <div className={styles.bloco2}>
          <div className={styles.linha}><p>Econômico</p></div>
          <div className={styles.txtbloco1}>Está relacionado a condições <br /> monetárias.</div>
        </div>

        <div className={styles.bloco3}>
          <div className={styles.linha}><p>Social</p></div>
          <div className={styles.txtbloco1}>Relacionado a qualidade de vida, envolvendo relações, prazer, liberdade e saúde ambiental.</div>
        </div>

        <div className={styles.bloco4}>
          <div className={styles.linha}><p>Mental</p></div>
          <div className={styles.txtbloco1}>É o equilíbrio de sentimentos e <br />emoções e o  <br />controle sobre eles.</div>
        </div>

      </div>


      <div className={styles.boxinfo4}>
        
        <div className={styles.tituloinfo4}><p>Superheroína: A Tecnologia!</p></div>
        <img className={styles.relogio} src={relogio} alt="relogio"/>
        <div className={styles.info4txt}><p>+ monitoramento da própria saúde <br /> + alimentação saudável <br /> + exercícios <br />  + registros de condições <br />  <h4> = Prevenção de doenças e melhoria no tratamento e cuidado!</h4></p></div>
      </div>
         

    </div>
  );
}

export default TratamentoDoencasNaoTransmissiveis