import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import Button from '../components/button/button'
import Form from '../components/form/form'
import Input from '../components/input/input'
import styles from './index.module.css'

const Home: NextPage = () => {
  const [inputRequired, setInputRequired] = useState(false);

  const onLoginButtonClicked = (e: any) => {
    e.preventDefault();
    setInputRequired(true);
  }

  return (
    <>
      <Head>
        <title>Wordy App</title>
        <link rel="icon" href="/favicon.ico" />
        <script src='scripts/global-variables.js'></script>
        {/* <script src='scripts/attach-voice.js'></script> */}
      </Head>

      <div className={styles.index}>
        <h1 className="mb-1">Welcome to Wordy</h1>
        <small className="mb-6">You have to login to use it</small>
        <Form className={styles.form}>
          <Input
            className="mb-1" id="email" type="email"
            label="E-mail" required={inputRequired}
            onChange={() => inputRequired ? null : setInputRequired(true)}
            autoFocus={true} />
          <Input
            className="mb-3" id="password" type="password"
            label="Password" required={inputRequired}
            onChange={() => inputRequired ? null : setInputRequired(true)} />
          <Button
            primary="true"
            onClick={onLoginButtonClicked}>Login</Button>
        </Form>
      </div>
    </>
  )
}

export default Home
