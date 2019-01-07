import React from 'react';
import * as styles from './Mail.module.css';

export default class Mail extends React.Component{

    render(){
       
        return <div className={styles.container}>
                    <p className={"t-mail-" + this.props.type}>
                        {this.props.type}: &nbsp; 
                        <strong>{this.props[this.props.type]}</strong>
                    </p>
                    <p className="t-mail-body">{this.props.body}</p>
                    
                </div>
    }
}