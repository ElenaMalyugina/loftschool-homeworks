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
        this.props.authorize(this.state.email, this.state.password);
    }


    render(){
        return  <div className={styles.bg}>
                    <div className={`${styles.form} ${'t-form'}`}>
                        <p>
                            <label htmlFor="email">
                                <span className={styles.labelText}>Почта</span>
                                <input className={`${styles.input} ${'t-input-email'}`} type="text" name="email" value={this.state.email} onChange={this.changeEmailHandler}/>
                            </label>
                        </p>
                        <p>
                            <label htmlFor="password">
                                <span className={styles.labelText}>Пароль</span>
                                <input className={`${styles.input} ${'t-input-password'}`} type="password" name="password" value={this.state.password} onChange={this.changePasswordHandler}/>
                            </label>
                        </p>
                        <p className={styles.error}>{this.props.authError}</p>
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