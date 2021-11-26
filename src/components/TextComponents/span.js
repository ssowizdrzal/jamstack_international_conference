import * as React from "react"
import DynamicComponent from "../dynamicComponent"

const Span = ({ blok }) => {
  const span_parts = blok.span_tabs.map(blok => {
    return <DynamicComponent blok={blok} key={blok._uid} editable={false} />
  })
  switch (blok.style[0]) {
    case "small":
      return (
        <small
          className={` ${blok.text_size[0]} ${blok.align[0]} block space-x-1 leading-3`}
        >
          {" "}
          {span_parts}{" "}
        </small>
      )
    case "span":
    default:
      return (
        <span
          className={` ${blok.text_size[0]} ${blok.align[0]} block space-x-1 leading-3`}
        >
          {" "}
          {span_parts}{" "}
        </span>
      )
  }
}

export default Span
