import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import DynamicComponent from "../components/dynamicComponent"
import useStoryblok from "../lib/storyblok"

const Page = ({ pageContext, location }) => {
  let story = pageContext.story
  story = useStoryblok(story, location)
  let components = null

  if (story.content.body) {
    components = story.content.body.map(blok => {
      return <DynamicComponent blok={blok} key={blok._uid} />
    })
  }

  return (
    <Layout location={location}>
      <Seo title={story.content.title} />
      {components}
    </Layout>
  )
}

export default Page
