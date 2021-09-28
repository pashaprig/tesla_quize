import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import s from './StatusBar.module.scss';

const mainColor = '#e82127';
const emptyBar = '#a4a4a4';

const StatusBar = (props) => {
  console.log('SB', props);
  return (
    <div className={s.wrapper}>
    <CircularProgressbar 
    value={props.value}
    // text={`${percentage}%`}

    styles={buildStyles({  

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
