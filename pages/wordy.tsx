import { useRouter } from 'next/router'
import React from 'react'
import styles from './wordy.module.css'

function Wordy() {
    const router = useRouter();
    const { userId } = router.query;
    console.log(userId);
    return (
        <div className={styles.wordy}>Wordy</div>
    )
}

export default Wordy
