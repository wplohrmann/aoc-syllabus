import Head from 'next/head'

import Problems from '../src/problems'
import Title from '../components/title'
import Footer from '../components/footer'

export default function Home() {
  return <>
    <Head>
        <title>AoC Syllabus</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>

    <div style={{"display":"flex", "flexDirection":"column", "height":"100vh", "justifyContent":"center"}}>
        <Title text="AoC Syllabus"/>
        <Problems/>
        <Footer url="https://nextjs.org" text="Powered by Next.js" />
    </div>
  </>
}
