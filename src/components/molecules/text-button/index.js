import React from 'react'

import { NativeButton, BaseText } from '_atoms'
import { Colors } from '_styles'

import styles from './styles'

const TextButton = ({ onPress, children }) => (
  <NativeButton onPress={onPress} style={styles.button}>
    <BaseText color={Colors.WHITE} isBold>
      {children}
    </BaseText>
  </NativeButton>
)

export default TextButton
