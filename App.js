import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import Navigations from '_navigations'
import {
  useFonts,
  Montserrat_700Bold,
  Montserrat_600SemiBold,
  Montserrat_400Regular,
} from '@expo-google-fonts/montserrat'
import { AppLoading } from 'expo'

import ENV from './.env.js'

const token = ENV.EXPO_PERSONAL_GITHUB_ACCESS_TOKEN

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${token}`,
  },
})

const App = () => {
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

export default App
