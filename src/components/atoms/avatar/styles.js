import { StyleSheet } from 'react-native'

import { scaleSize } from '_styles/mixins'

const styles = StyleSheet.create({
  avatar: {
    width: scaleSize(150),
    height: scaleSize(150),
    borderRadius: scaleSize(80),
  },
})

export default styles
