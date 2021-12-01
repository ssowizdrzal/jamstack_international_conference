import * as React from "react"
import { Link } from "gatsby"
import { cleanUndefined } from "../../lib/utils"

const InternalLink = ({ blok }) => {
  const url = cleanUndefined(blok.link.cached_url)
  const stringed = "/" + url + "/"

  return (
    <Link className="" to={stringed}>
      {blok.name}
    </Link>
  )
}

export default InternalLink
