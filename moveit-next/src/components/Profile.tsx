import { useContext } from "react";
import { challengesContext } from "../context/ChallengesContext";
import styles from "../styles/components/profile.module.css";

export function Profile() {
  const { level } = useContext(challengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/Hugovarellaa.png" alt="hugo" />
      <div>
        <strong>Hugo Alves Varella</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
