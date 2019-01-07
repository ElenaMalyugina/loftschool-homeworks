import React, { Component } from 'react';
import MailList from "../MailList";
import {withData} from '../../context/Data/Data';

class Inboxlist extends Component{

    render(){
        let{data, match} =this.props;

        return <MailList data={data.inbox} match={match.url} type="inbox"/>
    }
}

export default withData(Inboxlist);