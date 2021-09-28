import React from 'react';
import s from './Modal.module.scss';

import Form from '../Form/Form';

class Modal extends React.Component {
  componentDidMount() {
  }
  
  render() {
    return (
      <div className={s.modalWrapper}>
        <Form
          Questions={this.props.data.Questions[0]}
          questionsLength={this.props.data.Questions.length}
        />
      </div>
    );
  }

}

export default Modal;