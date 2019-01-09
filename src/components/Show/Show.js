import React from 'react';
import {getShowInfo} from '../../api.js';
import './Show.css';

export default class Show extends React.Component{  
    /*можно обойтись без state.showId, остаавлено дял тестов, непонятно, зачем предполагаются лишние движения */
    state={
        showId: '',
        data: null
    }
        
    componentDidUpdate(prevProps){
        if(prevProps.showId!== this.props.showId){
            getShowInfo(this.props.showId)
                .then((data)=>this.setState({data: data}))
        }
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