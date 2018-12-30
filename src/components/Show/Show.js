import React from 'react';
import './Show.css';

export default class Show extends React.Component{  

    state={
        showId: '',
        data: null
    }

    
    componentDidUpdate(){
        if(this.state.data ==null){
            let urlId;

            switch(this.props.showId){
                case 'house' : 
                    urlId= 118;
                    break;
                case 'santaBarbara' : 
                    urlId= 5909;
                    break;   
                case 'bigBang' : 
                    urlId= 66;
                    break;     
            }

            let url = 'http://api.tvmaze.com/shows/'+urlId;

            let p = fetch(url);

            p.then(resp=>resp.json())
            .then(data=> {
               this.setState({data: data})
            }) 
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
        return  this.state.data ? 
                    <div className="show">
                        <img className="show-image" src={this.state.data.image.medium}/>
                        <h2 className="show-label t-show-name">{this.state.data.name}</h2>
                        <p className="show-text t-show-genre"><strong>Жанр: </strong>{this.state.data.genres.join(', ')}</p>
                        <p className="show-text t-show-summary" dangerouslySetInnerHTML={{__html: this.state.data.summary}}></p>            
                    </div>
                    : 
                    <p>Шоу не выбрано</p>


    }
}