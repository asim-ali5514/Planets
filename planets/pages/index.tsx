import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import 'tailwindcss/tailwind.css'
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Planets</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>bruh</h1>
      </main>
    </div>
  )
}

export default Home
