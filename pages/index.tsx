import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Button from '../components/button/button'
import Form from '../components/form/form'
import Input from '../components/input/input'
import styles from './index.module.css'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react'

const Home: NextPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inputRequired, setInputRequired] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onFormSubmit = async (e: any) => {
    setShowSpinner(true);
    setErrorMessage('');
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const { uid } = userCredential.user;
        router.push({
          pathname: 'wordy',
          query: {
            userId: uid,
            userName: email.replace('@wordy.com', '')
          }
        });
      })
      .catch((error: Error) => {
        setErrorMessage(error.message);
        setInputRequired(false);
        e.target.reset();
      })
      .finally(() => setShowSpinner(false))
  }

  const setInputRequiredToTrue = () => inputRequired ? null : setInputRequired(true);

  const onEmailChange = (email: string) => {
    setEmail(email);
    setErrorMessage('');
    setInputRequiredToTrue();
  }

  const onPasswordChange = (password: string) => {
    setPassword(password);
    setErrorMessage('');
    setInputRequiredToTrue();
  }

  const onLoginClicked = () => {
    setErrorMessage('');
    setInputRequiredToTrue();
  }

  return (
    <>
      <Head>
        <title>Wordy App</title>
        <link rel='icon' href='/favicon.ico' />
        {/* <script src='scripts/attach-voice.js'></script> */}
      </Head>

      <div className={styles.index}>
        <label className='mb-2'>Welcome to Wordy</label>
        <small className='mb-8'>You have to login to use it</small>
        <Form onSubmit={onFormSubmit}>
          <Input
            className='mb-2' type='email'
            label='E-mail' required={inputRequired}
            onChange={onEmailChange}
            autoFocus={true} />
          <Input
            className='mb-4' type='password'
            label='Password' required={inputRequired}
            onChange={onPasswordChange} />
          <Button
            primary='true' type='submit'
            disabled={showSpinner} spinner={showSpinner}
            onClick={onLoginClicked}>Login</Button>
          {errorMessage && errorMessage.length > 0
            ? <small className='text-center mt-2 text-red-400'>{errorMessage}</small>
            : null}
        </Form>
      </div>
    </>
  )
}

export default Home
