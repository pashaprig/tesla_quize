import React from 'react';
import s from './QuizCard.module.scss';


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
          <h1>Current question: { this.props.currentQuestion }</h1>
        <h1>{  this.props.data.data.Questions[ this.props.currentQuestion].id }</h1>
        <button
        onClick={ this.onButtonClick }
        disabled={ this.props.data.data.Questions[ this.props.currentQuestion].last_question }
        >Next</button>
        <input type="radio" onClick={ this.onButtonClick }></input>
      </div>
    );
  }

}

export default QuizCard;