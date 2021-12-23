import { useContext } from "react";
import { CountdownContext } from "../context/CountdownContext";
import styles from "../styles/components/Counterdown.module.css";

export function Counterdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    resetCountDown,
    startCountDown,
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  return (
    <div>
      <div className={styles.container}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled className={styles.buttonStart}>
          Ciclo encerrado
          <img src="/vector.svg" alt="Checked" />
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              className={`${styles.buttonStart} ${styles.buttonStartActive}`}
              onClick={resetCountDown}
            >
              Abadonar ciclo
            </button>
          ) : (
            <button
              type="button"
              className={styles.buttonStart}
              onClick={startCountDown}
            >
              Iniciar um clico
            </button>
          )}
        </>
      )}
    </div>
  );
}
