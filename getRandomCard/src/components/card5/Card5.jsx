import React from "react";

import styles from "../card1/card1.module.css";
import img from "../../assets/moda.jpg";
export const Card5 = () => {
  return (
    <>
      <div className={styles.card}>
        <img src={img} alt="card5" className={styles.card__img} />
        <h1 className={styles.card__title}>EL DIABLO VISTE A LA MODA</h1>
        <p className={styles.card__description}>
          Una inteligente pero sensata recién graduada consigue un trabajo como
          asistente de Miranda Priestly, la exigente editora jefe de una revista
          de alta costura.
        </p>
        <div className={styles.card__footer}>
          <div className={styles.card__footer__item}>
            <h2 className={styles.item__title}>Anne Hathaway</h2>
            <p className={styles.item__subtitle}>Reparto</p>
          </div>
          <div className={styles.card__footer__item}>
            <h2 className={styles.item__title}>6,9/10</h2>
            <p className={styles.item__subtitle}>IMDB</p>
          </div>
          <div className={styles.card__footer__item}>
            <h2 className={styles.item__title}>2006</h2>
            <p className={styles.item__subtitle}>Estreno</p>
          </div>
        </div>
      </div>
    </>
  );
};
