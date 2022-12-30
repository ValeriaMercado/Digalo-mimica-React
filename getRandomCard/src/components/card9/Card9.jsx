import React from "react";

import styles from "../card1/card1.module.css";
import img from "../../assets/9.jpg";
export const Card9 = () => {
  return (
    <>
      <div className={styles.card}>
        <img src={img} alt="card9" className={styles.card__img} />
        <h1 className={styles.card__title}>
          THE LORD OF THE RINGS: THE FELLOWSHIP OF THE RING
        </h1>
        <p className={styles.card__description}>
          Un hobbit de la Comarca y ocho compañeros emprenden un viaje para
          destruir el poderoso Anillo Único y salvar la Tierra Media del Señor
          Oscuro Sauron.
        </p>
        <div className={styles.card__footer}>
          <div className={styles.card__footer__item}>
            <h2 className={styles.item__title}>Elijan Wood</h2>
            <p className={styles.item__subtitle}>Reparto</p>
          </div>
          <div className={styles.card__footer__item}>
            <h2 className={styles.item__title}>8,8/10</h2>
            <p className={styles.item__subtitle}>IMDB</p>
          </div>
          <div className={styles.card__footer__item}>
            <h2 className={styles.item__title}>2001</h2>
            <p className={styles.item__subtitle}>Estreno</p>
          </div>
        </div>
      </div>
    </>
  );
};
