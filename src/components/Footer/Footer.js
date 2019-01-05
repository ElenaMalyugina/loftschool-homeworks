import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import './Footer.css';

class Footer extends PureComponent {
  render() {
    let message= 'Вы зашли в систему как ';

    return  <AuthConsumer >
              {({isAuthorized, email }) => <footer className="footer">
                {this.props.children}                
                <p className='footer-message t-footer'>{
                  isAuthorized? "Вы вошли как "+email : "Вы гость в этой системе"}</p>               
              </footer>}
            </AuthConsumer>
  }
}

export default Footer;
