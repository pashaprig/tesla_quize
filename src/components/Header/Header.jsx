import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.scss';
import { ReactComponent as Logo } from './../../img/logo.svg';

class Header extends React.Component {
  render() {
    console.log(this.props);
    return (
      <header className={s.pageHeader}>
        <div className={s.logoWrapper}>
          <NavLink to='/index'>
            <Logo className={s.pageHeaderLogo} width='152' height='19' alt='logo' />
          </NavLink>
        </div>
        <div>
          {this.props.description_start}
        </div>
      </header>
    );
  }
}

export default Header;