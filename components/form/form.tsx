import React from 'react'
import cn from 'classnames'
import styles from './form.module.css'

function Form({ className, children, ...props }: any) {
    return (
        <form
            {...props}
            className={cn('group', styles.form, className)}
            action={null} onSubmit={(e) => props.onSubmit(e)}
        >
            {children}
        </form>
    )
}

export default Form
