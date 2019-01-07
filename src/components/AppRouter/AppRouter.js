import React from 'react';
import * as styles from './AppRouter.module.css';
import {Route, NavLink} from 'react-router-dom'
import Home from '../Home/Home';
import InboxList from '../InboxList/InboxList';
import OutboxList from '../OutboxList/OutboxList';

export default class AppComponent extends React.Component{
    state={
        sectionName: 'Home'
    }

    render(){
        console.log(this.props.match);
        return  <div className={styles.wrapper}>
                    <div className={styles.container}>
                        <nav className={styles.nav}>
                            <ul className={styles.navList}>
                                <li className={styles.navElement}>
                                    <NavLink 
                                    to={this.props.match.url} 
                                    exact={true} 
                                    className={`${styles.link} ${'t-link-home'}`} 
                                    activeClassName={'active'}
                                    onClick={()=>this.setState({sectionName: 'Home'})}
                                    >Home
                                    </NavLink>
                                </li>
                                <li className={styles.navElement}>
                                    <NavLink 
                                    to={this.props.match.url+'/inbox'} 
                                    className={`${styles.link} ${'t-link-inbox'}`} 
                                    activeClassName={'active'}
                                    onClick={()=>this.setState({sectionName: 'Inbox'})}
                                    >inbox
                                    </NavLink>
                                </li>
                                <li className={styles.navElement}>
                                    <NavLink 
                                    to={this.props.match.url+'/outbox'}  
                                    className={`${styles.link} ${'t-link-outbox'}`} 
                                    activeClassName={'active'}
                                    onClick={()=>this.setState({sectionName: 'Outbox'})}
                                    >Outbox
                                    </NavLink>
                                </li>
                            </ul>
                        
                        </nav>
                        <div className={styles.content}>
                            <h3 className={styles.title}>{this.state.sectionName}</h3>
                            <Route path={this.props.match.url} exact component={Home}/>
                            <Route path={this.props.match.url + '/inbox'} component={InboxList}/>
                            <Route path={this.props.match.url + '/outbox'} component={OutboxList}/>
                        </div>
                    
                    </div>
                </div>
                
    }
} 