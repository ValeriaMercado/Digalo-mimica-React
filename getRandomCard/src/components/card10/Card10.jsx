import React from "react";

import styles from "../card1/card1.module.css";
import img from "../../assets/10.jpeg";
export const Card10 = () => {
  return (
    <>
      <div className={styles.card}>
        <img src={img} alt="card10" className={styles.card__img} />
        <h1 className={styles.card__title}>THE GOOD, THE BAD AND THE UGLY</h1>
        <p className={styles.card__description}>
          Durante la Guerra de Secesión, tres cazarrecompensas se lanzan a la
          búsqueda de un tesoro que ninguno puede localizar sin la ayuda de los
          otros dos.
        </p>
        <div className={styles.card__footer}>
          <div className={styles.card__footer__item}>
            <h2 className={styles.item__title}> Clint Eastwood</h2>
            <p className={styles.item__subtitle}>Reparto</p>
          </div>
          <div className={styles.card__footer__item}>
            <h2 className={styles.item__title}>8,8/10</h2>
            <p className={styles.item__subtitle}>IMDB</p>
          </div>
          <div className={styles.card__footer__item}>
            <h2 className={styles.item__title}>1966</h2>
            <p className={styles.item__subtitle}>Estreno</p>
          </div>
        </div>
      </div>
    </>
  );
};
