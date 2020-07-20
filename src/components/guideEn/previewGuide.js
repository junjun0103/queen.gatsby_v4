import React from "react"
import { FaUserTie } from "react-icons/fa"
//import { Link } from "gatsby"
//  <Link to={"/" + slug}>Here</Link>
const PreviewGuide = ({ guide }) => {
  const { slug } = guide

  return (
    <>
      <div className="previewGuide-container">
        <img
          src={guide.photo.sharp.fluid.src}
          alt="img"
          className="previewGuide-img"
        ></img>
        <div className="previewGuide-contents">
          <div className="previewGuide-contents__iconWithName">
            <FaUserTie className="previewGuide-contents__icon"></FaUserTie>
            <h3>{guide.name}</h3>
          </div>
          <h4 className="text-align-justify">{guide.profile}</h4>
        </div>
      </div>
    </>
  )
}

export default PreviewGuide
