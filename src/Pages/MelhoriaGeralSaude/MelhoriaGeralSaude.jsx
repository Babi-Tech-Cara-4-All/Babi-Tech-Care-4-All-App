import styles from './MelhoriaGeralSaude.module.scss';
import Banner1 from "../../assets/imgMelhoria/Banner1.png";
import ODS3 from "../../assets/imgMelhoria/ODS3.png";
import c1 from "../../assets/imgMelhoria/c1.png";
import i1 from "../../assets/imgMelhoria/i1.png";
import i2 from "../../assets/imgMelhoria/i2.png";
import i3 from "../../assets/imgMelhoria/i3.png";
import i4 from "../../assets/imgMelhoria/i4.png";
import i5 from "../../assets/imgMelhoria/i5.png";
import i6 from "../../assets/imgMelhoria/i6.png";
import info2 from "../../assets/imgMelhoria/info2.png";

const MelhoriaGeralSaude = () => {
  return (
    <div>

      <div className={styles.bannerContainer}>

        <img src={Banner1} alt="Banner"/>

        <div className={styles.tituloBanner}>Em busca do bem-estar global, a promoção da saúde emerge como um pilar <br /> fundamental, alinhando-se a ODS 3, que visa assegurar uma vida saudável e  <br />promover o bem-estar para todos, em todas as idades.</div>

      </div>

      <div className={styles.ContainerOds}>

        <div className={styles.botoesOds}>

          <div className={styles.btn35}>ODS 3.5</div>

          <div className={styles.btn36}>ODS 3.6</div>

          <div className={styles.btn37}>ODS 3.7</div>

          <div className={styles.btn38}>ODS 3.8</div>
          
          <div className={styles.btn39}>ODS 3.9</div>

        </div>

       </div>


       <div className={styles.ods3}>
        <img src={ODS3} alt="Banner"/>
        </div>

        <div className={styles.txtods}><p>Reforçar a prevenção e o tratamento dos problemas decorrentes do uso de substâncias, incluindo o abuso de drogas entorpecentes e uso nocivo do álcool.</p></div>


      <div className={styles.c1}>
       <img src={c1} alt="c1"/>
      </div>

      <div className={styles.txtpodcast}>PODCASTS</div>
      <hr className={styles.hr} />

      <div className={styles.Containerpodcast1}>
        <div className={styles.i1}>
          <a href="https://soundcloud.com/saudebrasil/o-que-o-cigarro-tem-a-ver-com-o-ganho-ou-perda-de-peso" target="_blank" ><img src={i1} alt="i1"/></a>
          <p className={styles.txtpPodcast}>O que cigarro tem a ver com ganho ou perda de peso?</p>
        </div>

        <div className={styles.i2}>
          <a href="https://soundcloud.com/saudebrasil/como-se-beneficiar-da-alimentacao-saudavel" target="_blank" ><img src={i2} alt="i2"/></a>
          <p className={styles.txtpPodcast}>Como se beneficiar da alimentação saudável?</p>
        </div>

        <div className={styles.i3}>
          <a href="https://soundcloud.com/saudebrasil/como-a-pratica-de-atividade-fisica-pode-melhorar-a-disposicao" target="_blank"><img src={i3} alt="i3"/></a>
          <p className={styles.txtpPodcast}>Como a atividade física pode ajudar na disposição</p>
        </div>
      </div>

      <div className={styles.Containerpodcast2}>
        <div className={styles.i4}>
          <a href="https://soundcloud.com/saudebrasil/aleitamento-materno-protege-contra-o-cancer-de-mama" target="_blank"><img src={i4} alt="i4"/></a>
          <p className={styles.txtpPodcast}>Aleitamento materno protege contra o câncer de mama</p>
        </div>

        <div className={styles.i5}>
          <a href="https://www.boaconsulta.com/blog/aplicativos-saude-bem-estar/" target="_blank"><img src={i5} alt="i5"/></a>
          <p className={styles.txtpPodcast}>Aplicativos de saúde que você precisa conhecer!</p>
        </div>

        <div className={styles.i6}>
          <a href="https://soundcloud.com/saudebrasil/como-esta-sua-saude-mental-em-tempos-de-pandemia" target="_blank"><img src={i6} alt="i6"/></a>
          <p className={styles.txtpPodcast}>Como está sua saúde mental em tempos de pós - pandemia?</p>
        </div>
      </div>

      <div className={styles.info2}>




        <div className={styles.imginfo2}>
          <img src={info2} alt="info2"/>
        </div>

        <div className={styles.quadrocinza}>
          
          <div className={styles.quadroinfo1}> <p>O King’s Fund descreve esse modo de pensar sobre a saúde da população como um “sistema de saúde da população”, no qual os quatro pilares estão interconectados e a ação é coordenada entre eles, e não dentro de cada um, isoladamente.</p></div>

          <div className={styles.quadroinfo2}><p>Melhorar a saúde da população requer ação em todos os quatro pilares dela e, crucialmente, nas interfaces e sobreposições entre eles.</p></div>

        </div>



      </div>
       
        <div className={styles.circulo1}> </div>

        <div className={styles.circulo2}> </div>
      

    </div>
  )
}

export default MelhoriaGeralSaude