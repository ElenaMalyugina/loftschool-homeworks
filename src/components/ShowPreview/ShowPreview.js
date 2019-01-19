// Реализуйте компонент превью шоу.
// Он должен показывать название, описание и картинку шоу.
import React from 'react';
import * as styles from './ShowPreview.module.css';
import { Link } from 'react-router-dom';

const ShowPreview=(props)=>{
    if(props.data){
        let {id, image, name, summary} = props.data;

        return <div className={`t-preview ${styles.container}`}>                   
                        <Link className={"t-link"} to={'/shows/'+id}>{name}</Link>
                        {image? 
                            <img src={image.medium} alt={name}/>
                            :
                            ''
                        }
                    
                    <div dangerouslySetInnerHTML={{__html: summary}}></div>
                </div>
    }    
    else return '';
}

export default ShowPreview

