import React from "react"
import { cleanUndefined } from "../lib/utils"
import DynamicComponent from "./dynamicComponent"

const Grid = ({ blok }) => {
  const gap = cleanUndefined(blok.gap[0])
  var grid_flow = cleanUndefined(blok.grid_flow[0])
  const grid_columns = cleanUndefined(blok.grid_columns[0])
  const grid_rows = cleanUndefined(blok.grid_rows[0])
  const border_style_sides = cleanUndefined(blok.border_style_sides[0])
  const justify_content = cleanUndefined(blok.justify_content[0])
  var support_responsive = ""
  // if (grid_flow === "") grid_flow = "grid-flow-row"
  // if (blok.support_responsive === "1" && grid_flow !== "") {
  //   grid_flow = "sm:" + grid_flow
  //   support_responsive = "grid-flow-col"
  // } else {
  // }

  const padding_top = cleanUndefined(blok.padding_top[0])
  const padding_bot = cleanUndefined(blok.padding_bot[0])
  const padding_left = cleanUndefined(blok.padding_left[0])
  const padding_right = cleanUndefined(blok.padding_right[0])
  const background_color = cleanUndefined(blok.background_color[0])
  const border_radius = cleanUndefined(blok.border_radius[0])
  return (
    <div >
      <ul
        className={`grid p-2 container ${justify_content} ${gap} ${grid_flow} ${grid_columns} ${grid_rows} ${border_style_sides} ${support_responsive} ${padding_top} ${padding_bot} ${padding_left} ${padding_right} ${background_color} ${border_radius}`}
      >
        {blok.elements.map(blok => (
          <li key={blok._uid} className="px-2">
            <DynamicComponent blok={blok} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Grid
