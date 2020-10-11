import React from 'react'

import { NativeButton, BaseText } from '_atoms'
import { Colors } from '_styles'

import styles from './styles'

const TextButton = ({ style, onPress, textStyle, children }) => (
  <NativeButton onPress={onPress} style={[styles.button, style]}>
    <BaseText color={Colors.WHITE} isBold style={textStyle}>
      {children}
    </BaseText>
  </NativeButton>
)

export default TextButton
