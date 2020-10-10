import { StyleSheet } from 'react-native'

import { scaleSize } from '_styles/mixins'

const styles = StyleSheet.create({
  avatar: {
    width: scaleSize(100),
    height: scaleSize(100),
    borderRadius: scaleSize(80),
  },
})

export default styles
