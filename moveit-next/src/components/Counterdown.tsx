import { useContext, useEffect, useState } from "react";
import { challengesContext } from "../context/ChallengesContext";
import styles from "../styles/components/Counterdown.module.css";

let countedownTimeout: NodeJS.Timeout;

export function Counterdown() {
  const { startNewChallenge } = useContext(challengesContext);

  const [time, setTime] = useState(0.1 * 60); //tempo de execução do circlo do botao
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  function startCountDown() {
    setIsActive(true);
  }
  function resetCountDown() {
    clearTimeout(countedownTimeout);
    setIsActive(false);
    setTime(0.1 * 60);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countedownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);

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
