import React from 'react';
import Layaout from '../ui/layout';
import { graphql } from 'gatsby';

export const query = graphql`
    query($slug:String!){
        allStrapiTourGuide(filter:{slug:{eq:$slug}}){
            nodes {
                name
                profile
                englishGuide
                slug
            }
        }
    }
`;

const OneFeedBack = ({ data: { allStrapiTourGuide: { nodes } } }) => {
    //restructure
    const { name } = nodes[0];

    return (
        <Layaout>
            {name}
        </Layaout>
    );
}

export default OneFeedBack;