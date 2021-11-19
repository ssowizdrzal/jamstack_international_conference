import SbEditable from 'storyblok-react'
import Teaser from './teaser'
import NavLink from './BlokComponents/nav_link'
import React from "react"
 
const Components = {
  'teaser': Teaser,
  'nav_item': NavLink
}
 
const DynamicComponent = ({ blok }) => {
  if (typeof Components[blok.component] !== 'undefined') {
    const Component = Components[blok.component]
    return (<SbEditable content={blok}><Component blok={blok} /></SbEditable>)
  }
  return (<p>The component <strong>{blok.component}</strong> has not been created yet.</p>)
}
 
export default DynamicComponent