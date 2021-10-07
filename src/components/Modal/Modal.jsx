import React from 'react';
import s from './Modal.module.scss';
import QuizCard from '../QuizCard/QuizCard';
import ModalLast from '../ModalLast/ModalLast';


class Modal extends React.Component {
  componentDidMount() {}

   
  render() {
    return (
      <div className={s.modalWrapper}>
        { this.props.currentQuestion > this.props.data.Questions.length - 1 ? 
        <ModalLast data={ this.props } /> :
        <QuizCard
        data={ this.props }
        currentQuestion={ this.props.currentQuestion }
        onNextButtonClick={ this.props.onNextButtonClick }
        questionsNumbers={ this.props.data.Questions.length }
        />
        }
      </div>
    );
  }

}

export default Modal;
