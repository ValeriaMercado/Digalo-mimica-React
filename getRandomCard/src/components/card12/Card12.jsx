import React from "react";

import styles from "../card1/card1.module.css";
import img from "../../assets/atrapame.jpg";
export const Card12 = () => {
  return (
    <>
      <div className={styles.card}>
        <img src={img} alt="card12" className={styles.card__img} />
        <h1 className={styles.card__title}>ATRÁPAME SI PUEDES</h1>
        <p className={styles.card__description}>
          Con apenas 21 años, Frank es un hábil falsificador que se ha hecho
          pasar por médico, abogado y piloto. El agente del FBI Carl se
          obsesiona con seguir la pista del estafador, que disfruta con la
          persecución.
        </p>
        <div className={styles.card__footer}>
          <div className={styles.card__footer__item}>
            <h2 className={styles.item__title}>Leonardo DiCaprio</h2>
            <p className={styles.item__subtitle}>Reparto</p>
          </div>
          <div className={styles.card__footer__item}>
            <h2 className={styles.item__title}>8,1/10</h2>
            <p className={styles.item__subtitle}>IMDB</p>
          </div>
          <div className={styles.card__footer__item}>
            <h2 className={styles.item__title}>2002</h2>
            <p className={styles.item__subtitle}>Estreno</p>
          </div>
        </div>
      </div>
    </>
  );
};
