import React, { Component } from 'react';
import MailList from "../MailList";
import {withData} from '../../context/Data/Data';

class OutboxList extends Component{

    render(){
        return <MailList data={this.props.data.outbox} match={this.props.match.url} type="outbox"/>
    }
}

export default withData(OutboxList);