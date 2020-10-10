import { StyleSheet } from 'react-native'

import { Mixins } from '_styles'

const styles = StyleSheet.create({
  card: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  repoName: { flexDirection: 'row', alignItems: 'center' },
  repoIcon: { marginRight: Mixins.scaleSize(8) },
})

export default styles
