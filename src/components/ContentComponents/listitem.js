import React from "react"
import { cleanUndefined } from "../../lib/utils"
import { Link } from "gatsby"
import DynamicComponent from "../dynamicComponent"

const ListItem = ({ blok, index }) => {
  const renderListElement = (type, content, index) => {
    switch (type) {
      case "paragraph":
        const elements = content.map(content => {
          if (content.type === "text") {
            let output_text = content.text
            if (content.marks) {
              content.marks.map(type => {
                switch (type.type) {
                  case "bold":
                    output_text = <strong>{output_text}</strong>
                    break
                  case "italic":
                    output_text = <em>{output_text}</em>
                    break
                  case "underline":
                    output_text = <u>{output_text}</u>
                    break
                  case "strike":
                    output_text = <s>{output_text}</s>
                    break
                  case "link":
                    const link = type.attrs
                    if (
                      (link.linktype === "url" && link.href !== "") ||
                      (link.linktype === "asset" && link.href !== "")
                    ) {
                      output_text = <a href={link.href}>{output_text}</a>
                    }
                    if (link.linktype === "story" && link.href !== "") {
                      output_text = <Link to={link.href}>{output_text}</Link>
                    }
                    if (link.linktype === "email" && link.href !== "") {
                      const href_link = `mailto:${link.href}`
                      output_text = <a href={href_link}>{output_text}</a>
                    }
                    break
                  default:
                    console.log(type)
                    break
                }
              })
            }
            return output_text
          }

          return null
        })

        return (
          <li key={index}>
            <p>{elements}</p>
          </li>
        )
      default:
        return <li key={index}>that type isn't implemented</li>
    }
  }

  if (blok.content && blok.content[0].content) {
    const content = blok.content[0]
    return renderListElement(content.type, content.content, index)
  }

  return null
}

export default ListItem
