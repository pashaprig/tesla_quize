import React from 'react';
import s from './Form.module.scss';

import ModalBottom from '../ModalBottom/ModalBottom';
import RadioGroupe from '../RadioGroupe/RadioGroupe';
import FormTitle from '../FormTitle/FormTitle';


const Form = ( props ) => {

  return (
    <form className={s.form} action='https://echo.htmlacademy.ru' method='POST'>
      <FormTitle 
        title={ props.Questions.question }
        questionNumber={ props.Questions.position }        
      />
      <RadioGroupe 
        Answers={ props.Questions.Answers }
        name={ props.Questions.question }
      />
      <ModalBottom url='/modalLast' />
    </form>
  );
}

export default Form;