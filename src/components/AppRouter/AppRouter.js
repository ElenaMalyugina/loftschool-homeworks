import React from 'react';
import * as styles from './AppRouter.module.css';
import {Route, NavLink} from 'react-router-dom'
import Home from '../Home/Home';
import InboxList from '../InboxList/InboxList';
import InboxMail from '../InboxMail/InboxMail';
import OutboxList from '../OutboxList/OutboxList';
import OutboxMail from '../OutboxMail/OutboxMail';

export default class AppComponent extends React.Component{
    state={
        sectionName: 'Home'
    }

    render(){
       
        return  <div className={styles.wrapper}>
                    <div className={styles.container}>
                        <nav className={styles.nav}>
                            <ul className={`${styles.navList} ${'t-nav-list'}`}>
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
                                    >Inbox
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
                            <Route path={this.props.match.url + '/inbox'} exact component={InboxList}/>
                            <Route path={this.props.match.url + '/inbox/:id'} component={InboxMail}/>
                            <Route path={this.props.match.url + '/outbox'} exact component={OutboxList}/>
                            <Route path={this.props.match.url + '/outbox/:id'} component={OutboxMail}/>
                        </div>
                    
                    </div>
                </div>
                
    }
} 