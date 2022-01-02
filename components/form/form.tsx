import React from 'react'
import cn from 'classnames'
import styles from './form.module.css'

function Form({ children, ...props }: any) {
    return (
        <form className={cn('group', styles.form)} action={null}
            {...props} onSubmit={(e) => props.onSubmit(e)}
        >
            {children}
        </form>
    )
}

export default Form
