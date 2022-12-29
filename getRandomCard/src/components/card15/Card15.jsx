import React from "react";

import styles from "../card1/card1.module.css";
import img from "../../assets/clubpelea.jpg";
export const Card15 = () => {
  return (
    <>
      <div className={styles.card}>
        <img src={img} alt="card14" className={styles.card__img} />
        <h1 className={styles.card__title}>EL CLUB DE LA PELEA</h1>
        <p className={styles.card__description}>
          Un oficinista insomne y un desentendido fabricante de jabones forman
          un club de lucha clandestino que se convierte en mucho más.
        </p>
        <div className={styles.card__footer}>
          <div className={styles.card__footer__item}>
            <h2 className={styles.item__title}>Brad Pitt</h2>
            <p className={styles.item__subtitle}>Reparto</p>
          </div>
          <div className={styles.card__footer__item}>
            <h2 className={styles.item__title}>8,8/10</h2>
            <p className={styles.item__subtitle}>IMDB</p>
          </div>
          <div className={styles.card__footer__item}>
            <h2 className={styles.item__title}>1999</h2>
            <p className={styles.item__subtitle}>Estreno</p>
          </div>
        </div>
      </div>
    </>
  );
};
