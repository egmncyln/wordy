import React, { useState } from 'react'
import styles from './input.module.css'
import cn from 'classnames'


function Input({ className, id, label, ...props }: any) {
    // 'invalid:placeholder:text-red-400',
    const lowerLabel = (label as string).toLowerCase();
    return (
        <div className={cn(styles.input, className)}>
            <label htmlFor={id}>{label}</label>
            <input
                {...props}
                id={id} placeholder={`Enter ${lowerLabel}`}
                className={cn('peer', styles.inputEl, 'invalid:border-red-400')}
                onPaste={(e: any) => props.onChange(e.target.value)}
                onChange={(e: any) => props.onChange(e.target.value)}
                onFocus={(e: any) => props.onChange(e.target.value)} />
            <small className={cn(styles.inputElValidation, 'peer-invalid:flex text-red-400')}>{`Please enter valid ${lowerLabel}`}</small>
        </div>
    )
}

export default Input
