import React from "react";

import styles from "../card1/card1.module.css";
import img from "../../assets/back_to_the_future.jpg";
export const Card4 = () => {
  return (
    <>
      <div className={styles.card}>
        <img src={img} alt="card4" className={styles.card__img} />
        <h1 className={styles.card__title}>VOLVER AL FUTURO</h1>
        <p className={styles.card__description}>
          Marty McFly, un estudiante de secundaria de 17 años, es enviado
          accidentalmente treinta años al pasado en un DeLorean que viaja en el
          tiempo, inventado por su gran amigo, el excéntrico científico Doc
          Brown.
        </p>
        <div className={styles.card__footer}>
          <div className={styles.card__footer__item}>
            <h2 className={styles.item__title}>Michael J. Fox</h2>
            <p className={styles.item__subtitle}>Reparto</p>
          </div>
          <div className={styles.card__footer__item}>
            <h2 className={styles.item__title}>8,5/10</h2>
            <p className={styles.item__subtitle}>IMDB</p>
          </div>
          <div className={styles.card__footer__item}>
            <h2 className={styles.item__title}>1985</h2>
            <p className={styles.item__subtitle}>Estreno</p>
          </div>
        </div>
      </div>
    </>
  );
};
