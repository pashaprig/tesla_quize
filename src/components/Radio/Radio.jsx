import React from 'react';
import s from './Radio.module.scss';

class Radio extends React.Component { 

  render() {
    return (    
      <label className={`${s.radio} ${s.option}`}>
        <input onClick={ this.props.onNextButtonClick } className={s.radio__input} type='radio' id={this.props.id} name={this.props.name} value={this.props.value} defaultChecked={this.props.checked} disabled={this.props.disabled}></input>
        <span className={s.radio__box}></span>
        <span>{this.props.value}</span>
      </label>
    );
  }
}

export default Radio;
