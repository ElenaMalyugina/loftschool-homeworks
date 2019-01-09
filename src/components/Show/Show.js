import React from 'react';
import {getShowInfo} from '../../api.js';
import './Show.css';

export default class Show extends React.Component{  

    state={
        showId: '',
        data: null
    }


    
    componentDidUpdate(){
        if(this.state.data ==null){
            getShowInfo(this.state.showId)
                .then((data)=>this.setState({data: data}))
                
        }        
    }


    static getDerivedStateFromProps(props, state){        
        if(props.showId!== state.showId){
            return {
                data: null,
                showId: props.showId      
            }
        }
        
        return null;
    }


    render(){
        if(this.state.data){
            let {image, name, genres, summary} = this.state.data;

            return  <div className="show">
                        <img className="show-image" src={image.medium} alt="film"/>
                        <h2 className="show-label t-show-name">{name}</h2>
                        <p className="show-text t-show-genre"><strong>Жанр: </strong>{genres.join(', ')}</p>
                        <p className="show-text t-show-summary" dangerouslySetInnerHTML={{__html: summary}}></p>            
                    </div>
        }
        else{             
            return <p className="show-text t-show-info">Шоу не выбрано</p>
        }
    }
}