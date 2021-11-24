import SbEditable from 'storyblok-react'
import Teaser from './teaser'
import NavLink from './BlokComponents/nav_link'
import React from "react"
import Paragraph from './BlokComponents/paragraph'
import Span from './BlokComponents/span'
import TextSpan from './BlokComponents/text'
import Link from './BlokComponents/link'
 
const Components = {
  'teaser': Teaser,
  'nav_item': NavLink,
  'paragraph': Paragraph,
  'span': Span,
  'text': TextSpan,
  'external_link': Link
}
 
const DynamicComponent = ({ blok }) => {
  if (typeof Components[blok.component] !== 'undefined') {
    const Component = Components[blok.component]
    return (<SbEditable content={blok}><Component blok={blok} /></SbEditable>)
  }
  return (<p>The component <strong>{blok.component}</strong> has not been created yet.</p>)
}
 
export default DynamicComponent