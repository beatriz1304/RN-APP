import React from 'react'
import { ActivityIndicator } from 'react-native'

import { Colors } from '_styles'

import styles from './styles'

const Loader = () => (
  <ActivityIndicator color={Colors.BLACK} size='large' style={styles.loader} testID='loader' />
)

export default Loader
