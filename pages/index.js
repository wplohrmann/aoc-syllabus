import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Problems from '../src/problems'
import Title from '../components/title'
import Footer from '../components/footer'

export default function Home() {
  return <>
    <Head>
        <title>AoC Syllabus</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
        <Title text="AoC Syllabus"/>
        <Problems/>

      {/* "TODO: List of topics" } */}
    </main>
    <Footer url="https://nextjs.org" text="Powered by Next.js" />

  </>
}
