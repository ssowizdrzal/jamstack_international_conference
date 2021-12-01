import * as React from "react"
import { cleanUndefined } from "../../lib/utils"
const ExternalLink = ({ blok }) => {
  const href = cleanUndefined(blok.link.cached_url)
  const src = cleanUndefined(blok.name)

  return <a href={href}>{src}</a>
}

export default ExternalLink
