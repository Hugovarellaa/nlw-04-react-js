import { useContext } from "react";
import { challengesContext } from "../context/ChallengesContext";
import styles from "../styles/components/ChallengeBox.module.css";

export function ChallengeBox() {
  const { activeChallenges, resetChallenge } = useContext(challengesContext);

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
                onClick={resetChallenge}
              >
                Falhei
              </button>
              <button type="button" className={styles.challengeSuccededButton}>
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
