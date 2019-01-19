// Реализуйте страницу шоу.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле show вашего стейта
// и экшн showRequest.

// В методе componentDidMount вам нужно будет диспатчить showRequest action
import React from 'react';
import * as styles from './ShowPage.module.css';
import { connect } from 'react-redux';
import {showRequest, showSuccess} from '../../actions';

class ShowPage extends React.Component{
    state={
        searchString: ''
    }

    componentDidMount(){               
        const { id } = this.props.match.params;
        this.props.showRequest(id);
    }

    render(){   
        let {showPage} = this.props.shows;       
        if(showPage){
           
            let {name, image, summary, _embedded} = showPage;
            
            let persons= _embedded ? _embedded.cast.map(el=> <div className="t-person" key={el.person.id}>
                                                            <p>{el.person.name}</p>
                                                            <img src={el.person.image.medium} alt={el.person.name}/>
                                                        </div> 
                                                  ): '';     
                                                       
            return <div>
                        <p>{name}</p>

                        {image?
                            <img src={image.medium} alt={name}/>: ''
                        }
                        
                        <div dangerouslySetInnerHTML={{__html: summary}}>
                            
                        </div>
                        <div className={styles.cast}>
                            {persons}                             
                        </div>
                    </div>
            }

            else return 'Загрузка...'
        }
        
}

const mapStateToProps = state => state;
const mapDispatchToProps = {showRequest, showSuccess};

export default connect( mapStateToProps, mapDispatchToProps)(ShowPage);