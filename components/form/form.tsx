import React from 'react'
import cn from 'classnames'

function Form({ className, children, ...props }: any) {
    return (
        <form className={cn('group', className)} {...props}>{children}</form>
    )
}

export default Form
