import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../Components/Home/Home'
import Playing from '../Components/Playing/Playing'

const Routes = () => {
    return(
        <Router>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/playing' component={Playing} />
            </Switch>
        </Router>
    )
}

export default Routes