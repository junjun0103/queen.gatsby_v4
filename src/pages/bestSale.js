import React from "react"
import Layout from "../components/ui/layout"
import ListIterinary from "../components/iterinaryEn/listIterinary"

const BestSale = () => {
  return (
    <>
      <Layout>
        <section className="bestSale-page">
          <ListIterinary />
        </section>
      </Layout>
    </>
  )
}

export default BestSale
