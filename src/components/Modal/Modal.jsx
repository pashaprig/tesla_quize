import React from 'react';
import s from './Modal.module.scss';
import QuizCard from '../QuizCard/QuizCard';


class Modal extends React.Component {
  componentDidMount() {
		console.log( 'Modal: componentDidMount:', this.props );
  }

  render() {
    return (
      <div className={s.modalWrapper}>
        <QuizCard
        data={ this.props }
        currentQuestion={ this.props.currentQuestion }
        onNextButtonClick={ this.props.onNextButtonClick }
        questionsNumbers={ this.props.data.Questions.length }
        />
      </div>
    );
  }

}

export default Modal;