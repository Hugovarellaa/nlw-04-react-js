import { useContext } from "react";
import { challengesContext } from "../context/ChallengesContext";
import { CountdownContext } from "../context/CountdownContext";
import styles from "../styles/components/ChallengeBox.module.css";

export function ChallengeBox() {
  const { activeChallenges, resetChallenge, completeChallenge } =
    useContext(challengesContext);

  const { resetCountDown } = useContext(CountdownContext);

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountDown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountDown();
  }

  return (
    <>
      <div className={styles.challengeBoxContainer}>
        {activeChallenges ? (
          <div className={styles.challengeBoxActive}>
            <header>Ganhe {activeChallenges.amount}</header>
            <main>
              <img src={`icons/${activeChallenges.type}.svg`} alt="." />
              <strong>Novo desafio</strong>
              <p>{activeChallenges.description}</p>
            </main>
            <footer>
              <button
                type="button"
                className={styles.challengeFailedButton}
                onClick={handleChallengeFailed}
              >
                Falhei
              </button>
              <button
                type="button"
                className={styles.challengeSuccededButton}
                onClick={handleChallengeSucceeded}
              >
                Completei
              </button>
            </footer>
          </div>
        ) : (
          <div className={styles.challengeBoxNotActive}>
            <strong>Finalize um ciclo para receber um desafio</strong>
            <p>
              <img src="icons/level-up.svg" alt="Level up" />
              Avance de level completando desafio
            </p>
          </div>
        )}
      </div>
    </>
  );
}
