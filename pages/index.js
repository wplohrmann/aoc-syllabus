import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Problems from '../src/problems'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AoC Syllabus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello, world!
        </h1>

        <p className={styles.description}>
            List of Advent of Code problems, filterable by title, year, topics etc.
        </p>

      {/* "TODO: List of topics" } */}
      <Problems/>
      </main>

      <footer className={styles.footer}>
        <a href="https://nextjs.org/">Powered by Next.js</a>
      </footer>
    </div>
  )
}
