import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { graphql } from "gatsby"

import DynamicComponent from "../components/dynamicComponent"
import useStoryblok from "../lib/storyblok"

const IndexPage = ({ data, location }) => {
  let story = data.storyblokEntry
  story = useStoryblok(story, location)

  const components = story.content.body.map(blok => {
    return <DynamicComponent blok={blok} key={blok._uid} />
  })

  return (
    <Layout location={location}>
      <Seo title="Home" />
      <h1>{story.content.title}</h1>
      {components}

    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query HomeQuery {
    storyblokEntry(full_slug: { eq: "home" }) {
      name
      content
    }
  }
`
