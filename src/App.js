import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './Components/Home/Home'
import Gaming from './Components/Gaming/Gaming'
import './styles/App.css'

export default function App() {

  return (
    <Router>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/gaming' component={Gaming}></Route>
    </Router>
  )

}