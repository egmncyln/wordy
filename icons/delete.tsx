import React from 'react'
import styles from './shared/icon.module.css'
import cn from 'classnames'

function Delete({ className, props }: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" className={cn(styles.icon, className)} viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm1 8a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
    </svg>
  )
}

export default Delete
