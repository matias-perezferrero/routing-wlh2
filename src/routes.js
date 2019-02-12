import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home'
import Store from './components/Store'
import StoreHome from './components/StoreHome'
import Products from './components/Products'

export default class Routes extends Component {
  render() {
    return <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/store" render={props => {
        return (
          <Store {...props}>
            <Route path="/store" exact component={StoreHome} />
            <Route path="/store/:category" component={Products} />
          </Store>
        )
      }} />
      <Route component={NotFound} />
    </Switch>
  }  

}


function NotFound(props) {
  return (
    <div>
      <h1>404 page not found</h1>
    </div>
  )
}