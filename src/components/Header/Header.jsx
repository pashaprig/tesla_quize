import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.scss';
import { ReactComponent as Logo } from './../../img/logo.svg';

const Header = () => {
  return (
    <header className={s.pageHeader}>
      <NavLink to='/index'>
        <Logo className={s.pageHeaderLogo} width='152' height='19' alt='logo' />
      </NavLink>
    </header>);
}

export default Header;