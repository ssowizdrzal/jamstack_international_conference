import * as React from "react"

const ExternalLink = ({ blok }) => {

  console.log(blok.link.cached_url)
  return <a href={blok.link.cached_url}>{blok.name}</a>
  
}

export default ExternalLink
