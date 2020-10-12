import React from 'react'
import { SvgXml } from 'react-native-svg'
import { Colors, Mixins } from '_styles'

const person = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M10.5 5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm.061 3.073a4 4 0 10-5.123 0 6.004 6.004 0 00-3.431 5.142.75.75 0 001.498.07 4.5 4.5 0 018.99 0 .75.75 0 101.498-.07 6.005 6.005 0 00-3.432-5.142z"></path></svg>`
const Person = ({ style, fill }) => (
  <SvgXml
    xml={person}
    width={Mixins.scaleSize(16)}
    height={Mixins.scaleSize(16)}
    style={style}
    fill={fill || Colors.GRAY}
  />
)

export default Person
