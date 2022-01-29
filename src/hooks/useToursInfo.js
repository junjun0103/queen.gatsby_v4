import { graphql, useStaticQuery } from "gatsby"

const UseTour = () => {
  const result = useStaticQuery(graphql`
    query {
      allStrapiTouristInformation{
        nodes {
          slug
          title_en
          title_cn
          notice_cn
          notice_en
          icon {
            file{
              sharp: childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
          information_cn {
            content
            id
            subject
          }
          information_en {
            content
            id
            subject
          }
        }
      }
    }
  `)

  return result.allStrapiTouristInformation.nodes.map(tourinfo => ({
    slug: tourinfo.slug,
    title_cn: tourinfo.title_cn,
    title_en: tourinfo.title_en,
    notice_cn: tourinfo.notice_cn,
    notice_en: tourinfo.notice_en,
    information_cn: tourinfo.information_cn,
    information_en: tourinfo.information_en,
    icon: tourinfo.icon,
  }))
}

export default UseTour
