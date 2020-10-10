import { StyleSheet } from 'react-native'

import { Colors, Mixins } from '_styles'

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.BLUE_2,
    padding: Mixins.scaleSize(12),
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: Mixins.scaleSize(16),
    borderRadius: Mixins.scaleSize(50),
  },
})

export default styles
