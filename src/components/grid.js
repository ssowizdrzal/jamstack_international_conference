import React from "react"
import { cleanUndefined } from "../lib/utils"
import DynamicComponent from "./dynamicComponent"

const Grid = ({ blok }) => {
  const gap = cleanUndefined(blok.gap[0])
  const grid_flow = cleanUndefined(blok.grid_flow[0])
  const grid_columns = cleanUndefined(blok.grid_columns[0])
  const grid_rows = cleanUndefined(blok.grid_rows[0])
  console.log(blok)
  return (
    <div>
      <ul
        className={`grid p-2 container mx-auto ${gap} ${grid_flow} ${grid_columns} ${grid_rows}`}
      >
        {blok.columns.map(blok => (
          <li key={blok._uid} className="flex-auto px-2">
            <DynamicComponent blok={blok} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Grid
