import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <header>
        <Link href="/math/dino">Go to Game</Link>
      </header>
    </div>
  );
}
