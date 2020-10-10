import { StyleSheet } from 'react-native'

import { scaleSize } from '_styles/mixins'
import { Colors } from '_styles'

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.WHITE,
    padding: scaleSize(12),
    borderColor: Colors.GRAY_3,
    borderBottomWidth: scaleSize(1),
  },
})

export default styles
