import * as React from "react"

const Paragraph = ({ blok }) => {

  switch (blok.style[0]) {
    case "h1":
      return (
        <h1 className={`${blok.text_size[0]} ${blok.align[0]}`}>{blok.text}</h1>
      )
    case "h2":
      return (
        <h2 className={`${blok.text_size[0]} ${blok.align[0]}`}>{blok.text}</h2>
      )
    case "h3":
      return (
        <h3 className={`${blok.text_size[0]} ${blok.align[0]}`}>{blok.text}</h3>
      )
    case "h4":
      return (
        <h4 className={`${blok.text_size[0]} ${blok.align[0]}`}>{blok.text}</h4>
      )
    case "h5":
      return (
        <h5 className={`${blok.text_size[0]} ${blok.align[0]}`}>{blok.text}</h5>
      )
    case "span":
    default:
      return (
        <p className={`${blok.text_size[0]} ${blok.align[0]}`}>{blok.text}</p>
      )
  }
}

export default Paragraph
