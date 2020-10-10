import { StyleSheet } from 'react-native'

import { scaleSize } from '_styles/mixins'

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: scaleSize(26),
    paddingBottom: scaleSize(24),
    flex: 1,
    backgroundColor: 'white',
  },
})

export default styles
