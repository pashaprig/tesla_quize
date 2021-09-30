import React from 'react';
import s from './QuizCard.module.scss';
import { ReactComponent as IconArrow } from './../../img/iconArrow.svg';
import Radio from '../Radio/Radio';
import { NavLink } from 'react-router-dom';
import StatusBar from '../StatusBar/StatusBar';


class QuizCard extends React.Component {
  componentDidMount() {
		console.log( 'QuizCard: componentDidMount:', this.props );
  }

  onButtonClick = ( event ) =>{
      console.log( 'click', event);
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
          <StatusBar value={this.props.currentQuestion} />
          <span className={s.modalBottomPercent}>{this.props.currentQuestion} из 100%</span>
          
          <button type='submit'
            onClick={ this.onButtonClick }
            disabled={ this.props.data.data.Questions[ this.props.currentQuestion].last_question }
            ><span className='span'>Далее</span><IconArrow className={s.iconArrow} width='20' height='20' aria-label='Стрелка вправо' />
          </button>
          
          
          <NavLink 
            className='submit' id='submit' to='/modalLast'
            onClick={ this.onButtonClick }
            disabled={this.props.data.data.Questions[ this.props.currentQuestion].last_question }
            >Далее<IconArrow className={s.iconArrow} width='20' height='20' aria-label='Стрелка вправо' />
          </NavLink>
        </div>
      </div>

    );
  }

}

export default QuizCard;