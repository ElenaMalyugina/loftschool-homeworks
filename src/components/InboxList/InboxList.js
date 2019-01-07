import React, { Component } from 'react';
import MailList from "../MailList";
import {withData} from '../../context/Data/Data';

class Inboxlist extends Component{

    render(){
        console.log(this.props);

        return <MailList data={this.props.data.inbox}/>
    }
}

export default withData(Inboxlist);