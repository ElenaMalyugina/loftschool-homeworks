import React from 'react';
import {Link} from 'react-router-dom';
import * as styles from './MailList.module.css';

export default class MailList extends React.Component {

    render(){
        let{data, match, type}= this.props;

        let mailList= data.map((el)=><Link key={el.id} className={styles.link} to={match+'/'+el.id}>{el.body.slice(0, 50)+ '...'}</Link>)
        return  <div className={`${styles.container} ${'t-'+ type+ '-list'}`}>
                    {mailList}
                </div>
    }

}