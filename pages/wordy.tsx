import { NextPage } from 'next';
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import styles from './wordy.module.css'
import Dropdown from '../components/dropdown/dropdown';
import { KeyValue } from '../models/key-value.model';
import Form from '../components/form/form';

const Wordy: NextPage = () => {
    const router = useRouter();
    const { userId, userName } = router.query;

    return (
        <>
            <Head>
                <title>Wordy App</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <div className={styles.wordy}>
                <label className='mb-2'>{`Hi, ${userName} :)`}</label>
                <small className='mb-8'>You can practice your favorite language with Wordy</small>
                <Form>
                    <Dropdown label='Word Lists' datas={[{ key: 'v', value: 'verbs' }, { key: 'n', value: 'nouns' }]} />
                </Form>

            </div>
        </>

    )
}

export default Wordy
