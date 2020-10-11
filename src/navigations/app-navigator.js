import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { HomeScreen, RepositoriesScreen, RepositoryScreen, ProfileScreen } from '_screens'

const Stack = createStackNavigator()

const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name='Home' component={HomeScreen} />
    <Stack.Screen name='Repositories' component={RepositoriesScreen} />
    <Stack.Screen name='Repository' component={RepositoryScreen} />
    <Stack.Screen name='Profile' component={ProfileScreen} />
  </Stack.Navigator>
)

export default AppNavigator
