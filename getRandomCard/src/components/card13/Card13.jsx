import React from "react";

import styles from "../card1/card1.module.css";
import img from "../../assets/secreto.jpg";
export const Card13 = () => {
  return (
    <>
      <div className={styles.card}>
        <img src={img} alt="card13" className={styles.card__img} />
        <h1 className={styles.card__title}>EL SECRETO DE SUS OJOS</h1>
        <p className={styles.card__description}>
          Un asesor legal jubilado escribe una novela con la esperanza de cerrar
          uno de sus antiguos casos de homicidio, que sigue sin resolver, y
          superar el amor no correspondido que sentía por su jefa. Décadas
          después, ambos recuerdos le siguen persiguiendo.
        </p>
        <div className={styles.card__footer}>
          <div className={styles.card__footer__item}>
            <h2 className={styles.item__title}>Ricardo Darín</h2>
            <p className={styles.item__subtitle}>Reparto</p>
          </div>
          <div className={styles.card__footer__item}>
            <h2 className={styles.item__title}>8,2/10</h2>
            <p className={styles.item__subtitle}>IMDB</p>
          </div>
          <div className={styles.card__footer__item}>
            <h2 className={styles.item__title}>2009</h2>
            <p className={styles.item__subtitle}>Estreno</p>
          </div>
        </div>
      </div>
    </>
  );
};
