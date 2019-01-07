import React from 'react';
import {Link} from 'react-router-dom';
import * as styles from 'MailList.module.css';

export default class MailList extends React.Component {

    render(){
        let mailList= [].map((el)=><Link className={styles.link}>{el.body}</Link>)
        return  <div class={styles.container}>
                    {mailList}
                </div>
    }

}