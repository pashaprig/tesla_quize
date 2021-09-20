import React from 'react';
import s from './Form.module.scss';
import Radio from './../Radio/Radio';

const Form = () => {
  return (
    <form action='' method='post' className={s.form}>
      <Radio id='choice1' name='investment' value='Да' />
      <Radio id='choice2' name='investment' value='Нет' />
    </form>
  );
}

export default Form;

