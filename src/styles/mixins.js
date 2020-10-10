import { Dimensions, PixelRatio } from 'react-native'

const WINDOW_WIDTH = Dimensions.get('window').width
const guidelineBaseWidth = 360

export const scaleSize = (size) => (WINDOW_WIDTH / guidelineBaseWidth) * size

export const scaleFont = (size) => size * PixelRatio.getFontScale()
