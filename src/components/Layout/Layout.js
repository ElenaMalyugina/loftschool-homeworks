import React, { Fragment, PureComponent } from 'react';
import SectionTitle from '../SectionTitle';
import './Layout.css';

class Layout extends PureComponent {
  state={
    classWithHeader: '',
    classWithFooter:''
  }

  componentDidMount(){
    const{header, footer} = this.props;    
    header && this.setState({classWithHeader: 'main--with-header'});  
    footer && this.setState({classWithFooter: 'main--with-footer'});
   
  }

  /*DidUpdate?*/
  
  render() {
    const{header, footer, children} = this.props;  
    const{classWithHeader, classWithFooter} = this.state;

    return  <Fragment>
              {this.renderHeader(header)}
              <main className={`${'main'} ${classWithHeader} ${classWithFooter}`}>
                {children}
              </main>
              {this.renderFooter(footer)}
            </Fragment>;
  }

  renderHeader(HeaderChild) {   
    if(HeaderChild){      
      let child=(<SectionTitle className="header__title" children='Header' />);       
      return <HeaderChild children={child}/>;
    }
    else{
      return '';
    }
  }

  renderFooter(FooterChild) {
    if(FooterChild){    
      let child=(<SectionTitle className="header__title" children='Footer' />);
      return <FooterChild children={child}/>; 
    }
    else{
      return '';
    }   
  }
}

export default Layout;
