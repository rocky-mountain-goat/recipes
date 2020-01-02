import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AppolloClient from 'apollo-boost'
import './App.css'
import Home from './pages/home'

const client = new ApolloClient({
  uri: ''
})

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
