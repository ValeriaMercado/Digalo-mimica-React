import { useState } from "react";
import { MdMovieFilter } from "react-icons/md";
import { CardContainer } from "../cardContainer";
import styles from "./app.module.css";

export const App = () => {
  const [buttonResult, setButtonResult] = useState(4);
  const pressButton = () => {
    let number = parseInt(Math.random() * (16 - 1) + 1);
    setButtonResult(number);
  };

  return (
    <>
      <div className={styles.title__container}>
        <div className={styles.movie__container}></div>
        <MdMovieFilter className={styles.movie__icon} />
        <div>
          <h1 className={styles.title}>¡DÍGALO CON MÍMICA!</h1>
          <h1 className={styles.title}>
            ¡HAZ CLICK EN EL BOTÓN Y OBTENÉ UNA PELÍCULA!
          </h1>
        </div>
        <div className={styles.movie__icon}>
          <MdMovieFilter />
        </div>
      </div>
      <button className={styles.button} onClick={pressButton}>
        ¡CLICK AQUÍ!
      </button>
      <div className={styles.card__result__container}>
        <h2 className={styles.card__result__title}>Y LA PELÍCULA ES...</h2>
        <div className={styles.card__container}>
          <CardContainer card={buttonResult} />
        </div>
      </div>
    </>
  );
};
