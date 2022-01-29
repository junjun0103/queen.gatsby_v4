import { graphql, useStaticQuery } from "gatsby"

const UseTour = () => {
  const result = useStaticQuery(graphql`
    query {
      allStrapiThemeTour(
        sort: { fields: id, order: DESC }
      ) {
        nodes {
          excluded_cn
          excluded_en
          highlight_cn
          highlight_en
          slug
          included_cn
          included_en
          policy_cn
          policy_en
          priceDetail_cn
          priceDetail_en
          slogan_cn
          slogan_en
          title_cn
          title_en
          background_img {
            file{
              sharp: childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
          plans_en {
            id
            route
            stayAndMeals
            itinerary
            photo1 {
              file{
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
            photo2 {
              file{
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return result.allStrapiThemeTour.nodes.map(tour => ({
    excluded_cn: tour.excluded_cn,
    excluded_en: tour.excluded_en,
    highlight_cn: tour.highlight_cn,
    highlight_en: tour.highlight_en,
    slug: tour.slug,
    included_cn: tour.included_cn,
    included_en: tour.included_en,
    policy_cn: tour.policy_cn,
    policy_en: tour.policy_en,
    priceDetail_cn: tour.priceDetail_cn,
    priceDetail_en: tour.priceDetail_en,
    slogan_cn: tour.slogan_cn,
    slogan_en: tour.slogan_en,
    title_cn: tour.title_cn,
    title_en: tour.title_en,
    plans_en: tour.plans_en,
    background_img: tour.background_img,
  }))
}

export default UseTour
