import { StyleSheet } from 'react-native'

import { scaleSize } from '_styles/mixins'

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'center',
    height: scaleSize(170),
  },
  content: {
    padding: scaleSize(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: { marginBottom: scaleSize(10) },
})
export default styles
