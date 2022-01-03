import '../styles/main.css'
import type { AppProps } from 'next/app'
import { initializeApp } from 'firebase/app';

export const firebaseConfig = {
  apiKey: "AIzaSyA70nif9XJQ_N9oQaCbFDHMd_H9L7PUHF0",
  authDomain: "wordy-a7813.firebaseapp.com",
  databaseURL: "https://wordy-a7813-default-rtdb.firebaseio.com",
  projectId: "wordy-a7813",
  storageBucket: "wordy-a7813.appspot.com",
  messagingSenderId: "531698148251",
  appId: "1:531698148251:web:b6f243cfb8354d69a8773e"
};

function MyApp({ Component, pageProps }: AppProps) {
  initializeApp(firebaseConfig);
  return <Component {...pageProps} />
}

export default MyApp
