import React from "react";

import styles from "../card1/card1.module.css";
import img from "../../assets/7.jpg";
export const Card7 = () => {
  return (
    <>
      <div className={styles.card}>
        <img src={img} alt="card7" className={styles.card__img} />
        <h1 className={styles.card__title}>
          THE LORD OF THE RINGS: THE RETURN OF THE KING
        </h1>
        <p className={styles.card__description}>
          Gandalf y Aragorn lideran el mundo de los hombres contra la armada de
          Sauron para distraer su atención de Frodo y Sam, quienes se aproximan
          al Monte del Destino con el Anillo Único.
        </p>
        <div className={styles.card__footer}>
          <div className={styles.card__footer__item}>
            <h2 className={styles.item__title}>Elijah Wood</h2>
            <p className={styles.item__subtitle}>Reparto</p>
          </div>
          <div className={styles.card__footer__item}>
            <h2 className={styles.item__title}>9,0/10</h2>
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
