import { createContext, ReactNode, useState } from "react";
import challeges from "../../challenges.json";

type Challenge = {
  type: "body" | "eye";
  description: string;
  amount: number;
};

interface ChallengeProviderProps {
  children: ReactNode;
}

interface ChallengeContextData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  levelUp: () => void;
  startNewChallenge: () => void;
  activeChallenges: Challenge;
  resetChallenge: () => void;
  experienceToNextLevel: number;
}

export const challengesContext = createContext({} as ChallengeContextData);

export function ChallengeProvider({ children }: ChallengeProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  const [activeChallenges, setActiveChallenges] = useState(null);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    const randomChallegeIndex = Math.floor(Math.random() * challeges.length);
    const challenge = challeges[randomChallegeIndex];
    setActiveChallenges(challenge);
  }
  function resetChallenge() {
    setActiveChallenges(null);
  }

  return (
    <challengesContext.Provider
      value={{
        level,
        currentExperience,
        challengesCompleted,
        experienceToNextLevel,
        levelUp,
        startNewChallenge,
        activeChallenges,
        resetChallenge,
      }}
    >
      {children}
    </challengesContext.Provider>
  );
}
