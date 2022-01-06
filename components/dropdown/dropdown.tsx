import React, { useEffect, useState } from 'react'
import Chevron from '../../icons/chevron'
import { KeyValue } from '../../models/key-value.model'
import styles from './dropdown.module.css'
import cn from 'classnames'
import Input from '../input/input'

export const OPTION_DEFAULT_VALUE = 'OPTION_DEFAULT_VALUE'

function Dropdown({ datas, ...props }: any) {
  let dataNodes: any;
  const [disabled, setDisabled] = useState(false);
  const [opened, setOpened] = useState(false);

  if (!datas || datas.length <= 0) {
    setDisabled(true);
  }

  const onSearch = (search: string) => {
    if (!dataNodes) {
      dataNodes = document.querySelectorAll('.dropdown-container .datas .data');
    }
    if (search.length >= 3) {
      if (dataNodes) {
        for (let i = 0; i < dataNodes.length; i++) {
          if (dataNodes[i].innerText && !dataNodes[i].innerText.includes(search))
            dataNodes[i].style.display = 'none';
        }
      }
    }
    else {
      if (dataNodes) {
        for (let i = 0; i < dataNodes.length; i++)
          dataNodes[i].style.display = 'flex';
      }
    }
  }

  return (
    <div className='dropdown-container relative' disabled={disabled}>
      <div {...props} className={styles.dropdown} opened={opened.toString()} onClick={() => setOpened(!opened)}>
        <label className={styles.label}>Please select an item</label>
        <Chevron className={cn(styles.chevron)} />
      </div>
      <div className={styles.search}>
        <Input className={styles.input} type='text' placeholder='Type min 3 chars to search' onChange={onSearch} />
        <ul className='datas'>{datas.map((data: KeyValue) => <li className='data' key={data.key} value={data.key}>{data.value}</li>)}</ul>
      </div>
    </div>
  )
}

export default Dropdown
