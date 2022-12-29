import React from "react";

import styles from "../card1/card1.module.css";
import img from "../../assets/perfume.jpeg";
export const Card11 = () => {
  return (
    <>
      <div className={styles.card}>
        <img src={img} alt="card11" className={styles.card__img} />
        <h1 className={styles.card__title}>PERFUME DE MUJER</h1>
        <p className={styles.card__description}>
          Un estudiante de bachillerato que necesita dinero accede a "cuidar" a
          un ciego, pero el trabajo no es en absoluto lo que él esperaba.
        </p>
        <div className={styles.card__footer}>
          <div className={styles.card__footer__item}>
            <h2 className={styles.item__title}>Al Pacino</h2>
            <p className={styles.item__subtitle}>Reparto</p>
          </div>
          <div className={styles.card__footer__item}>
            <h2 className={styles.item__title}>8,0/10</h2>
            <p className={styles.item__subtitle}>IMDB</p>
          </div>
          <div className={styles.card__footer__item}>
            <h2 className={styles.item__title}>1992</h2>
            <p className={styles.item__subtitle}>Estreno</p>
          </div>
        </div>
      </div>
    </>
  );
};
