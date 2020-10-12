import { StyleSheet } from 'react-native'

import { Mixins } from '_styles'

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', marginBottom: Mixins.scaleSize(6) },
  icon: { marginRight: Mixins.scaleSize(4) },
})

export default styles
