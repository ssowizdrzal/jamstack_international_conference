import React from "react"
import { Link } from "gatsby"

const ListItem = ({ blok, index }) => {
  const renderListElement = (type, content, index) => {
    if (type === "paragraph") {
      const elements = content.map((content, index) => {
        let output = content.text
        if (content.marks) {
          content.marks.forEach(type => {
            if (type.type === "bold") {
              output = <strong key={index}>{output}</strong>
            } else if (type.type === "italic") {
              output = <em key={index}>{output}</em>
            } else if (type.type === "underline") {
              output = <u key={index}>{output}</u>
            } else if (type.type === "strike") {
              output = <s key={index}>{output}</s>
            } else if (type.type === "link") {
              output = <s key={index}>{output}</s>
              const link = type.attrs
              if (
                (link.linktype === "url" && link.href !== "") ||
                (link.linktype === "asset" && link.href !== "")
              ) {
                output = (
                  <a href={link.href} key={index}>
                    {output}
                  </a>
                )
              }
              if (link.linktype === "story" && link.href !== "") {
                output = (
                  <Link to={link.href} key={index}>
                    {output}
                  </Link>
                )
              }
              if (link.linktype === "email" && link.href !== "") {
                const href_link = `mailto:${link.href}`
                output = (
                  <a href={href_link} key={index}>
                    {output}
                  </a>
                )
              }
            }
          })
        }

        return output
      })
      return (
        <li key={index}>
          <p>{elements}</p>
        </li>
      )
    }
    if (type === "blok") {
      return (
        <li key={index}> that type isn't implemented [listitem blok-{type}]</li>
      )
    }
    return <li key={index}> that type isn't implemented [listitem-{type}]</li>
  }
  console.log(blok)
  if (blok.content && blok.content[0].content) {
    const content = blok.content[0]
    return renderListElement(content.type, content.content, index)
  }

  return null
}

export default ListItem
