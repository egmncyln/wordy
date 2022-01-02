import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Wordy App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='flex justify-center'>
        <h1>Hello, this is wordy app !</h1>
      </div>
    </>
  )
}

export default Home
