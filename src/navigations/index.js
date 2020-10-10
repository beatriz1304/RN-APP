import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import AppNavigator from './app-navigator'

const RootNavigator = () => {
  const renderScreen = () => <AppNavigator />

  return (
    <SafeAreaProvider>
      <NavigationContainer>{renderScreen()}</NavigationContainer>
    </SafeAreaProvider>
  )
}

export default RootNavigator
