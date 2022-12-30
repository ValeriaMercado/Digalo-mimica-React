import React from "react";

import styles from "../card1/card1.module.css";
import img from "../../assets/4.jpg";
export const Card4 = () => {
  return (
    <>
      <div className={styles.card}>
        <img src={img} alt="card4" className={styles.card__img} />
        <h1 className={styles.card__title}>THE GODFATHER PART II</h1>
        <p className={styles.card__description}>
          Se retratan los inicios de la vida y la carrera de Vito Corleone en el
          Nueva York de los años 20, mientras su hijo, Michael, amplía y
          refuerza su control sobre el sindicato del crimen familiar.
        </p>
        <div className={styles.card__footer}>
          <div className={styles.card__footer__item}>
            <h2 className={styles.item__title}>Al Pacino</h2>
            <p className={styles.item__subtitle}>Reparto</p>
          </div>
          <div className={styles.card__footer__item}>
            <h2 className={styles.item__title}>9,0/10</h2>
            <p className={styles.item__subtitle}>IMDB</p>
          </div>
          <div className={styles.card__footer__item}>
            <h2 className={styles.item__title}>1974</h2>
            <p className={styles.item__subtitle}>Estreno</p>
          </div>
        </div>
      </div>
    </>
  );
};
