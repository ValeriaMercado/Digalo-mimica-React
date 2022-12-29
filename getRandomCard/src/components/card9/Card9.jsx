import React from "react";

import styles from "../card1/card1.module.css";
import img from "../../assets/jamas.jpeg";
export const Card9 = () => {
  return (
    <>
      <div className={styles.card}>
        <img src={img} alt="card9" className={styles.card__img} />
        <h1 className={styles.card__title}>JAMÁS BESADA</h1>
        <p className={styles.card__description}>
          Una periodista se inscribe en un instituto de secundaria para
          investigar una historia y acaba enamorándose de uno de los profesores.
        </p>
        <div className={styles.card__footer}>
          <div className={styles.card__footer__item}>
            <h2 className={styles.item__title}>Drew Barrymore</h2>
            <p className={styles.item__subtitle}>Reparto</p>
          </div>
          <div className={styles.card__footer__item}>
            <h2 className={styles.item__title}>6,0/10</h2>
            <p className={styles.item__subtitle}>IMDB</p>
          </div>
          <div className={styles.card__footer__item}>
            <h2 className={styles.item__title}>1999</h2>
            <p className={styles.item__subtitle}>Estreno</p>
          </div>
        </div>
      </div>
    </>
  );
};
