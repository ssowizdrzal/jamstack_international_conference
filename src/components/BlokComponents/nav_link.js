import * as React from "react"
import { Link } from "gatsby"

const NavLink = ({ blok }) => {
  const url = blok.link.cached_url
  const stringed = "/" + url + "/"

  return (
    <Link
      to={stringed}
      className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-blue-900 hover:underline mr-4"
      activeClassName="text-indigo-900 underline mr-4"
      partiallyActive={true}
    >
      {blok.name}
    </Link>
  )
}

export default NavLink
