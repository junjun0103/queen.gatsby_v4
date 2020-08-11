import React, { useContext } from "react"
import { GlobalStateContext } from "../../context/GlobalContextProvider"
import { Link } from "gatsby"

const PreviewTour = ({ tour }) => {
  // language state
  const state = useContext(GlobalStateContext) || { lenguage: "EN" }

  const {
    excluded_cn,
    excluded_en,
    highlight_cn,
    highlight_en,
    slug,
    included_cn,
    included_en,
    policy_cn,
    policy_en,
    priceDetail_cn,
    priceDetail_en,
    slogan_cn,
    slogan_en,
    title_cn,
    title_en,
    background_img,
  } = tour

  //declare lenguage variables
  let title = "",
    slogan = ""

  if (state.lenguage === "EN") {
    title = title_en
    slogan = slogan_en
  } else {
    title = title_cn
    slogan = slogan_cn
  }

  return (
    <>
      <Link to={"/themeTour/" + slug}>
        <div className="preview-container_themeTour preview-boxShadow">
          <img
            src={background_img.sharp.fluid.src}
            alt="img"
            className="preview-img"
          ></img>
          <h3
            className={`preview-title ${
              state.lenguage === "CN" ? "cn-font__noto_bold" : ""
            }`}
          >
            {title}
          </h3>
          <h4
            className={`preview-subTitle ${
              state.lenguage === "CN" ? "cn-font__noto_medium" : ""
            }`}
          >
            {slogan}
          </h4>
        </div>
      </Link>
    </>
  )
}

export default PreviewTour
