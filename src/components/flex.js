import React from "react"
import DynamicComponent from "./dynamicComponent"
import { cleanUndefined } from "../lib/utils"
const Flex = ({ blok }) => {
  var direction = cleanUndefined(blok.direction[0])
  const wrap = cleanUndefined(blok.wrap[0])
  const border_style_sides = cleanUndefined(blok.border_style_sides[0])
  const justify_content = cleanUndefined(blok.justify_content[0])
  var support_responsive = ""
  if (direction === "") direction = "flex-row"
  if (blok.support_responsive === "1" && direction !== "") {
    direction = "sm:" + direction
    if (direction === "sm:flex-row-reverse") {
      support_responsive = "flex-col-reverse"
    } else {
      support_responsive = "flex-col"
    }
  } else {
  }

  const padding_top = cleanUndefined(blok.padding_top[0])
  const padding_bot = cleanUndefined(blok.padding_bot[0])
  const padding_left = cleanUndefined(blok.padding_left[0])
  const padding_right = cleanUndefined(blok.padding_right[0])
  const background_color = cleanUndefined(blok.background_color[0])
  const border_radius = cleanUndefined(blok.border_radius[0])

  const margin_top = `${blok.margin_top ? blok.margin_top : "5"}px`
  const margin_bot = `${blok.margin_bot ? blok.margin_bot : "5"}px`
  const margin_left = `${blok.margin_left ? blok.margin_left : "5"}px`
  // const margin_right = `${blok.margin_right ? blok.margin_right : "5"}px`

  return (
    <div>
      <div
        className={`flex container items-center p-2 ${justify_content} ${direction} ${wrap} ${border_style_sides} ${support_responsive} ${padding_top} ${padding_bot} ${padding_left} ${padding_right} ${background_color} ${border_radius}`}
        style={{
          marginTop: margin_top,
          marginBottom: margin_bot,
          marginLeft: margin_left,
          // marginRight: '50px',
        }}
      >
        {blok.elements.map(blok => (
          <div key={blok._uid} className="px-2 continuum">
            <DynamicComponent blok={blok} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Flex
