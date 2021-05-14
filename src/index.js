import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from '@apollo/client/react'
import { ApolloClient, InMemoryCache } from '@apollo/client';

import App from './App'

const client = new ApolloClient({
  uri: 'https://graphql.fauna.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer fnAEJJUwz6ACDaFUNsgn5sSiYBuRy7tU7Miyv4IP`,
  }
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
