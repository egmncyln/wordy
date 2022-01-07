import React, { useEffect, useState } from 'react'
import Chevron from '../../icons/chevron'
import { KeyValue } from '../../models/key-value.model'
import styles from './dropdown.module.css'
import Input from '../input/input'
import { Types } from '../../enums/types.enum'

export const OPTION_DEFAULT_VALUE = 'OPTION_DEFAULT_VALUE'

function Dropdown({ datas, type, ...props }: any) {
  let dataNodes: any;
  const [disabled, setDisabled] = useState(false);
  const [opened, setOpened] = useState(false);
  const [label, setLabel] = useState('');

  useEffect(() => {
    if (!datas || datas.length <= 0) {
      setDisabled(true);
    }
    if (type === Types.List) {
      if (disabled)
        setLabel(`Please create at least one list to select`);
      else
        setLabel('Please select a list from dropdown');
    }
    else if (type === Types.Word) {
      if (disabled)
        setLabel(`Please add at least one word to select`);
      else
        setLabel('Please select a word from dropdown');
    }
  }, [datas, type, disabled]);

  const onSearch = (search: string) => {
    if (!dataNodes) {
      dataNodes = document.querySelectorAll('.dropdown-container .datas .data');
    } else {
      if (search.length >= 3) {
        for (let i = 0; i < dataNodes.length; i++) {
          if (dataNodes[i].innerText && !dataNodes[i].innerText.includes(search))
            dataNodes[i].style.display = 'none';
        }
      }
      else {
        for (let i = 0; i < dataNodes.length; i++)
          dataNodes[i].style.display = 'flex';
      }
    }
  }

  return (
    <div className='dropdown-container relative' disabled={disabled}>
      <div {...props} className={styles.dropdown} opened={opened.toString()} onClick={() => setOpened(!opened)}>
        <label className={styles.label}>{label}</label>
        <Chevron className={styles.chevron} />
      </div>
      <div className={styles.search}>
        <Input className={styles.input} type='text' placeholder='Type min 3 chars to search' onChange={onSearch} />
        <ul className='datas'>{datas.map((data: KeyValue) => <li className='data' key={data.key} value={data.key}>{data.value}</li>)}</ul>
      </div>
    </div>
  )
}

export default Dropdown
