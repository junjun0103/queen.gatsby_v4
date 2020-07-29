import React,{useState} from "react"
import styled from "@emotion/styled"
import BackgroundImage from "gatsby-background-image"
import { Link } from "gatsby"

const ImageBackground = styled(BackgroundImage)`
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: flex-end;
    justify-content: center;
`

const Item = styled.div`
  min-width: 45%;
  height: 380px;
  flex: 1 1 auto;
  margin: 0 5px 5px;
  overflow: hidden;
  cursor: pointer;
  
  .content {
    height: 45%;
    width:100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: rgba(90, 93, 102, 0.7);
    opacity: 0.7;
    position: absolute;
    transition: all 0.5s ease-in-out;

    .title {
      font-weight: bold;
      margin-bottom: 10px;
      font-size: 28px;
      color: white;
    }

    .subtitle {
      font-weight: lighter;
      font-size: 16px;
      color: white;
    }
    .description{
        font-weight: lighter;
        font-size: 14px;
        color: white;
    }
    .contentDate{        
        text-align: right;
        color: white;
        font-weight: bold;
    }
}
    .hoverOut{
        margin-bottom:-95px!important;
    }

`

const ThemeTour = ({ photo,title_en,slug,name_en,shortDescription_en,date,idx }) => {
    const [reviewHover,setReviewHover] = useState(false);

    const contentHover = () => {
        setReviewHover(!reviewHover);
    }

   
  return (
    <>
        <Item>
            
            <ImageBackground 
                onMouseEnter={() => contentHover()}
                onMouseLeave={() => contentHover()}
                tag="section" fluid={photo.sharp.fluid}
            >
                <Link 
                    to={"/reviews/" + slug} 
                    className={`content ${reviewHover ? 'hoverin' : 'hoverOut'}`}
                >
                    <h3 className="title">{title_en}</h3>
                    <h4 className="subtitle">{name_en}</h4>
                    <h5 className="description">{shortDescription_en}</h5>
                    <h4 className="contentDate">{date}</h4>
                </Link>
            </ImageBackground>

            
        </Item>
    </>
  )
}

export default ThemeTour