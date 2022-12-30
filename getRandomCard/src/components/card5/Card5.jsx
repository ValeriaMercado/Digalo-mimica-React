import React from "react";

import styles from "../card1/card1.module.css";
import img from "../../assets/5.jpg";
export const Card5 = () => {
  return (
    <>
      <div className={styles.card}>
        <img src={img} alt="card5" className={styles.card__img} />
        <h1 className={styles.card__title}>12 ANGRY MEN</h1>
        <p className={styles.card__description}>
          Un miembro del jurado trata de evitar un error judicial obligando al
          resto del jurado a reconsiderar las pruebas.
        </p>
        <div className={styles.card__footer}>
          <div className={styles.card__footer__item}>
            <h2 className={styles.item__title}>Henry Fonda</h2>
            <p className={styles.item__subtitle}>Reparto</p>
          </div>
          <div className={styles.card__footer__item}>
            <h2 className={styles.item__title}>9,0/10</h2>
            <p className={styles.item__subtitle}>IMDB</p>
          </div>
          <div className={styles.card__footer__item}>
            <h2 className={styles.item__title}>1957</h2>
            <p className={styles.item__subtitle}>Estreno</p>
          </div>
        </div>
      </div>
    </>
  );
};
