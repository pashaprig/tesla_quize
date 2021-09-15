import React from 'react';
import s from './Form.module.css';

const Form = () => {
  return (
    <div className={s.form}>
    <label>
      <input type="radio" id="choice1" name="investment" value="yes"></input>Да
    </label>
    <label>
      <input type="radio" id="choice2" name="investment" value="on"></input>Нет
    </label>
  </div>
  );
}

export default Form;