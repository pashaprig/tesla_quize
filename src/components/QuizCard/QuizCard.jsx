import React from 'react';
import s from './QuizCard.module.scss';
import { ReactComponent as IconArrow } from './../../img/iconArrow.svg';
import Radio from '../Radio/Radio';
import StatusBar from '../StatusBar/StatusBar';
import axios from 'axios';

class QuizCard extends React.Component {
  constructor(){
    super();
    this.answearId = null;
  }
  componentDidMount() {}

  submitData(){
    const objToSubmit = {
      quiz_id: this.props.data.data.Questions[ this.props.currentQuestion ].quiz_id,
      type: 'visit/click', // тут нужно пробрасывать эти значения. Вопрос от каких событий их отлавливать
      question_id: this.props.data.data.Questions[ this.props.currentQuestion ].id,
      question: this.props.data.data.Questions[ this.props.currentQuestion ].question,
      answer_id: this.answearId, //тут нужно снять с checked. Айди ответа отсутствует
      step: this.props.data.data.Questions[ this.props.currentQuestion ].position
    }

    console.log('Submitting data...');
    // send axios post request with data  https://axios-http.com/docs/post_example
    axios.post('https://arbcrm.site/rest/quiz/hit', objToSubmit)
    .then(function (response) {
      console.log('Data submitted:', response);
      return response;
    })
    .catch(function (error) {
      console.log('Data submit error:', error);
    });
  }

  onNextButtonClick =async( e ) =>{

  }
  onRadioButtonClick = async ( event ) =>{
		console.log( event.target.value);

		this.answearId = event.target.value;
    const response = await this.submitData();
    console.log('response', response);

    // go to next question
    this.props.onNextButtonClick();
  }

  render() {
    return (
      <div className={s.QuizCard}>
        <div className={s.title}>
          <div>
            <span className='contentColor'>{this.props.data.data.Questions[ this.props.currentQuestion].position  + ` `}<IconArrow className={s.iconArrowTitle} width='24' height='24' aria-label='Стрелка вправо' /></span>
            <span>{this.props.data.data.Questions[ this.props.currentQuestion].question}</span>
          </div>
        </div>

        <div className={s.radio}>
          {this.props.data.data.Questions[ this.props.currentQuestion].Answers.map(item => (
            <Radio
              onRadioClick={ this.onRadioButtonClick }
              key={ item }
              // id={item}
              // value={item}
              item={ item }
              name={this.props.data.data.Questions[ this.props.currentQuestion].question}
              /*checked={item.checked} disabled={item.disabled}*/ />
          ))}
        </div>

        <div className={s.modalBottom}>
          <StatusBar value={Math.floor((((this.props.currentQuestion + 1) / this.props.questionsNumbers) * 100) - 2)} />
          <span className={s.modalBottomPercent}>{Math.floor((((this.props.currentQuestion + 1) / this.props.questionsNumbers) * 100) - 2)} из 100%</span>

          <button
            onClick={ this.onNextButtonClick }
						disabled={ !this.answer_id ? true : false }
            >
              <span className='span'>Далее</span>
              <IconArrow className={s.iconArrow} width='20' height='20' aria-label='Стрелка вправо' />
          </button>
        </div>
      </div>
    );
  }

}

export default QuizCard;