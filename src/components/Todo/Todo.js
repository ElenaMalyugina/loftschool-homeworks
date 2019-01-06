import React, { PureComponent } from 'react';
import Card from '../Card';
import './Todo.css';
import withLocalstorage from '../../HOCs/withLocalstorage';

class Todo extends PureComponent {
  state = {
    inputValue: ''
  };  

  getId() {    
    let savedData = this.props.savedData();

    if(!savedData){
      savedData=[];
    }
    const biggest = savedData.reduce((acc, el) => Math.max(acc, el.id), 0);
    return biggest + 1;
  }

  handleChange = event => {
    this.setState({inputValue: event.target.value})
  };

  createNewRecordByEnter = event => {
    if(event.keyCode===13){
      this.createNewRecord();
    }
  };

  toggleRecordComplete = event => {
    let id = event.target.getAttribute('data-todo-id');
    this.props.updateData(id);    
    this.forceUpdate();
  };

  createNewRecord = () => {
    if(this.state.inputValue.length){
      this.props.saveData({
        id: this.getId(),
        text :this.state.inputValue,
        isCompleted: false
      });

      this.setState({inputValue: ''});     
    }
  };

  render() {
    let savedData= this.props.savedData();
    let {inputValue} = this.state;

    return  <Card title="Список дел">
              <div className="todo t-todo-list"  onKeyUp={this.createNewRecordByEnter}>
                <div className="todo-item todo-item-new">
                  <input placeholder="Введите задачу" type="text" className="todo-input t-input" value={inputValue} onChange={this.handleChange}/>
                  <span className="plus t-plus" onClick={this.createNewRecord}>+</span>
                </div>
                
                  {savedData && savedData.length ?                   
                    savedData.map(el=>this.renderRecord(el))
                    :
                    this.renderEmptyRecord()                  
                  }
                
              </div>  
            </Card>;
  }

  renderEmptyRecord() {
    return <div className="todo-item t-todo" key={0}>
              <p className="todo-item__text">Задач нет</p>
            </div>;
  }

  renderRecord = record => {
    let{id, text, isCompleted} = record;
    return <div className="todo-item t-todo" key={id}>
              <p className="todo-item__text">{text}</p>
              <span className="todo-item__flag t-todo-complete-flag" data-todo-id={id} onClick={this.toggleRecordComplete}>{isCompleted ? '[x]': '[0]'}</span>
          </div>;
  };
}

export default withLocalstorage('todo-app', [])(Todo);
