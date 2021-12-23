import { AppProps } from "next/app";
import { ChallengeProvider } from "../context/ChallengesContext";
import "../styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChallengeProvider>
      <Component {...pageProps} />
    </ChallengeProvider>
  );
}

export default MyApp;
