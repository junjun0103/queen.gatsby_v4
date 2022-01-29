import React, { useContext } from "react"
import { Link } from "gatsby"
import { GlobalStateContext } from "../../context/GlobalContextProvider"

const PreviewFeedback = ({ feedback }) => {
  const state = useContext(GlobalStateContext) || { lenguage: "CN" }

  const {
    slug,
    title_en,
    title_cn,
    name_cn,
    name_en,
    content_cn,
    content_en,
    shortDescription_cn,
    shortDescription_en,
    date,
    photo,
  } = feedback

  //declare lenguage variables
  let title = "",
    name = "",
    content = "",
    shortDescription = ""

  if (state.lenguage === "EN") {
    title = title_en
    name = name_en
    content = content_en
    shortDescription = shortDescription_en
  } else {
    title = title_cn
    name = name_cn
    content = content_cn
    shortDescription = shortDescription_cn
  }

  return (
    <>
      <Link rel="canonical" to={"/reviews/" + slug}>
        <div className="preview-container_review preview-container_review_boxShadow">
          <img
            src={photo.file.sharp.fluid.src}
            alt="img"
            className="preview-img"
          ></img>
          <h4
            className={`preview-departureDay ${state.lenguage === "CN" ? "cn-font__noto_medium cn_h4" : ""
              }`}
          >
            {title}
          </h4>
          <h4
            className={`preview-subtitle ${state.lenguage === "CN"
                ? "cn-font__noto_sans_medium cn_h4"
                : "en-font__overpass_bold"
              }`}
          >
            {name}
          </h4>
          <h4
            className={`preview-shortDescription word-break-break-all ${state.lenguage === "CN" ? "cn-font__noto_light cn_h4" : ""
              }`}
          >
            {shortDescription}
          </h4>
          <h4
            className={`preview-price ${state.lenguage === "CN"
                ? "cn-font__noto_sans_medium "
                : "en-font__overpass_bold"
              }`}
          >
            {date}
          </h4>
        </div>
      </Link>
    </>
  )
}

export default PreviewFeedback
