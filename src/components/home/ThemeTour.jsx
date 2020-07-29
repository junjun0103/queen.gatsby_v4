import React from "react"
import styled from "@emotion/styled"
import BackgroundImage from "gatsby-background-image"
import { Link } from "gatsby"

const Item = styled.div`
  min-width: 30%;
  height: 350px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & .background-image {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & .content {
      opacity: 0.9;
    }
  }

  &.large {
    height: 480px;
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  .background-image {
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    transition: all 2s ease-in-out;
  }

  .content {
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(90, 93, 102, 0.7);
    opacity: 0.7;
    position: absolute;
    transition: all 0.5s ease-in-out;

    .title {
      font-weight: bold;
      margin-bottom: 6px;
      color: white;
    }

    .subtitle {
      font-weight: lighter;
      font-size: 16px;
    }
  }
`

const ThemeTour = ({ title_en, background_img, slug }) => {
  return (
    <Item>
      <Link
        to={"/themeTour/" + slug}
        className="background-image"
        style={{
          backgroundImage: `url(${background_img.sharp.fluid.src})`,
        }}
      />

      <Link to={"/themeTour/" + slug} className="content">
        <h3 className="title">{title_en}</h3>
      </Link>
    </Item>
  )
}

export default ThemeTour