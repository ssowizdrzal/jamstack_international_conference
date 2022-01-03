import React from "react"
import DynamicComponent from "../dynamicComponent"
import { cleanUndefined } from "../../lib/utils"
const FeatureList = ({ blok }) => {
  var direction = cleanUndefined(blok.direction[0])
  const wrap = cleanUndefined(blok.wrap[0])
  const border_style_sides = cleanUndefined(blok.border_style_sides[0])
  const justify_content = cleanUndefined(blok.justify_content[0])
  var support_responsive = ""
  if (direction === "") direction = "flex-row"
  if (blok.support_responsive === "1" && direction !== "") {
    direction = "lg:" + direction
    if (direction === "lg:flex-row-reverse") {
      support_responsive = "flex-col-reverse"
    } else {
      support_responsive = "flex-col"
    }
  } else {
  }
  const title = cleanUndefined(blok.title)
  const padding_top = cleanUndefined(blok.padding_top[0])
  const padding_bot = cleanUndefined(blok.padding_bot[0])
  const padding_left = cleanUndefined(blok.padding_left[0])
  const padding_right = cleanUndefined(blok.padding_right[0])
  const background_color = cleanUndefined(blok.background_color[0])
  const border_radius = cleanUndefined(blok.border_radius[0])

  const margin_top = `${blok.margin_top ? blok.margin_top : "5"}px`
  const margin_bot = `${blok.margin_bot ? blok.margin_bot : "5"}px`
  const margin_left = `${blok.margin_left ? blok.margin_left : "5"}px`

  const width_string = cleanUndefined(blok.width)
  const width_int = parseInt(blok.width)
  var widthVal = ""
  if (width_int >= 0) {
    widthVal = `${cleanUndefined(width_string)}px`
  } else {
    widthVal = "inherit"
  }

  return (
    <div
      className={`flex container pr-2 pb-2 ${justify_content} ${direction} ${wrap} ${border_style_sides} ${support_responsive} ${padding_top} ${padding_bot} ${padding_left} ${padding_right} ${background_color} ${border_radius}`}
      style={{
        marginTop: margin_top,
        marginBottom: margin_bot,
        marginLeft: margin_left,
        // marginRight: '50px',
        width: widthVal,
        backgroundSize: `${widthVal} auto`,
      }}
    > 
    
    { title? title: null}
      {blok.features.map(blok => (
        <div key={blok._uid} className="pr-2 pb-2">
          <DynamicComponent blok={blok} />
        </div>
      ))}
    </div>
  )
}

export default FeatureList
