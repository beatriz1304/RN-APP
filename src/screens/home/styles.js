import { StyleSheet } from 'react-native'

import { Mixins, Colors } from '_styles'

const styles = StyleSheet.create({
  container: { backgroundColor: Colors.BACKGROUND, marginBottom: Mixins.scaleSize(30) },
  repoList: {
    marginHorizontal: Mixins.scaleSize(16),
    marginVertical: Mixins.scaleSize(20),
    borderRadius: Mixins.scaleSize(10),
    overflow: 'hidden',
  },
})

export default styles
