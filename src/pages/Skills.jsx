import React from 'react'
import styled from 'styled-components'
import NavBar from '../Components/NavBar'
import {primaryFont} from '../styles/global'
import ProgressBar from '../Components/ProgressBar'
import pattern from '../assets/images/patern.png'
const Skills = () => {
    return (
        <Container>
            <NavBar />
            <SkillsContainer>
                <LeftContainer>
                    <LeftTitle>
                        My Story
                    </LeftTitle>
                    <Para>
                    When i frist started coding
                    i wasso amazed by how
                    you can achieve and you can do
                    so i started aumtomating 
                    stuff with javascript , python and
                    php , then i discoverd node js 
                    that was the thing that got me 
                    to design websites and do more 
                    frontend but i still automate my
                    ideas with node and python  

                    </Para>
                </LeftContainer>
                <RightContainer>
                    <Lang>Python,Javascript</Lang>
                    <ProgressBar width="90%" />
                    <Lang>Html,Css,React,Node</Lang>
                    <ProgressBar width="80%" />
                    <Lang>graphql, mysql, typscript</Lang>
                    <ProgressBar width="60%" />
                    <Lang>postgresql,mongodb</Lang>
                    <ProgressBar width="50%" />
                </RightContainer>
            </SkillsContainer>
            <Pattern src={pattern} />
        </Container>
    )
}
const Container =styled.div`
    color:${({theme})=>theme.main_color};
    font-family:${primaryFont};
    
`
const SkillsContainer = styled.div`
    display:flex;
    flex-direction:row;
`
const LeftContainer = styled.div`
    width:50%;
`
const LeftTitle = styled.h1`
    color:${({theme})=>theme.pr400};
    font-weight:200;
`
const Para = styled.p`
    width:40%;
    line-height:20px;
    color:${({theme})=>theme.main_color};
    font-family:${primaryFont};
    font-weight:200;
`
const RightContainer = styled.div`

`
const Lang = styled.p`
    color:${({theme})=>theme.pr300};
    /* margin-bottom:5px; */
`
const Pattern = styled.img`
    margin-top:40px;
`
export default Skills