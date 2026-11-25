import React from 'react'
import styled from 'styled-components'
import NavBar from '../Components/NavBar'
import { primaryFont } from '../styles/global'
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
                        I started coding in 2015, automating tasks and games with JavaScript, Python and PHP. That curiosity turned into backend engineering: scrapers running hundreds of channels, gRPC microservices and ETL pipelines at HQ revenue, then owning AWS infrastructure at truemetrics (YC S23). Today I lead technology at Voicari, from firmware and a serverless IoT pipeline on AWS to the mobile apps.
                    </Para>
                </LeftContainer>
                <RightContainer>
                    {
                        SkillsList.map((group) => (
                            <Group key={group.category}>
                                <Category>{group.category}</Category>
                                <Tags>
                                    {group.skills.map((s) => <Tag key={s}>{s}</Tag>)}
                                </Tags>
                            </Group>
                        ))
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
    width:80%;
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
    width:45%;
    @media(max-width:600px){
        width:100%;
    }
`
const Group = styled.div`
    margin-bottom:20px;
`
const Category = styled.h2`
    color:${({ theme }) => theme.pr400};
    font-weight:200;
    margin-bottom:8px;
`
const Tags = styled.div`
    display:flex;
    flex-wrap:wrap;
    gap:8px;
`
const Tag = styled.span`
    border:1px solid ${({ theme }) => theme.pr200};
    color:${({ theme }) => theme.pr300};
    padding:4px 12px;
    border-radius:16px;
`
const Pattern = styled.img`
    margin-top:40px;
    @media(max-width:600px){
     width:100%;   
    }
`
export default Skills