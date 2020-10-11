import { StyleSheet } from 'react-native'

import { scaleSize } from '_styles/mixins'
import { Colors } from '_styles'

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: scaleSize(26),
    paddingBottom: scaleSize(24),
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
})

export default styles
