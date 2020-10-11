import React from 'react'
import { SvgXml } from 'react-native-svg'
import { Colors, Mixins } from '_styles'

const issue = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"></path></svg>`
const Issue = ({ style, fill }) => (
  <SvgXml
    xml={issue}
    width={Mixins.scaleSize(16)}
    height={Mixins.scaleSize(16)}
    style={style}
    fill={fill || Colors.GRAY}
  />
)

export default Issue
