import React from 'react';
import './Show.css';

function Show(WrappedComponent){
    return class extends React.Component {
        state={
            showId: '',
            data: null
        }
    
        getFilmData(id){
            let urlId;
    
            switch(id){
                case 'house' : 
                    urlId= 118;
                    break;
                case 'santaBarbara' : 
                    urlId= 5909;
                    break;   
                case 'bigBang' : 
                    urlId= 66;
                    break;
                default :
                    urlId= 0;         
            }
    
            let url = 'http://api.tvmaze.com/shows/'+urlId;
    
            let p = fetch(url);
    
            return p;        
        }
    
    
        componentDidMount(){
            if(this.props.showId){
                this.getFilmData(this.props.showId)
                    .then(data=> data.json())
                    .then((data)=>this.setState({data: data}))
                    .catch(e=>this.setState({data: null}))
            }
        }

        render() {
            if(this.state.data){
                return <WrappedComponent {...this.state} />
            }            
            else{             
                return <p className="show-text t-show-info">Шоу не выбрано</p>
            }
        }
    }
}

class ShowComponent extends React.Component{  
    render(){
        let {image, name, genres, summary} = this.props.data;

            return  <div className="show">
                        <img className="show-image" src={image.medium} alt="film"/>
                        <h2 className="show-label t-show-name">{name}</h2>
                        <p className="show-text t-show-genre"><strong>Жанр: </strong>{genres.join(', ')}</p>
                        <p className="show-text t-show-summary" dangerouslySetInnerHTML={{__html: summary}}></p>            
                    </div>
        }    
}


export default Show(ShowComponent)


