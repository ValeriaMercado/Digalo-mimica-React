import React from "react";

import styles from "../card1/card1.module.css";
import img from "../../assets/6.jpg";
export const Card6 = () => {
  return (
    <>
      <div className={styles.card}>
        <img src={img} alt="card6" className={styles.card__img} />
        <h1 className={styles.card__title}>SCHINDLER'S LIST</h1>
        <p className={styles.card__description}>
          En la Polonia ocupada por los alemanes durante la Segunda Guerra
          Mundial, el industrial Oskar Schindler se preocupa por sus
          trabajadores judíos tras presenciar su persecución por los nazis.
        </p>
        <div className={styles.card__footer}>
          <div className={styles.card__footer__item}>
            <h2 className={styles.item__title}>Liam Neeson</h2>
            <p className={styles.item__subtitle}>Reparto</p>
          </div>
          <div className={styles.card__footer__item}>
            <h2 className={styles.item__title}>9,0/10</h2>
            <p className={styles.item__subtitle}>IMDB</p>
          </div>
          <div className={styles.card__footer__item}>
            <h2 className={styles.item__title}>1993</h2>
            <p className={styles.item__subtitle}>Estreno</p>
          </div>
        </div>
      </div>
    </>
  );
};
