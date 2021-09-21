import React from 'react';
import s from './Form.module.scss';
import Radio from './../Radio/Radio';
import List from '../List/List';

const Form = () => {
    return (
        <div className={s.form}>
            <List />
        </div>
    );
}
export default Form;
