import { useState } from "react";
import { FaImdb } from "react-icons/fa";
import { CardContainer } from "../cardContainer";
import styles from "./app.module.css";

export const App = () => {
  const [buttonResult, setButtonResult] = useState(4);
  const pressButton = () => {
    let number = parseInt(Math.random() * (11 - 1) + 1);
    setButtonResult(number);
  };

  return (
    <>
      <div className={styles.title__container}>
        <div className={styles.movie__container}>
          <h1 className={styles.title}>¡BIENVENIDOS!</h1>
          <h1 className={styles.titles}>
            TOP 10 DE LAS MEJORES PELÍCULAS DE TODOS LOS TIEMPOS SEGÚN
            <FaImdb className={styles.movie__icon} />
          </h1>
        </div>
      </div>
      <button className={styles.button} onClick={pressButton}>
        ¡CLICK!
      </button>
      <div className={styles.card__result__container}>
        <h2 className={styles.card__result__title}>PUESTO N° {buttonResult}</h2>
        <div className={styles.card__container}>
          <CardContainer card={buttonResult} />
        </div>
      </div>
    </>
  );
};
