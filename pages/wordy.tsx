import { NextPage } from 'next';
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import styles from './wordy.module.css'
import Dropdown from '../components/dropdown/dropdown';
import { KeyValue } from '../models/key-value.model';
import Form from '../components/form/form';
import { Types } from '../enums/types.enum';
import Add from '../icons/add';
import Delete from '../icons/delete';
import Edit from '../icons/edit';

const Wordy: NextPage = () => {
    const router = useRouter();
    const { userId, userName } = router.query;
    //[{key: 'v', value: 'verbs' }, {key: 'n', value: 'nouns' }]

    const onAddClicked = () => {

    }

    const onEditClicked = () => {

    }

    const onDeleteClicked = () => {

    }

    return (
        <>
            <Head>
                <title>Wordy App</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <div className={styles.wordy}>
                <label className='mb-2'>{`Hi, ${userName} :)`}</label>
                <small className='mb-8'>You can practice english with Wordy</small>
                <Form>
                    <div className={styles.icons}>
                        <Add onClick={onAddClicked} /><Edit onClick={onEditClicked} /><Delete onClick={onDeleteClicked} />
                    </div>
                    <Dropdown datas={[{ key: 'v', value: 'verbs' }, { key: 'n', value: 'nouns' }]} type={Types.List} />
                </Form>
            </div>
        </>

    )
}

export default Wordy
