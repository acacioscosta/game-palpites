import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../Pages/Home'
import Playing from '../Pages/Playing'
import Finished from '../Pages/Finished'
import NoPossible from '../Pages/NoPossible'

const Routes = () => {
    return(
        <Router>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/playing' component={Playing} />
                <Route exact path='/finished' component={Finished} />
                <Route exact path='/noPossible' component={NoPossible} />
            </Switch>
        </Router>
    )
}

export default Routes