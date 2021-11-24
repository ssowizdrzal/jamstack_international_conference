import SbEditable from 'storyblok-react'
import React from "react"
import ExternalLink from './externallink'
import InternalLink from './internallink'

const Link = ({ blok }) => {

    console.log(blok.link)
  if (blok.link.linktype == 'url') {
    return (<SbEditable content={blok}><ExternalLink blok={blok} /></SbEditable>)
  }
  else{
    return (<SbEditable content={blok}><InternalLink blok={blok} /></SbEditable>)
  }
}
 
export default Link