import React from 'react';
import * as styles from './AppRouter.module.css';
import {NavLink} from 'react-router-dom'

export default class AppComponent extends React.Component{

    render(){
        
        return  <div className={styles.wrapper}>
                    <div className={styles.container}>
                        <nav className={styles.nav}>
                            <ul className={styles.navList}>
                                <li className={styles.navElement}>
                                    <NavLink to="home">Home</NavLink>
                                </li>
                                <li className={styles.navElement}>
                                    <NavLink to="inbox">inbox</NavLink>
                                </li>
                                <li className={styles.navElement}>
                                    <NavLink to="outbox">Outbox</NavLink>
                                </li>
                            </ul>
                        
                        </nav>
                        <div className={styles.content}>
                            <h3 className={styles.title}>Home</h3>
                        </div>
                    
                    </div>
                </div>
    }
} 