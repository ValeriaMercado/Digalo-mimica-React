import React from "react";

import styles from "../card1/card1.module.css";
import img from "../../assets/perder10dias.jpg";
export const Card10 = () => {
  return (
    <>
      <div className={styles.card}>
        <img src={img} alt="card10" className={styles.card__img} />
        <h1 className={styles.card__title}>
          CÓMO PERDER A UN HOMBRE EN 10 DÍAS
        </h1>
        <p className={styles.card__description}>
          Benjamin Barry es un ejecutivo de publicidad y donjuán que, para
          conseguir una gran campaña, apuesta a que puede hacer que una mujer se
          enamore de él en 10 días.
        </p>
        <div className={styles.card__footer}>
          <div className={styles.card__footer__item}>
            <h2 className={styles.item__title}>Kate Hudson</h2>
            <p className={styles.item__subtitle}>Reparto</p>
          </div>
          <div className={styles.card__footer__item}>
            <h2 className={styles.item__title}>6,4/10</h2>
            <p className={styles.item__subtitle}>IMDB</p>
          </div>
          <div className={styles.card__footer__item}>
            <h2 className={styles.item__title}>2003</h2>
            <p className={styles.item__subtitle}>Estreno</p>
          </div>
        </div>
      </div>
    </>
  );
};
