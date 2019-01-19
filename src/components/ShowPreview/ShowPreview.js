// Реализуйте компонент превью шоу.
// Он должен показывать название, описание и картинку шоу.
import React from 'react';
import * as styles from './ShowPreview.module.css';
import { Link } from 'react-router-dom';

const ShowPreview=(props)=>{
        let {id, image, name, summary} = props.data;
        return <div className={`t-preview ${styles.container}`}>
                    <div>
                        <Link className={"t-link"} to={'/show/'+id} style={ {display: 'block'}}>{name}</Link>
                        <img src={image.medium} alt={name}/>
                    </div>
                    <div dangerouslySetInnerHTML={{__html: summary}}></div>
                </div>
    
}

export default ShowPreview

