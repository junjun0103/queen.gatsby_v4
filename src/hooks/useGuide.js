import { graphql, useStaticQuery } from "gatsby"

const UseTour = () => {
  const result = useStaticQuery(graphql`
    query {
      allStrapiTourGuide {
        nodes {
          name
          profile
          englishGuide
          slug
          photo {
            file{
              sharp: childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
  `)

  return result.allStrapiTourGuide.nodes.map(guide => ({
    name: guide.name,
    profile: guide.profile,
    englishGuide: guide.englishGuide,
    slug: guide.slug,
    photo: guide.photo,
  }))
}

export default UseTour
