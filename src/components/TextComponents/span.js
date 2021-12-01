import * as React from "react"
import { cleanUndefined } from "../../lib/utils"
import DynamicComponent from "../dynamicComponent"

const Span = ({ blok }) => {
  const text_size = cleanUndefined(blok.text_size[0])
  const align = cleanUndefined(blok.align[0])

  const span_parts = blok.span_tabs.map(blok => {
    return <DynamicComponent blok={blok} key={blok._uid} editable={false} />
  })
  switch (blok.style[0]) {
    case "small":
      return (
        <small className={` ${text_size} ${align} block space-x-1 leading-3`}>
          {" "}
          {span_parts}{" "}
        </small>
      )
    case "span":
    default:
      return (
        <span className={` ${text_size} ${align} block space-x-1 leading-3`}>
          {" "}
          {span_parts}{" "}
        </span>
      )
  }
}

export default Span
