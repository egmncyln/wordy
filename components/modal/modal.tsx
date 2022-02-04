import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { databaseURL } from '../../constants';
import { Types } from '../../enums/types.enum';
import Close from '../../icons/close';
import Button from '../button/button';
import Form from '../form/form';
import Input from '../input/input';
import styles from './modal.module.css'

function Modal({ datas, show, ...props }: any) {
  let overlay: any;
  const { userId, type, data } = datas;
  const [opened, setOpened] = useState(false);
  const [inputRequired, setInputRequired] = useState(false);

  useEffect(() => {
    if (!datas || !datas.userId || !datas.type)
      setOpened(false);
  }, [datas, datas.userId, datas.type])

  useEffect(() => {
    show ? openModal() : closeModal()
  }, [show])

  const setInputRequiredToTrue = () => inputRequired ? null : setInputRequired(true);

  const openModal = () => {
    setOpened(true);
    setInputRequired(false);
    if (!overlay)
      overlay = document.querySelector('#overlay') as HTMLElement;
    overlay.style.display = 'flex';
  }

  const closeModal = () => {
    setOpened(false);
    setInputRequired(false);
    if (!overlay)
      overlay = document.querySelector('#overlay') as HTMLElement;
    overlay.style.display = 'none';
  }

  const getModalHeader = (): string => {
    let header: string = '';
    if (type === Types.List)
      header = data ? 'Edit an existing list' : 'Create a new list';
    else if (type === Types.Word)
      header = data ? 'Edit an existing word' : 'Create a new word';
    return header;
  }

  const getModalMain = () => {
    let jsx: any;
    if (type === Types.List) {
      if (data) {

      }
      else {
        jsx = <Input type='text' label='List Name' required={inputRequired} onChange={(e: any) => console.log(e)} />
      }
    }
    else if (type === Types.Word) {
      if (data) {

      }
      else {

      }
    }
    return jsx;
  }

  const onFormSubmit = () => {
    if (type === Types.List) {
      if (data) {

      }
      else {
        // axios.post(databaseURL, { userId: userId, listName: })
      }
    }
    else if (type === Types.Word) {
      if (data) {

      }
      else {

      }
    }
  }

  return (
    <div {...props} className={styles.container} opened={opened.toString()}>
      <div className='relative'>
        <Close className={styles.close} onClick={(e: any) => props.onCloseClicked(e)} />
        <Form className={styles.form} onSubmit={onFormSubmit}>
          <header className={styles.header}>{getModalHeader()}</header>
          <main className={styles.main}>{getModalMain()}</main>
          <footer className={styles.footer}>
            <Button secondary="true" type="reset" onClick={(e: any) => props.onCloseClicked(e)}>Close</Button>
            <Button primary="true" type="submit" onClick={setInputRequiredToTrue}>Save</Button>
          </footer>
        </Form>
      </div>
    </div>
  )
}

export default Modal
