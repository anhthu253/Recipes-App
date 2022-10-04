import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Recipes for being high</h1>

        <p className={styles.description}>Well just drink and take mushroom</p>
      </main>
    </div>
  );
}
