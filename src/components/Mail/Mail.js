import React from 'react';
import * as styles from './Mail.module.css';

export default class Mail extends React.Component{

    render(){
       let{type, body, from, to}=this.props;
       debugger;
      
        return <div className={styles.container}>
                    <p className={"t-mail-" + type}>
                        {type}: &nbsp; 
                        <strong>{type==='from' ? from : to}</strong>
                    </p>
                    <p className="t-mail-body">{body}</p>   
                                  
                </div>                 
                
    }
}