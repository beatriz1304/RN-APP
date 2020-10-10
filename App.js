import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import Navigations from '_navigations'

import ENV from './.env.js'

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  request: (operation) => {
    const token = ENV.EXPO_PERSONAL_GITHUB_ACCESS_TOKEN
    if (token) {
      operation.setContext({
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
    }
  },
})

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Navigations />
    </ApolloProvider>
  )
}
