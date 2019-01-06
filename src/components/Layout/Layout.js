import React, { Fragment, PureComponent } from 'react';
import SectionTitle from '../SectionTitle';
import './Layout.css';

class Layout extends PureComponent {
  state={
    classWithHeader: '',
    classWithFooter:''
  }

  componentDidMount(){
    if(this.props.header){
      this.setState({classWithHeader: 'main--with-header'});
    }
    else{
      this.setState({classWithHeader: ''});
    }

    if(this.props.footer){
      this.setState({classWithFooter: 'main--with-footer'})
    }
    else{
      this.setState({classWithFooter: ''});
    }
  }

  /*DidUpdate?*/
  
  render() {
    return  <Fragment>
              {this.renderHeader(this.props.header)}
              <main className={`${'main'} ${this.state.classWithHeader} ${this.state.classWithFooter}`}>
                {this.props.children}
              </main>
              {this.renderFooter(this.props.footer)}
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
