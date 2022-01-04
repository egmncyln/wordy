import '../styles/main.css'
import type { AppProps } from 'next/app'
import { initializeApp } from 'firebase/app';
import { FIREBASE_CONFIG } from './shared/constants';

function MyApp({ Component, pageProps }: AppProps) {
  initializeApp(FIREBASE_CONFIG);
  return <Component {...pageProps} />
}

export default MyApp
