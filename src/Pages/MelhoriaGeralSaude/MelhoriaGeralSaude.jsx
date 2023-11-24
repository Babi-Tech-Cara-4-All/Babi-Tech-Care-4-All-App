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
  const [textoVisivel, setTextoVisivel] = useState(
    "Reforçar a prevenção e o tratamento dos problemas decorrentes do uso de substâncias, incluindo o abuso de drogas entorpecentes e uso nocivo do álcool."
  );
  const [tituloAtivo, setTituloAtivo] = useState("ODS 3.5");

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
            <a
              href={imageLinks[currentImage]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={images[currentImage]} alt="" />
            </a>
            <button className={styles.botao1} onClick={nextImage}>
              next
            </button>
          </section>
          <section className={styles.imagensTextoContainer}>
            <h1>PODCASTS</h1>
            <section className={styles.imagensTextoGrid}>
              <a
                href="https://soundcloud.com/saudebrasil/o-que-o-cigarro-tem-a-ver-com-o-ganho-ou-perda-de-peso"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.imagensTexto1}
              >
                <p>O que cigarro tem a ver com ganho ou perda de peso?</p>
              </a>
              <a
                href="https://soundcloud.com/saudebrasil/como-se-beneficiar-da-alimentacao-saudavel"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.imagensTexto2}
              >
                <p>Como se beneficiar da alimentação saudável?</p>
              </a>
              <a
                href="https://soundcloud.com/saudebrasil/como-a-pratica-de-atividade-fisica-pode-melhorar-a-disposicao"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.imagensTexto3}
              >
                {" "}
                <p>Como a atividade física pode ajudar na disposição</p>
              </a>
              <a
                href="https://soundcloud.com/saudebrasil/aleitamento-materno-protege-contra-o-cancer-de-mama"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.imagensTexto4}
              >
                {" "}
                <p>Aleitamento materno protege contra o câncer de mama</p>
              </a>
              <a
                href="https://www.boaconsulta.com/blog/aplicativos-saude-bem-estar/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.imagensTexto5}
              >
                {" "}
                <p>Aplicativos de saúde que você precisa conhecer!</p>
              </a>
              <a
                href="https://soundcloud.com/saudebrasil/como-esta-sua-saude-mental-em-tempos-de-pandemia"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.imagensTexto6}
              >
                {" "}
                <p>
                  Como está sua saúde mental em tempos de pós - pandemia?
                </p>
              </a>
            </section>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MelhoriaGeralSaude;
