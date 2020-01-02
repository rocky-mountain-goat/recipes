import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ApolloClient } from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import Home from './pages/home'
import RecipePage from './pages/recipe'
import './App.css'

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://localhost:4000/graphql'
});

const client = new ApolloClient({
  cache,
  link
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact render={(props) => <Home {...props} title="Home Page" />} />
            <Route path="/recipe/:id" render={(props) => <RecipePage {...props} title="Recipe Page" />} />
            <Route path="/recipe/:id/edit" render={(props) => <RecipePage {...props} title="Edit Recipe Page" />} />
          </Switch>
        </BrowserRouter>
      </div>
    </ApolloProvider>
  );
}

export default App;
