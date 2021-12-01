import * as React from "react"
import { cleanUndefined } from "../../lib/utils"

const Paragraph = ({ blok }) => {
  const text_size = cleanUndefined(blok.text_size[0])
  const align = cleanUndefined(blok.align[0])

  switch (blok.style[0]) {
    case "h1":
      return <h1 className={`${text_size} ${align}`}>{blok.text}</h1>
    case "h2":
      return <h2 className={`${text_size} ${align}`}>{blok.text}</h2>
    case "h3":
      return <h3 className={`${text_size} ${align}`}>{blok.text}</h3>
    case "h4":
      return <h4 className={`${text_size} ${align}`}>{blok.text}</h4>
    case "h5":
      return <h5 className={`${text_size} ${align}`}>{blok.text}</h5>
    case "h6":
      return <h6 className={`${text_size} ${align}`}>{blok.text}</h6>
    case "span":
    default:
      return <p className={`${text_size} ${align}`}>{blok.text}</p>
  }
}

export default Paragraph
