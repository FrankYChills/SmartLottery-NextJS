import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
// import ManualHeader from "../components/ManualHeader";
import Header from "../components/Header";
import LotteryEntrance from "../components/LotteryEntrance";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="description" content="Smart Contract Lottery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <LotteryEntrance />

      <button
        style={{ marginTop: "15%" }}
        className="bg-purple-900 hover:bg-green-800 text-white font-bold py-2 px-4 rounded ml-5"
      >
        <Link href="/about">About</Link>
      </button>
    </div>
  );
}
