import React from 'react';
import s from './Header.module.scss';
import { ReactComponent as Logo } from './../../img/logo.svg';

class Header extends React.Component {
  render() {
    return (
      <header className={s.pageHeader}>
        <div className={s.logoWrapper}>
          <Logo className={s.pageHeaderLogo} width='152' height='19' alt='logo' />
        </div>
      </header>
    );
  }
}

export default Header;