import React from "react";

import styles from "../card1/card1.module.css";
import img from "../../assets/8.jpg";
export const Card8 = () => {
  return (
    <>
      <div className={styles.card}>
        <img src={img} alt="card8" className={styles.card__img} />
        <h1 className={styles.card__title}>PULP FICTION</h1>
        <p className={styles.card__description}>
          Las vidas de dos mafiosos, un boxeador, la esposa de un gánster y un
          par de bandidos se entrelazan en cuatro historias de violencia y
          redención.
        </p>
        <div className={styles.card__footer}>
          <div className={styles.card__footer__item}>
            <h2 className={styles.item__title}>John Travolta</h2>
            <p className={styles.item__subtitle}>Reparto</p>
          </div>
          <div className={styles.card__footer__item}>
            <h2 className={styles.item__title}>8,9/10</h2>
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
