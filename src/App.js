import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './Components/Home/Home'
import Playing from './Components/Playing/Playing'
import './styles/App.css'

export default function App() {

  return (
    <Router>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/playing' component={Playing}></Route>
    </Router>
  )

}