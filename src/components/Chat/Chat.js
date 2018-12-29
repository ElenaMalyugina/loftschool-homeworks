import React from 'react';
import Message from '../Message/Message';
import './Chat.css';

export default class Chat extends React.Component{
    state={
        messageInput: '', 
        messages: []
    }
    
    changeInputMessage = e => {
        this.setState({messageInput: e.target.value})
    }

    sendMessageOnEnter = e => {
        if(e.key === 'Enter' && this.state.messageInput){
            this.setState((prev)=>{
                prev.messages.push({
                    /*не проходит тесты, хотя я не согласна, что такие вещи должны быть без id, 
                    потому что можно создать сообщения с одинаковым текстом, а это противоречит тому, что ключ должен быть уникальным*/
                    /*ndx: Math.random(),*/
                    text:prev.messageInput
                });
                prev.messageInput ='';
                return prev;
            })
        }
    }    

    render(){
        let messSet=this.state.messages.map(el=><Message key={el} text={el.text}/>)

        return  <div className='chat' >
                    <div className='message-list'>
                        <div className="messages">
                            {messSet}
                        </div>
                    </div>
                    <input className='input-message' value={this.state.messageInput} onChange={this.changeInputMessage} onKeyPress={this.sendMessageOnEnter}/>         
                </div>

    }
} 