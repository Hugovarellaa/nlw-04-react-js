import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { challengesContext } from "./ChallengesContext";

interface CountdownContextData {
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  isActive: boolean;
  startCountDown: () => void;
  resetCountDown: () => void;
}

interface CountdownProvider {
  children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData);

let countedownTimeout: NodeJS.Timeout;

export function CountdownProvider({ children }: CountdownProvider) {
  const { startNewChallenge } = useContext(challengesContext);

  const [time, setTime] = useState(25 * 60); //tempo de execução do circlo do botao
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  function startCountDown() {
    setIsActive(true);
  }
  function resetCountDown() {
    clearTimeout(countedownTimeout);
    setIsActive(false);
    setTime(25 * 60);
    setHasFinished(false);
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
  }, [isActive, startNewChallenge, time]);

  return (
    <CountdownContext.Provider
      value={{
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountDown,
        resetCountDown,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
}
