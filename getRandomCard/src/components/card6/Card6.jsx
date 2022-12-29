import React from "react";

import styles from "../card1/card1.module.css";
import img from "../../assets/rapidofurioso.jpg";
export const Card6 = () => {
  return (
    <>
      <div className={styles.card}>
        <img src={img} alt="card6" className={styles.card__img} />
        <h1 className={styles.card__title}>RÁPIDO Y FURIOSO</h1>
        <p className={styles.card__description}>
          El oficial de policía de Los Ángeles Brian O'Conner debe decidir dónde
          está realmente su lealtad cuando se enamora del mundo de las carreras
          callejeras que ha sido enviado a destruir.
        </p>
        <div className={styles.card__footer}>
          <div className={styles.card__footer__item}>
            <h2 className={styles.item__title}>Vin Diesel</h2>
            <p className={styles.item__subtitle}>Reparto</p>
          </div>
          <div className={styles.card__footer__item}>
            <h2 className={styles.item__title}>6,8/10</h2>
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
