import React from 'react';
import * as styles from './LoginForm.module.css';
import { withAuth } from '../../context/Auth';
import {Link} from 'react-router-dom';

class LoginForm extends React.Component{
    state={
        email: '',
        password: ''
    }

    componentDidMount(){
        this.props.logout();
    }

    changeEmailHandler=(e)=>{
        this.setState({email: e.target.value})
    }

    changePasswordHandler=(e)=>{
        this.setState({password: e.target.value})
    }

    login=()=>{
        let {email, password} = this.state;
        
        this.props.authorize(email, password);
    }


    render(){
        let {email, password } =this.state;
        let {authError} = this.props;

        return  <div className={styles.bg}>
                    <div className={`${styles.form} ${'t-form'}`}>
                        <p>
                            <label htmlFor="email">
                                <span className={styles.labelText}>Почта</span>
                                <input className={`${styles.input} ${'t-input-email'}`} type="text" name="email" value={email} onChange={this.changeEmailHandler}/>
                            </label>
                        </p>
                        <p>
                            <label htmlFor="password">
                                <span className={styles.labelText}>Пароль</span>
                                <input className={`${styles.input} ${'t-input-password'}`} type="password" name="password" value={password} onChange={this.changePasswordHandler}/>
                            </label>
                        </p>
                        <p className={styles.error}>{authError}</p>
                        <div className={styles.buttons}>
                            
                            <Link to="/app">
                                <button className={`${styles.button} ${'t-login'}`} onClick={this.login}>Войти</button>
                            </Link>
                        </div>
                    </div>
                </div>
    }

}

export default withAuth(LoginForm)