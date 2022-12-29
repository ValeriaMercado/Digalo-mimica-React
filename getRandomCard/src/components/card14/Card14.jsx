import React from "react";

import styles from "../card1/card1.module.css";
import img from "../../assets/abogado.jpg";
export const Card14 = () => {
  return (
    <>
      <div className={styles.card}>
        <img src={img} alt="card14" className={styles.card__img} />
        <h1 className={styles.card__title}>EL ABOGADO DEL DIABLO</h1>
        <p className={styles.card__description}>
          A un abogado de Florida, excepcionalmente hábil, le ofrecen un trabajo
          en un bufete neoyorquino de alto nivel con un jefe de alto nivel: la
          mayor oportunidad de su carrera hasta la fecha.
        </p>
        <div className={styles.card__footer}>
          <div className={styles.card__footer__item}>
            <h2 className={styles.item__title}>Keanu Reeves</h2>
            <p className={styles.item__subtitle}>Reparto</p>
          </div>
          <div className={styles.card__footer__item}>
            <h2 className={styles.item__title}>7,5/10</h2>
            <p className={styles.item__subtitle}>IMDB</p>
          </div>
          <div className={styles.card__footer__item}>
            <h2 className={styles.item__title}>1997</h2>
            <p className={styles.item__subtitle}>Estreno</p>
          </div>
        </div>
      </div>
    </>
  );
};
