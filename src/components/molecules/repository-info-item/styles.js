import { StyleSheet } from 'react-native'
import { Colors, Mixins } from '_styles'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    paddingLeft: Mixins.scaleSize(16),
  },
  icon: {
    marginRight: Mixins.scaleSize(16),
    borderRadius: Mixins.scaleSize(4),
    height: Mixins.scaleSize(32),
    width: Mixins.scaleSize(32),
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Mixins.scaleSize(16),
    paddingRight: Mixins.scaleSize(16),
    borderBottomColor: Colors.GRAY_2,
    borderBottomWidth: 1,
  },
})

export default styles
