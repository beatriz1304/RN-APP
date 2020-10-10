import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import Navigations from '_navigations'
import {
  useFonts,
  Montserrat_700Bold,
  Montserrat_600SemiBold,
  Montserrat_400Regular,
} from '@expo-google-fonts/montserrat'
import { AppLoading } from 'expo'

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
  let [fontsLoaded] = useFonts({
    Montserrat_700Bold,
    Montserrat_600SemiBold,
    Montserrat_400Regular,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <ApolloProvider client={client}>
      <Navigations />
    </ApolloProvider>
  )
}
