import React, { Component } from 'react';
import MailList from "../MailList";
import {withData} from '../../context/Data/Data';

class OutboxList extends Component{

    render(){
        let{data, match}=this.props;
        return <MailList data={data.outbox} match={match.url} type="outbox"/>
    }
}

export default withData(OutboxList);