import React, { PureComponent } from 'react';

const { Provider, Consumer: AuthConsumer } = React.createContext();

class AuthProvider extends PureComponent {
  state={
    email: '',
    authorizeError: '',
    isAuthorized: false,
    authorize: this.authorize.bind(this), 
    logout: this.logout.bind(this)
  }
  
    
  authorize(email, password){   
    debugger;
      if(email === 'stu@dent.com' && password==='123'){
        this.setState({
          isAuthorized: true,
          email: email,
          authorizeError: ''
        });
      }
      else{
        this.setState({authorizeError: 'Email или пароль введён не верно'})
      }    
  } 
  
  logout(){
    this.setState({isAuthorized: false})
  }

  getProviderValue(){
    debugger;
    return {
      email: '', 
      isAuthorized: false, 
      authorizeError: '', 
      authorize: this.authorize, 
      logout: this.logout
    }

  }

  render() {
    const { children } = this.props;
    return <Provider value={this.state}>{children}</Provider>;
  }
}

const TestProvider = Provider;

export { AuthProvider, AuthConsumer, TestProvider };
