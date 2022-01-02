import React from 'react'
import styles from './input.module.css'
import cn from 'classnames'


function Input({ className, id, label, ...props }: any) {
    // 'invalid:placeholder:text-red-400',
    const lowerLabel = (label as string).toLowerCase();
    return (
        <div className={cn(styles.input, className)}>
            <label htmlFor={id} className={styles.label}>{label}</label>
            <input
                id={id} className={cn('peer', styles.inputEl, 'invalid:border-red-400')}
                placeholder={`Enter ${lowerLabel}`} {...props}
                onPaste={(e: any) => props.onPaste(e.target.value)}
                onChange={(e: any) => props.onChange(e.target.value)} />
            <small className={cn(styles.inputElValidation, 'peer-invalid:flex text-red-400')}>{`Please enter valid ${lowerLabel}`}</small>
        </div>
    )
}

export default Input
