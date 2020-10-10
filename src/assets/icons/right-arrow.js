import React from 'react'
import { SvgXml } from 'react-native-svg'
import { Colors, Mixins } from '_styles'

const rightArrow = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="6.857" height="12" viewBox="0 0 6.857 12">
<defs>
  <clipPath id="clip-path">
    <path id="Path_24267" data-name="Path 24267" d="M12.788-13,8.251-8.463a.857.857,0,0,0,0,1.212.857.857,0,0,0,1.212,0l5.143-5.143a.857.857,0,0,0,0-1.212L9.463-18.749a.857.857,0,0,0-1.212,0,.857.857,0,0,0,0,1.212Z" transform="translate(-8 19)" fill="#2a295c"/>
  </clipPath>
  <clipPath id="clip-path-2">
    <path id="Path_24266" data-name="Path 24266" d="M-1586,443.143H-7.143V-222H-1586Z" transform="translate(1586 222)" fill="#cccccd"/>
  </clipPath>
  <clipPath id="clip-path-3">
    <rect id="Rectangle_3981" data-name="Rectangle 3981" width="20.571" height="20.571" fill="#cccccd"/>
  </clipPath>
  <clipPath id="clip-path-4">
    <path id="Path_24265" data-name="Path 24265" d="M8-7h6.857V-19H8Z" transform="translate(-8 19)" fill="#cccccd"/>
  </clipPath>
</defs>
<g id="Group_1386" data-name="Group 1386" clip-path="url(#clip-path)">
  <g id="Group_1385" data-name="Group 1385" transform="translate(-1366.286 -174)" clip-path="url(#clip-path-2)">
    <g id="Group_1384" data-name="Group 1384" transform="translate(1359.429 169.714)" style="isolation: isolate">
      <g id="Group_1383" data-name="Group 1383" transform="translate(0 0)" clip-path="url(#clip-path-3)">
        <g id="Group_1382" data-name="Group 1382" transform="translate(6.857 4.286)" clip-path="url(#clip-path-4)">
          <path id="Path_24263" data-name="Path 24263" d="M3-24H18.429V-3.429H3Z" transform="translate(-7.286 19.714)" fill="#cccccd"/>
          <path id="Path_24264" data-name="Path 24264" d="M-5-29H24.143V.143H-5Z" transform="translate(-6.143 20.429)" fill="#cccccd"/>
        </g>
      </g>
    </g>
  </g>
</g>
</svg>
`
const RightArrow = ({ style }) => (
  <SvgXml
    xml={rightArrow}
    width={Mixins.scaleSize(16)}
    height={Mixins.scaleSize(16)}
    style={style}
  />
)

export default RightArrow
