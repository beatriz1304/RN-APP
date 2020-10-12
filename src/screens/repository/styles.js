import { StyleSheet } from 'react-native'
import { Mixins } from '_styles'

const styles = StyleSheet.create({
  title: { marginVertical: Mixins.scaleSize(24), paddingLeft: Mixins.scaleSize(16) },
  readme: { marginTop: Mixins.scaleSize(20) },
})

export default styles
