import React from 'react'
import styles from './input.module.css'
import cn from 'classnames'

function Input({ className, id, label, placeholder, ...props }: any) {
    let lowerLabel = 'input';
    if (label) {
        lowerLabel = (label as string).toLowerCase();
    }

    return (
        <div className={cn(styles.input, className)}>
            <label htmlFor={id}>{label}</label>
            <input
                {...props}
                id={id} placeholder={placeholder ? placeholder : `Enter ${lowerLabel}`}
                className={cn('peer', styles.inputEl, 'invalid:border-red-400')}
                onChange={(e) => props.onChange(e.target.value)}
            />
            <small className={cn('hidden', 'peer-invalid:flex text-red-400')}>{`Please enter valid ${lowerLabel}`}</small>
        </div>
    )
}

export default Input
