import React from 'react';
import s from './Form.module.scss';
import ModalBottom from '../ModalBottom/ModalBottom';
import RadioGroupe from '../RadioGroupe/RadioGroupe';
import FormTitle from '../FormTitle/FormTitle';


const Form = (props) => {
  // const radioList = document.querySelectorAll('input[type="radio"]');
  // const button = document.querySelector('#submit');

  // const submitAfterRadioChecked = () => {
  //   radioList.forEach( ( input )=> {
  //     if (input.checked) {
  //       button.click()
  //     }
  //   });
  // }

  // submitAfterRadioChecked();
  console.log('Form', props);

  return (
    <form className={s.form} action='https://echo.htmlacademy.ru' method='POST'>
      <FormTitle
        title={props.Questions.question}
        questionNumber={props.Questions.position}
      />
      <RadioGroupe
        Answers={props.Questions.Answers}
        name={props.Questions.question}
      />
      <ModalBottom url='/modalLast' value={props.questionsLength} />
      <button>Отправить</button>
    </form>
  );
}

export default Form;