import React from 'react';
import s from './Radio.module.scss';

class Radio extends React.Component {
  // constructor(){
  //   super();
  // }
  componentDidMount() {
    // console.log( this.props.item);
  }
  render() {
    return (
      <label className={`${s.radio} ${s.option}`}>
        <input
					type='radio'
					onClick={ this.props.onRadioClick }
					className={s.radio__input}
					// id={this.props.id}
					// name={this.props.name}
					// value={this.props.value}
					name={ this.props.item }
					value={ this.props.item }
					defaultChecked={this.props.checked}
					disabled={this.props.disabled}></input>
        <span className={s.radio__box}></span>
				<span>{this.props.item}</span>
        {/* <span>{this.props.value}</span> */}
      </label>
    );
  }
}

export default Radio;



// const answers = [
//   {
//   id: 0,
//   value: "Yes",
//   },
//   {
//     id: 1,
//     value: "No",
//     }
//   ];