import { useContext } from "react";
import { challengesContext } from "../context/ChallengesContext";
import styles from "../styles/components/LevelUpModal.module.css";

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(challengesContext);
  return (
    <>
      <div className={styles.overlay}>
        <div className={styles.container}>
          <header>{level}</header>
          <strong>Parabens</strong>
          <p>Voce alccançou um novo level.</p>
          <button type="button" onClick={closeLevelUpModal}>
            <img src="/icons/close.svg" alt="Fechar modal" />
          </button>
        </div>
      </div>
    </>
  );
}
