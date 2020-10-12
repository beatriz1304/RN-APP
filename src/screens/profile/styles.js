import { StyleSheet } from 'react-native'

import { Colors, Mixins } from '_styles'

const styles = StyleSheet.create({
  container: { marginTop: Mixins.scaleSize(24) },
  card: {
    backgroundColor: Colors.WHITE,
    padding: Mixins.scaleSize(16),
    borderRadius: Mixins.scaleSize(10),
    marginHorizontal: Mixins.scaleSize(16),
    marginBottom: Mixins.scaleSize(20),
    shadowOffset: { width: 0, height: 3 },
    shadowColor: Colors.GRAY_4,
    shadowOpacity: 1,
    shadowRadius: 6,
  },
  avatarAndNameContainer: {
    marginBottom: Mixins.scaleSize(16),
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    marginRight: Mixins.scaleSize(12),
    height: Mixins.scaleSize(80),
    width: Mixins.scaleSize(80),
  },
  bio: {
    backgroundColor: Colors.GRAY_3,
    marginBottom: Mixins.scaleSize(16),
    padding: Mixins.scaleSize(10),
    borderRadius: Mixins.scaleSize(8),
  },
  contactContainer: { marginBottom: Mixins.scaleSize(12) },
  followersContainer: { flexDirection: 'row' },
  button: {
    padding: Mixins.scaleSize(4),
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  totalCountRepo: {
    paddingVertical: Mixins.scaleSize(4),
    paddingHorizontal: Mixins.scaleSize(10),
    borderRadius: Mixins.scaleSize(12),
  },
})

export default styles
