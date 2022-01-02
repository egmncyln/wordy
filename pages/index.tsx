import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Button from '../components/button/button'
import Form from '../components/form/form'
import Input from '../components/input/input'
import styles from './index.module.css'
import { getAuth, signInWithEmailAndPassword, User } from 'firebase/auth';
import React from 'react'

const Home: NextPage = () => {
  let _email: string = '';
  let _password: string = '';

  const router = useRouter();
  const [inputRequired, setInputRequired] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  const onFormSubmit = async (e: any) => {
    e.preventDefault();
    setShowSpinner(true);
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, _email, _password)
      .then((userCredential) => {
        const { uid } = userCredential.user;
        router.push({
          pathname: 'wordy',
          query: { userId: uid }
        });
      })
      .catch((error) => {
        console.log(error);
        setInputRequired(false);
        e.target.reset();
      })
      .finally(() => setShowSpinner(false))
  }

  const setInputRequiredToTrue = () => inputRequired ? null : setInputRequired(true);

  const onEmailChange = (email: string) => {
    console.log(email);
    _email = email;
    setInputRequiredToTrue();
  }

  const onPasswordChange = (password: string) => {
    console.log(password);
    _password = password;
    setInputRequiredToTrue();
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
        <h1 className="mb-1 drop-shadow-sm">Welcome to Wordy</h1>
        <small className="mb-6 drop-shadow-sm">You have to login to use it</small>
        <Form onSubmit={onFormSubmit}>
          <Input
            className="mb-1" id="email" type="email"
            label="E-mail" required={inputRequired}
            onChange={onEmailChange} onPaste={onEmailChange}
            autoFocus={true} />
          <Input
            className="mb-3" id="password" type="password"
            label="Password" required={inputRequired}
            onChange={onPasswordChange} onPaste={onPasswordChange} />
          <Button
            primary="true" type="submit"
            disabled={showSpinner} spinner={showSpinner}
            onClick={setInputRequiredToTrue}>Login</Button>
        </Form>
      </div>
    </>
  )
}

export default Home
