import { StyleSheet } from 'react-native'

import { Colors, Mixins } from '_styles'

const styles = StyleSheet.create({
  chip: {
    paddingVertical: Mixins.scaleSize(8),
    paddingHorizontal: Mixins.scaleSize(12),
    backgroundColor: Colors.GRAY_4,
    borderRadius: Mixins.scaleSize(8),
  },
})

export default styles
