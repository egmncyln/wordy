import '../styles/main.css'
import type { AppProps } from 'next/app'
import { initializeApp } from 'firebase/app';
import { FIREBASE_CONFIG } from '../constants';
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  initializeApp(FIREBASE_CONFIG);
  return (
    <>
      <Head>
        <title>Wordy App</title>
        <link rel='icon' href='/favicon.ico' />
        {/* <script src='scripts/attach-voice.js'></script> */}
        <script src='scripts/event-listeners.js'></script>
      </Head>
      <Component {...pageProps} />
      <div id="overlay"></div>
    </>
  )
}

export default MyApp
