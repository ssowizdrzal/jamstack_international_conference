import * as React from "react"

const ExternalLink = ({ blok }) => {

  return <a href={blok.link.cached_url}>{blok.name}</a>
  
}

export default ExternalLink
