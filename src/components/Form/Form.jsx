import React from 'react';
import s from './Form.module.scss';

import ModalBottom from '../ModalBottom/ModalBottom';
import RadioGroupe from '../RadioGroupe/RadioGroupe';
import FormTitle from '../FormTitle/FormTitle';


const Form = () => {
  return (
    <form className={s.form} action='https://echo.htmlacademy.ru' method='POST'>
      <FormTitle />
      <RadioGroupe />
      <ModalBottom />
    </form>
  );
}

export default Form;