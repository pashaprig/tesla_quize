import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import s from './StatusBar.module.scss';

const mainColor = '#e82127';
const emptyBar = '#a4a4a4';

// Статус бар от сюда: https://codesandbox.io/s/vymm4oln6y?file=/index.js Предварительно установлен командой: npm i react-circular-progressbar -S

const StatusBar = (props) => {
  return (
    <div className={s.wrapper}>
      <CircularProgressbar 
        value={props.value}
        // text={`${percentage}%`}

        styles={buildStyles({  
        strokeLinecap: "butt",
        // Text size
        textSize: '12px', 

        // Colors
        pathColor: mainColor,
        textColor: mainColor,
        trailColor: emptyBar,
        backgroundColor: mainColor,
        })}
      />
    </div>
  );
}

export default StatusBar;
