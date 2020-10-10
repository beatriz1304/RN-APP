import { StyleSheet } from 'react-native'

import { Mixins } from '_styles'

const styles = StyleSheet.create({
  repoList: {
    marginHorizontal: Mixins.scaleSize(16),
    marginVertical: Mixins.scaleSize(20),
    borderRadius: Mixins.scaleSize(10),
    overflow: 'hidden',
  },
})

export default styles
