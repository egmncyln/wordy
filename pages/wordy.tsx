import { NextPage } from 'next';
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import styles from './wordy.module.css'
import Dropdown from '../components/dropdown/dropdown';
import { KeyValue } from '../models/key-value.model';
import Form from '../components/form/form';
import { Types } from '../enums/types.enum';
import Add from '../icons/add';
import Delete from '../icons/delete';
import Edit from '../icons/edit';
import Modal from '../components/modal/modal';

const Wordy: NextPage = () => {
    const router = useRouter();
    const { userId, userName } = router.query;
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState(Types.List);
    //[{key: 'v', value: 'verbs' }, {key: 'n', value: 'nouns' }]

    useEffect(() => {
        router.beforePopState(({ url, as }) => {
            if (as === url) {
                return false;
            }
            return true;
        })
    }, []);

    useEffect(() => {

    }, [userId])

    const onEditClicked = () => {

    }

    const onDeleteClicked = () => {

    }

    return (
        <>
            <div className={styles.wordy}>
                <label className='mb-2'>{`Hi, ${userName} :)`}</label>
                <small className='mb-8'>You can practice english with Wordy</small>
                <Form>
                    <div className={styles.icons}>
                        <Add onClick={() => setShowModal(true)} /><Edit onClick={onEditClicked} /><Delete onClick={onDeleteClicked} />
                    </div>
                    <Dropdown datas={[{ key: 'v', value: 'verbs' }, { key: 'n', value: 'nouns' }]} type={Types.List} />
                </Form>
            </div>
            <Modal type={modalType} show={showModal} onCloseClicked={() => setShowModal(false)} />
        </>
    )
}

export default Wordy
