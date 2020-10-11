import React from 'react'
import { View } from 'react-native'

import { BaseText } from '_atoms'

import styles from './styles'

const Language = ({ name, color }) => (
  <View style={styles.container}>
    <View style={[styles.circle, { backgroundColor: color }]} />
    <BaseText fontSize={11}>{name}</BaseText>
  </View>
)

export default Language
