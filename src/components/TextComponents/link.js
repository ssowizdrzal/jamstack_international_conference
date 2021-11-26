import React from "react"
import ExternalLink from "./externallink"
import InternalLink from "./internallink"

const Link = ({ blok }) => {
  if (blok.link.linktype === "url") {
    return <ExternalLink blok={blok} />
  } else {
    return <InternalLink blok={blok} />
  }
}

export default Link
