import React from 'react'
import { Text, View } from 'react-native'
import { AppLoading } from 'expo'

import styles from './styles'

import { scaleFont } from '_styles/mixins'

const BaseText = ({
  style,
  fontSize,
  color,
  lineHeight,
  isBold,
  isSemiBold,
  children,
  ...props
}) => {
  const chunkedStyles = [
    styles.text,
    fontSize && { fontSize: scaleFont(fontSize) },
    lineHeight && { lineHeight: scaleFont(lineHeight) },
    { color },
    isBold && styles.textBold,
    isSemiBold && styles.textSemiBold,
    style,
  ]

  return (
    <Text style={chunkedStyles} {...props}>
      {children}
    </Text>
  )
}

export default BaseText
