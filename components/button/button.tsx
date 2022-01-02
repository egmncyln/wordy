import React from 'react'
import styles from './button.module.css'
import cn from 'classnames'

function Button({ className, children, ...props }: any) {
    return (
        <button className={cn(styles.button, 'group-invalid:opacity-50', 'group-invalid:pointer-events-none')} {...props} onClick={(e) => props.onClick(e)}>{children}</button>
    )
}

export default Button
