import React from 'react'
import styled from 'styled-components'
import {primaryFont} from '../styles/global'

const Proj = () => {
    return (
        <Pro>
            <ProjTitle>
                Project Name
            </ProjTitle>
            <Para>
            Description about the project and
what not dqd qspod qsd  
Description about the project and
what not dqd qspod qsd  
Description about the project and
what not dqd qspod qsd  
            </Para>
            <More>
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
    color:var(--pr300);
`
const Para = styled.p`
    color:white;
    font-family:${primaryFont};
    line-height:20px;
`
const More = styled.a`
    cursor:pointer;
    color:var(--pr400);
    position:absolute;
    bottom: 0;
    right:0;
`
export default Proj
