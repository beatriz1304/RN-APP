import { StyleSheet } from 'react-native'
import { Mixins } from '_styles'

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center' },
  circle: {
    width: Mixins.scaleSize(12),
    height: Mixins.scaleSize(12),
    borderRadius: Mixins.scaleSize(12),
    marginRight: Mixins.scaleSize(4),
  },
})

export default styles
