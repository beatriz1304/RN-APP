import { StyleSheet } from 'react-native'

import { Mixins } from '_styles'

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  repoName: { flexDirection: 'row', alignItems: 'center' },
  repoIcon: { marginRight: Mixins.scaleSize(8) },
  description: { marginTop: Mixins.scaleSize(8), maxWidth: '95%' },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Mixins.scaleSize(12),
  },
  stars: { flexDirection: 'row', alignItems: 'center' },
  starIcon: { marginRight: Mixins.scaleSize(4) },
})

export default styles
