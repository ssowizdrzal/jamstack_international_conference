import * as React from "react"
import { Link } from "gatsby"

const InternalLink = ({ blok }) => {
  const url = blok.link.cached_url
  const stringed = "/" + url + "/"

  return (
    <Link
      to={stringed}
    >
      {blok.name}
    </Link>
  )
}

export default InternalLink