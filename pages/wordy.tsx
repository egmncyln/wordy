import { NextPage } from 'next';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import styles from './wordy.module.css'
import Dropdown from '../components/dropdown/dropdown';
import Form from '../components/form/form';
import { Types } from '../enums/types.enum';
import Add from '../icons/add';
import Delete from '../icons/delete';
import Edit from '../icons/edit';
import { ModalDatas } from '../models/modal-datas.model';
import Modal from '../components/modal/modal';
import { isNullOrWhiteSpace } from '../utils/common.utils';

const Wordy: NextPage = () => {
    const router = useRouter();
    const { userId, userName } = router.query;
    const [showModal, setShowModal] = useState(false);
    const modalDatasInitialState: ModalDatas = { userId: null, type: null, data: null };
    const [modalDatas, setModalDatas] = useState(modalDatasInitialState);

    useEffect(() => {
        if (isNullOrWhiteSpace(userId as string) || isNullOrWhiteSpace(userName as string)) {
            router.push('not-found');
        }
    }, [userId, userName])

    useEffect(() => {
        setModalDatas({ userId: userId as string, type: Types.List, data: null });
    })

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
            <Modal datas={modalDatas} show={showModal} onCloseClicked={() => setShowModal(false)} />
        </>
    )
}

export default Wordy
