import React, { useState } from 'react'
import Chevron from '../../icons/chevron'
import { KeyValue } from '../../models/key-value.model'
import styles from './dropdown.module.css'
import cn from 'classnames'

export const OPTION_DEFAULT_VALUE = 'OPTION_DEFAULT_VALUE'

function Dropdown({ datas, ...props }: any) {
  if (!datas) {
    return null;
  }

  const [opened, setOpened] = useState(false);

  return (
    <div {...props} className={styles.dropdown} opened={opened.toString()} onClick={() => setOpened(!opened)}>
      <label className={styles.label}>Please select an item</label>
      <Chevron className={cn(styles.chevron)} />
    </div>
  )
}

export default Dropdown
