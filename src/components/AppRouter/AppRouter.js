// Реализуйте роутер
// Вам нужно определить корневой роут, который будет вести на страницу поиска.
// Роут шоу должен принимать id в параметрах.
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Search from '../Search/Search';
import './AppRouter.css';

export const AppRouter =()=>(
    <div className="App">
    <Switch>
        <Route exact path="/" component= {Search} />
        {/*<Route exact path="/shows/" component= {Home} />*/}
    </Switch>
    </div>
)




