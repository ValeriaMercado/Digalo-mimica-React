import React from "react";
import styles from "../card1/card1.module.css";
import img from "../../assets/eldiadespues.jpeg";
export const Card3 = () => {
  return (
    <>
      <div className={styles.card}>
        <img src={img} alt="card3" className={styles.card__img} />
        <h1 className={styles.card__title}>EL DÍA DESPUÉS DE MAÑANA</h1>
        <p className={styles.card__description}>
          Jack Hall, paleoclimatólogo, debe realizar un arriesgado viaje desde
          Washington D. C. hasta Nueva York para llegar hasta su hijo, atrapado
          en una repentina tormenta internacional que sumerge al planeta en una
          nueva edad de hielo
        </p>
        <div className={styles.card__footer}>
          <div className={styles.card__footer__item}>
            <h2 className={styles.item__title}>Jake Gyllenhaal</h2>
            <p className={styles.item__subtitle}>Reparto</p>
          </div>
          <div className={styles.card__footer__item}>
            <h2 className={styles.item__title}>6,4/10</h2>
            <p className={styles.item__subtitle}>IMDB</p>
          </div>
          <div className={styles.card__footer__item}>
            <h2 className={styles.item__title}>2004</h2>
            <p className={styles.item__subtitle}>Estreno</p>
          </div>
        </div>
      </div>
    </>
  );
};
