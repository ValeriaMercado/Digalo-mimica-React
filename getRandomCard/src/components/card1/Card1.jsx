import React from "react";

import styles from "./card1.module.css";
import img from "../../assets/1.jpg";
export const Card1 = () => {
  return (
    <>
      <div className={styles.card}>
        <img src={img} alt="card1" className={styles.card__img} />
        <h1 className={styles.card__title}>THE SHAWSHANK REDEMPTION</h1>
        <p className={styles.card__description}>
          Andy Dufresne es encarcelado por matar a su esposa y al amante de
          esta. Tras una dura adaptación, intenta mejorar las condiciones de la
          prisión y dar esperanza a sus compañeros.
        </p>
        <div className={styles.card__footer}>
          <div className={styles.card__footer__item}>
            <h2 className={styles.item__title}>Tim Robbins</h2>
            <p className={styles.item__subtitle}>Reparto</p>
          </div>
          <div className={styles.card__footer__item}>
            <h2 className={styles.item__title}>9,3/10</h2>

            <p className={styles.item__subtitle}>IMDB</p>
          </div>
          <div className={styles.card__footer__item}>
            <h2 className={styles.item__title}>1994</h2>
            <p className={styles.item__subtitle}>Estreno</p>
          </div>
        </div>
      </div>
    </>
  );
};
