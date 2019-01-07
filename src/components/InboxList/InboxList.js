import React, { Component } from 'react';
import MailList from "../MailList";
import {withData} from '../../context/Data/Data';

class Inboxlist extends Component{

    render(){
        return <MailList data={this.props.data.inbox} match={this.props.match.url} type="inbox"/>
    }
}

export default withData(Inboxlist);