import React from 'react'
import styled from 'styled-components'
import NavBar from '../Components/NavBar'
import { primaryFont } from '../styles/global'
import ProgressBar from '../Components/ProgressBar'
import pattern from '../assets/images/patern.png'
import { SkillsList } from '../Data/Projects'
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
                        When I first started coding, I was amazed by the possibilities it offered. I began automating tasks using programming languages like JavaScript, Python, and PHP. As I progressed, I started exploring the world of backend development and discovered the power it held. Today, I continue to leverage Python and other languages to create scalable backend architectures and automate my ideas. The ability to seamlessly integrate frontend and backend components has allowed me to take on complex projects and push the boundaries of what's possible with code.

                    </Para>
                </LeftContainer>
                <RightContainer>
                    {
                        SkillsList.map((skill) => {
                            return (<><Lang>{skill.skills.join(',')}</Lang>
                                <ProgressBar width={skill.width} /></>)
                        })
                    }
                </RightContainer>
            </SkillsContainer>
            <Pattern src={pattern} />
        </Container>
    )
}
const Container = styled.div`
    color:${({ theme }) => theme.main_color};
    font-family:${primaryFont};
    animation:lan 2s linear;
    
`
const SkillsContainer = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    @media(max-width:600px){
        flex-direction:column;
    }
`
const LeftContainer = styled.div`
    width:50%;
    
    @media(max-width:600px){
        width:100%;
    }
`
const LeftTitle = styled.h1`
    color:${({ theme }) => theme.pr400};
    font-weight:200;
`
const Para = styled.p`
    width:40%;
    line-height:20px;
    color:${({ theme }) => theme.main_color};
    font-family:${primaryFont};
    font-weight:200;
    @media(max-width:1000px){
        width:80%;
    }
    @media(max-width:600px){
        width:100%;
    }
`
const RightContainer = styled.div`

`
const Lang = styled.p`
    color:${({ theme }) => theme.pr300};
    /* margin-bottom:5px; */
`
const Pattern = styled.img`
    margin-top:40px;
    @media(max-width:600px){
     width:100%;   
    }
`
export default Skills