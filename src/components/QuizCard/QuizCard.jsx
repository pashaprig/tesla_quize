import React from 'react';
import s from './QuizCard.module.scss';
import { ReactComponent as IconArrow } from './../../img/iconArrow.svg';
import Radio from '../Radio/Radio';
import StatusBar from '../StatusBar/StatusBar';


class QuizCard extends React.Component {
  componentDidMount() {}
  
  onButtonClick = ( event ) =>{
      
      // collect all data from state
      const objToSubmit = {
        quiz_id: this.props.data.data.Questions[ this.props.currentQuestion ].quiz_id,
        type: 'visit/click',
        question_id: this.props.data.data.Questions[ this.props.currentQuestion ].id,
        question: this.props.data.data.Questions[ this.props.currentQuestion ].question,
        answer_id: this.props.data.data.Questions[ this.props.currentQuestion ].Answers[ this.props.currentQuestion ],
        step: this.props.data.data.Questions[ this.props.currentQuestion ].position
      }
      console.log('objToSubmit', objToSubmit);

      //send axios post request with data
      
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
            <Radio onNextButtonClick={ this.props.onNextButtonClick } key={item} id={item} name={this.props.data.data.Questions[ this.props.currentQuestion].question} value={item} /*checked={item.checked} disabled={item.disabled}*/ />
          ))}
        </div>

        <div className={s.modalBottom}>
          <StatusBar value={Math.floor((((this.props.currentQuestion + 1) / this.props.questionsNumbers) * 100) - 2)} />
          <span className={s.modalBottomPercent}>{Math.floor((((this.props.currentQuestion + 1) / this.props.questionsNumbers) * 100) - 2)} из 100%</span>
          
          <button 
            type='submit'
            onClick={ this.onButtonClick }            
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