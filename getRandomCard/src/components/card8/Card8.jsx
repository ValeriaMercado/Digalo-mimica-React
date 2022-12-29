import React from "react";

import styles from "../card1/card1.module.css";
import img from "../../assets/sonniños.jpg";
export const Card8 = () => {
  return (
    <>
      <div className={styles.card}>
        <img src={img} alt="card8" className={styles.card__img} />
        <h1 className={styles.card__title}>SON COMO NIÑOS</h1>
        <p className={styles.card__description}>
          Después de la muerte de su entrenador de baloncesto de la escuela
          secundaria, cinco buenos amigos y ex compañeros de equipo se reúnen
          para un fin de semana de vacaciones del 4 de julio.
        </p>
        <div className={styles.card__footer}>
          <div className={styles.card__footer__item}>
            <h2 className={styles.item__title}>Adam Sandler</h2>
            <p className={styles.item__subtitle}>Reparto</p>
          </div>
          <div className={styles.card__footer__item}>
            <h2 className={styles.item__title}>5,9/10</h2>
            <p className={styles.item__subtitle}>IMDB</p>
          </div>
          <div className={styles.card__footer__item}>
            <h2 className={styles.item__title}>2010</h2>
            <p className={styles.item__subtitle}>Estreno</p>
          </div>
        </div>
      </div>
    </>
  );
};
