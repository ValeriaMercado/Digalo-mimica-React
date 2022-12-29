import React from "react";

import styles from "../card1/card1.module.css";
import img from "../../assets/12años.jpg";
export const Card7 = () => {
  return (
    <>
      <div className={styles.card}>
        <img src={img} alt="card7" className={styles.card__img} />
        <h1 className={styles.card__title}>12 AÑOS DE ESCLAVITUD</h1>
        <p className={styles.card__description}>
          En los EEUU antes de la guerra, Solomon Northup, un hombre negro libre
          del estado de Nueva York, es secuestrado y vendido como esclavo.
        </p>
        <div className={styles.card__footer}>
          <div className={styles.card__footer__item}>
            <h2 className={styles.item__title}>Chiwetel Ejiofor</h2>
            <p className={styles.item__subtitle}>Reparto</p>
          </div>
          <div className={styles.card__footer__item}>
            <h2 className={styles.item__title}>8,1/10</h2>
            <p className={styles.item__subtitle}>IMDB</p>
          </div>
          <div className={styles.card__footer__item}>
            <h2 className={styles.item__title}>2013</h2>
            <p className={styles.item__subtitle}>Estreno</p>
          </div>
        </div>
      </div>
    </>
  );
};
