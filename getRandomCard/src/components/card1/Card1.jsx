import React from "react";

import styles from "./card1.module.css";
import img from "../../assets/elplanetasimios.jpg";
export const Card1 = () => {
  return (
    <>
      <div className={styles.card}>
        <img src={img} alt="card1" className={styles.card__img} />
        <h1 className={styles.card__title}>EL PLANETA DE LOS SIMIOS</h1>
        <p className={styles.card__description}>
          En 2029, un astronauta se estrella en un misterioso planeta donde
          simios parlantes evolucionados dominan a una raza de humanos
          primitivos.
        </p>
        <div className={styles.card__footer}>
          <div className={styles.card__footer__item}>
            <h2 className={styles.item__title}>TIM BURTON</h2>
            <p className={styles.item__subtitle}>Dirección</p>
          </div>
          <div className={styles.card__footer__item}>
            <h2 className={styles.item__title}>5,7/10</h2>
            <p className={styles.item__subtitle}>IMDB</p>
          </div>
          <div className={styles.card__footer__item}>
            <h2 className={styles.item__title}>2021</h2>
            <p className={styles.item__subtitle}>Estreno</p>
          </div>
        </div>
      </div>
    </>
  );
};
