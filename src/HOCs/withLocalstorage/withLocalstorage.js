import React, { Component } from 'react';
import { load, save, update } from '../../localstorage';

const withLocalstorage = (savedData ) => (Wrapped) => {   
    
    return class extends Component{

        componentDidMount(){
            this.savedData();
        }

        saveData=(data)=>{
           save(savedData, data);
        }

        savedData(){            
           return load(savedData);
        }

        updateData(id){
          update(savedData, id);             
        }        

        render(){
            return <Wrapped savedData={this.savedData} saveData={this.saveData} updateData={this.updateData}/>
        }
    }   

};

export default withLocalstorage;
