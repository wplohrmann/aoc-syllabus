import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Problems from '../src/problems'

export default function Home() {
  return <>
    <Head>
        <title>AoC Syllabus</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
        <h1 className={styles["shiny-green"]}>AoC Syllabus</h1>
        <Problems/>

      {/* "TODO: List of topics" } */}
    </main>

    <footer className={styles.footer}>
        <a href="https://nextjs.org/">Powered by Next.js</a>
    </footer>
  </>
}
