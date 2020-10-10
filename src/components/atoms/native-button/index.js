import React from 'react'
import { TouchableNativeFeedback, TouchableOpacity, Platform } from 'react-native'

const NativeButton = (props) => {
  const Button = Platform.select({
    ios: () => TouchableOpacity,
    android: () => TouchableNativeFeedback,
  })()

  return <Button {...props} />
}

export default NativeButton
