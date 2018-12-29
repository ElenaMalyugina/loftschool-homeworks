import React from 'react';
import './Form.css';

export default class Form extends React.Component{
    fields= [
        {
            type: 'text',
            name: 'firstname',
            label:'Имя', 
        },
        {
            type: 'text',
            name: 'lastname',
            label: 'Фамилия',
        },
        {
            type: 'password',
            name: 'password',
            label: 'Пароль',         
        }
    ]

    state = {
        isFormValid: false,

        fields:{
            firstname: {
                value: '',
                isValid: true,
                errorMessage: '',
                emptyMessage: "Нужно указать имя",
                incorrectMessage: "Имя указано неверно",
                correctValue: 'james'

            },
            lastname: {
                value: '',
                isValid: true,
                errorMessage: '',
                emptyMessage: "Нужно указать фамилию",
                incorrectMessage: "Фамилия указана неверно",
                correctValue: 'bond'
            },
            password: {
                value: '',
                isValid: true,
                errorMessage: '',
                emptyMessage: "Нужно указать пароль",
                incorrectMessage: "Пароль указан неверно",
                correctValue: '007'
            }
        }
    }
    
    validatorForm=((e)=>{   
        e.preventDefault();
        let keysFields = Object.keys(this.state.fields);

        this.setState((prevstate)=>{
            
            keysFields.forEach((el)=>{
                if(!prevstate.fields[el].value.length){                   
                    prevstate.fields[el].isValid = false;
                    prevstate.fields[el].errorMessage= prevstate.fields[el].emptyMessage                
                }
                else if(prevstate.fields[el].value !== prevstate.fields[el].correctValue){                
                    prevstate.fields[el].isValid = false;
                    prevstate.fields[el].errorMessage = prevstate.fields[el].incorrectMessage                
                }
                else{                
                    prevstate.fields[el].isValid = true;
                    prevstate.fields[el].errorMessage = '';
                }
            });

            return prevstate;
        }, 
        ()=>{
            let formValid= keysFields.every((el)=> this.state.fields[el].isValid ===true);
            this.setState({isFormValid: formValid})

        })        
    });

    changeInputHandler=(e)=>{    
        let name=e.target.getAttribute('name'); 
        let value = e.target.value; 

        this.setState((prevstate)=>{
            prevstate.fields[name].value = value;
            return prevstate;
        })
    } 
    
    
    clearValidator = ()=>{
        let keys = Object.keys(this.state.fields);

        keys.forEach((el)=>{
            this.setState((prevstate)=>{
                prevstate.fields[el].isValid = true;
                prevstate.fields[el].errorMessage= ''
                    return prevstate;
            });
        });
    }

    render(){
        let formFields=this.fields.map(el=>{
            let val= this.state.fields[el.name].value;

            return  <p className="field" key={el.name}>
                        <label className="field__label" htmlFor={el.name}>
                            <span className="field-label">{el.label}</span>
                        </label>
                        <input className={`${'field__input field-input t-input-'}${el.name}`} type={el.type} name={el.name} value={val} onChange={this.changeInputHandler} onFocus={this.clearValidator}/>
                        <span className={`${'field__error field-error t-error-'}${el.name}`}>{this.state.fields[el.name].errorMessage}</span>
                    </p>
        })
    

        return  !this.state.isFormValid ? (<form className="form" onSubmit={this.validatorForm}>
                    <h1>Введите свои данные, агент</h1>
                    {formFields} 
                    <div className='form__buttons'>
                        <input className="button t-submit" type="submit" value="Проверить"/>
                    </div>              
                </form> )
                : 
                (
                <img className='t-bond-image' src="assets/bond_approve.jpg" alt="james"/>
                )
    }
}