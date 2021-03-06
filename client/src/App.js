import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ApolloClient } from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import Home from './pages/home'
import EditRecipePage from './pages/editRecipe'
import AddRecipePage from './pages/addRecipe'
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
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={(props) => <Home {...props} title="Home Page" />} />
          <Route path="/add" exact render={(props) => <AddRecipePage {...props} title="Add Recipe Page" />} />
          <Route path="/recipe/:id" exact render={(props) => <RecipePage {...props} title="Recipe Page" />} />
          <Route path="/recipe/edit/:id" exact render={(props) => <EditRecipePage {...props} title="Edit Recipe Page" />} />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
