import React from "react";
import styles from "./Time.module.scss";
import MemberCard from "./MemberCard/MemberCard";
import lucia from "../../assets/imgHomePage/lucia.png";
import maria from "../../assets/imgHomePage/maria.png";
import thiago from "../../assets/imgHomePage/thiago.png";
import miguel from "../../assets/imgHomePage/miguel.png";

const Time = () => {
  return (
    <section className={styles.gridAreaTime}>
      <div className={styles.bodyPageTime}>
        <p id="time" className={styles.textBlueTime}>TIME</p>
        <h2 className={styles.sectionTitleTime}>
          Devs envolvidos no futuro da saúde
        </h2>
        <div className={styles.timeMembers}>
          <MemberCard
            img={lucia}
            nome="Lúcia Boutti"
            link="https://www.linkedin.com/in/lucyboutti/"
          />
          <MemberCard
            img={maria}
            nome="Maria Clara"
            link="https://www.linkedin.com/in/maria-clara-818710226/"
          />
          <MemberCard
            img={thiago}
            nome="Thiago Eiji"
            link="https://www.linkedin.com/in/thiago-eiji-matumoto/"
          />
          <MemberCard
            img={miguel}
            nome="Miguel Lima"
            link="https://www.linkedin.com/in/miguel-lima-259a371a2/"
          />
        </div>
      </div>
    </section>
  );
};

export default Time;
