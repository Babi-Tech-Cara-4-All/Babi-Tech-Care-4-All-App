import styles from './FlipCardKids.module.scss'
import kids from "../../assets/imgMortalidadeInfantil/kids.png";
import { useState } from 'react';


const FlipCardKids = () => {

  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`${styles.flip_container} ${isFlipped ? styles.flipped : ''}`}>
      <div className={styles.flipper} onClick={handleClick}>
        <div className={`${styles.front} ${isFlipped ? styles.hidden : ''}`}>
          <img src={kids} alt="kids" />
        </div>
        <div className={`${styles.back} ${isFlipped ? '' : styles.hidden}`}>
          <p>
            O Brasil vem avançando na redução da mortalidade infantil, mas ainda
            é preciso um grande esforço para enfrentar as diferenças regionais e
            alcançar patamares mais baixos.
          </p>
          <p>
            A mobilização não somente de todas as esferas de governo, mas de
            toda a sociedade e de cada cidadão é importante para consolidar essa
            redução, num movimento em defesa da vida.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlipCardKids;
