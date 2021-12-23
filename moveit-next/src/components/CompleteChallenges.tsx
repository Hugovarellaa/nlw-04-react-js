import { useContext } from "react";
import { challengesContext } from "../context/ChallengesContext";
import styles from "../styles/components/CompleteChallenges.module.css";

export function CompleteChallenges() {
  const { challengesCompleted } = useContext(challengesContext);
  return (
    <div className={styles.completeChallengesContainer}>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  );
}
