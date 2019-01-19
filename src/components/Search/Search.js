// Реализуйте страницу поиска.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле search вашего стейта
// и экшн searchRequest.

import React from 'react';
import * as styles from './Search.module.css';
import { connect } from 'react-redux';
import {searchRequest, searchSuccess} from '../../actions';
import ShowPreview from '../ShowPreview';

class Search extends React.Component{
    state={
        searchString: ''
    }

    inputHandler=(ev)=>{
        this.setState({searchString: ev.target.value})
    }

    searchHandler=()=>{
        const {searchRequest}= this.props;
        searchRequest(this.state.searchString);
    }

    render(){
        let previews = this.props.search.previews.map(el=> <ShowPreview key={el.id} data={el}/>);       

        return  <div>
                    <div className={styles.previewList}>
                        <input onChange={this.inputHandler} className={`${styles.input} t-input`} placeholder="Название сериала"/>
                        <div className={styles.buttonWrapper}>
                            <button className={`${styles.button} t-search-button`} onClick={this.searchHandler}>Найти</button>
                        </div>                    
                    </div>
                    {previews}
                </div>
                
    }

}

    const mapStateToProps = state => state;
    const mapDispatchToProps = {searchRequest, searchSuccess};
    
    export default connect( mapStateToProps, mapDispatchToProps)(Search);