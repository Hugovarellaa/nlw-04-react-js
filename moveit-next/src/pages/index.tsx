import Head from "next/head";
import { ExperienceBar } from "../components";
import { CompleteChallenges } from "../components/CompleteChallenges";
import { Counterdown } from "../components/Counterdown";
import { Profile } from "../components/Profile";
import styles from "../styles/pages/home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | Move.it</title>
      </Head>

      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompleteChallenges />
          <Counterdown />
        </div>

        <div></div>
      </section>
    </div>
  );
}