import React from 'react';
import s from './Modal.module.scss';

// import Form from '../Form/Form';
import QuizCard from '../QuizCard/QuizCard';

class Modal extends React.Component {
  componentDidMount() {
		console.log( 'Modal: componentDidMount:', this.props );
  }

  render() {
    return (
      <div className={s.modalWrapper}>
        {/* <Form
          Questions={this.props.data.Questions[0]}
          questionsLength={this.props.data.Questions.length}
        /> */}
        <QuizCard
        data={ this.props }
        currentQuestion={ this.props.currentQuestion }
        onNextButtonClick={ this.props.onNextButtonClick }
        />
      </div>
    );
  }

}

export default Modal;