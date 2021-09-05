import React ,{Component, Fragment}from 'react'
import './App.css'
import Home from './Components/Home'
import Cart from './Components/Cart'
import Checkout from './Components/Checkout'
import {Provider} from 'react-redux'
import {Switch,BrowserRouter,Route} from 'react-router-dom'
import store from './store'

class App extends Component {
  render(){
    return(
      <BrowserRouter>
      <Provider store={store}>
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/cart' component={Cart}/>
      <Route exact path='/checkout' component={Checkout}/>
    </Switch>
    </Provider>
    </BrowserRouter>
    )}
}

export default App;


/**
 * 
 *
 * 
 * 
 * 
 */