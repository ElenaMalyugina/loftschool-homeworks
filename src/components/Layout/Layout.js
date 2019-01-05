import React, { Fragment, PureComponent } from 'react';
import SectionTitle from '../SectionTitle';
import './Layout.css';

class Layout extends PureComponent {
  render() {
    return  <Fragment>
              {this.renderHeader(this.props.header)}
                <main className="main main--with-header main--with-footer">
                  {this.props.children}
                </main>
              {this.renderFooter(this.props.footer)}
            </Fragment>;
  }

  renderHeader(HeaderChild) {  
    let child=(<SectionTitle className="header__title" children='Header' />);
       
    return <HeaderChild children={child}/>;
  }

  renderFooter(FooterChild) {
    return <FooterChild 
            children={<SectionTitle className="header__title" children='Footer'/>}             
          />;    
  }
}

export default Layout;
