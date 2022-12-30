import React from "react";
import styles from "../card1/card1.module.css";
import img from "../../assets/3.jpg";
export const Card3 = () => {
  return (
    <>
      <div className={styles.card}>
        <img src={img} alt="card3" className={styles.card__img} />
        <h1 className={styles.card__title}>THE DARK KNIGHT</h1>
        <p className={styles.card__description}>
          Cuando la amenaza conocida como el Joker causa estragos y el caos en
          Gotham City, Batman debe aceptar una de las mayores pruebas
          psicológicas y físicas para luchar contra la injusticia.
        </p>
        <div className={styles.card__footer}>
          <div className={styles.card__footer__item}>
            <h2 className={styles.item__title}>Christian Bale</h2>
            <p className={styles.item__subtitle}>Reparto</p>
          </div>
          <div className={styles.card__footer__item}>
            <h2 className={styles.item__title}>9,0/10</h2>
            <p className={styles.item__subtitle}>IMDB</p>
          </div>
          <div className={styles.card__footer__item}>
            <h2 className={styles.item__title}>2008</h2>
            <p className={styles.item__subtitle}>Estreno</p>
          </div>
        </div>
      </div>
    </>
  );
};
