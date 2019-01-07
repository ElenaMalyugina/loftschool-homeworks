import React from 'react';
import {Link} from 'react-router-dom';
import * as styles from './MailList.module.css';

export default class MailList extends React.Component {

    render(){
        
        let mailList= this.props.data.map((el)=><Link key={el.id} className={styles.link} to={this.props.match+'/'+el.id}>{el.body.slice(0, 50)+ '...'}</Link>)
        return  <div className={`${styles.container} ${'t-'+ this.props.type+ '-list'}`}>
                    {mailList}
                </div>
    }

}