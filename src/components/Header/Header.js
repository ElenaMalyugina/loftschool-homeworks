import React, { PureComponent, Fragment } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import Button from '../Button';
import './Header.css';

class Header extends PureComponent {
  
  render() {
    const {children} = this.props;
    return  <AuthConsumer>
              {({isAuthorized, email, logout})=>
                <header className="header">                  
                  {isAuthorized ? 
                    <Fragment>
                    {children}
                    <div className="header__content">
                      <div className="header-menu">
                        <p className="header-menu__email header-email t-header-email">{email}</p>
                        <Button children="Выйти" onClick={logout} className="t-logout"/>
                      </div>  
                    </div> 
                    </Fragment>
                    : ''} 
                </header>}
            </AuthConsumer>
  }
}

export default Header;
