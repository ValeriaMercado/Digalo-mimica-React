import React from "react";

import styles from "../card1/card1.module.css";
import img from "../../assets/2.jpg";
export const Card2 = () => {
  return (
    <>
      <div className={styles.card}>
        <img src={img} alt="card2" className={styles.card__img} />
        <h1 className={styles.card__title}>THE GODFATHER</h1>
        <p className={styles.card__description}>
          El envejecido patriarca de una dinastía del crimen organizado en la
          ciudad de Nueva York de la posguerra transfiere el control de su
          imperio clandestino a su reacio hijo menor.
        </p>
        <div className={styles.card__footer}>
          <div className={styles.card__footer__item}>
            <h2 className={styles.item__title}>Marlon Brando</h2>
            <p className={styles.item__subtitle}>Reparto</p>
          </div>
          <div className={styles.card__footer__item}>
            <h2 className={styles.item__title}>9,2/10</h2>
            <p className={styles.item__subtitle}>IMDB</p>
          </div>
          <div className={styles.card__footer__item}>
            <h2 className={styles.item__title}>1972</h2>
            <p className={styles.item__subtitle}>Estreno</p>
          </div>
        </div>
      </div>
    </>
  );
};
