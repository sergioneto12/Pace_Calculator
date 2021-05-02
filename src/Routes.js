import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './Views/Main';
import Title from './Views/AboutCalculator';
import About from './Views/About';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/about' component={About}></Route>
                <Route path='/about-calculator' component={Title}></Route>
                <Route exact path='/' component={Main}></Route>
            </Switch>
        </BrowserRouter>
    );
}
