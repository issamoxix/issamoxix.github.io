import React from 'react'

import styled from 'styled-components'
import {primaryFont} from '../styles/global'

const Proj = ({title,description,link}) => {
    return (
        <Pro>
            <ProjTitle>
                {title}
            </ProjTitle>
            <Para>
                    {description}
            </Para>
            <More href={link}>
                
                Learn More
                
            </More>
        </Pro>
    )
}
const Pro = styled.div`
    width:100%;
    height:164px;
    
    position:relative;
`
const ProjTitle = styled.h2`
    color:${({theme})=>theme.pr300};
`
const Para = styled.p`
    color:${({theme})=>theme.main_color};
    font-family:${primaryFont};
    line-height:20px;
`
const More = styled.a`
    cursor:pointer;
    color:${({theme})=>theme.pr400};
    position:absolute;
    bottom: 0;
    right:0;
`
export default Proj
