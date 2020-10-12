import React from 'react'
import { View } from 'react-native'

import { BaseText } from '_atoms'

import styles from './styles'

const Chip = ({ text, style }) => (
  <View style={[styles.chip, style]}>
    <BaseText>{text}</BaseText>
  </View>
)

export default Chip
