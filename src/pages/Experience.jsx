import React from 'react'
import styled from 'styled-components'
import NavBar from '../Components/NavBar'
import { primaryFont } from '../styles/global'
import { ExperienceData, Education } from '../Data/Experience'

const Experience = () => {
    return (
        <Container>
            <NavBar />
            <HeadTitle>Experience</HeadTitle>
            <Timeline>
                {ExperienceData.map((job, i) => (
                    <Item key={i}>
                        <Top>
                            <Role>{job.role}</Role>
                            <Period>{job.period}</Period>
                        </Top>
                        <Company>
                            {job.link ? <a href={job.link}>{job.company}</a> : job.company}
                            {job.location ? ` · ${job.location}` : ''}
                        </Company>
                        <Stack>{job.stack}</Stack>
                        {job.points.length > 0 && (
                            <Points>
                                {job.points.map((p, j) => <li key={j}>{p}</li>)}
                            </Points>
                        )}
                    </Item>
                ))}
            </Timeline>
            <HeadTitle>Education</HeadTitle>
            <Timeline>
                <Item>
                    <Top>
                        <Role>{Education.degree}</Role>
                        <Period>{Education.year}</Period>
                    </Top>
                    <Company>{Education.school}</Company>
                </Item>
            </Timeline>
        </Container>
    )
}
const Container = styled.div`
    color:${({ theme }) => theme.main_color};
    font-family:${primaryFont};
    animation:lan 2s linear;
    padding-bottom:40px;
`
const HeadTitle = styled.h1`
    font-size:var(--h2-size);
    font-weight:200;
    margin:20px 0;
`
const Timeline = styled.div`
    max-width:800px;
    border-left:2px solid ${({ theme }) => theme.pr200};
    padding-left:24px;
`
const Item = styled.div`
    position:relative;
    margin-bottom:32px;
    &::before {
        content:'';
        position:absolute;
        left:-31px;
        top:8px;
        width:12px;
        height:12px;
        border-radius:50%;
        background-color:${({ theme }) => theme.pr300};
    }
`
const Top = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    align-items:baseline;
    gap:8px;
`
const Role = styled.h2`
    color:${({ theme }) => theme.pr300};
    font-weight:300;
    font-size:1.4rem;
`
const Period = styled.span`
    color:${({ theme }) => theme.pr500};
    font-size:0.95rem;
`
const Company = styled.div`
    margin-top:4px;
    font-size:1.05rem;
    a {
        color:${({ theme }) => theme.pr400};
        border-bottom:1px solid transparent;
    }
    a:hover {
        border-color:${({ theme }) => theme.pr400};
    }
`
const Stack = styled.p`
    line-height:24px;
    font-size:0.9rem;
    color:${({ theme }) => theme.pr500};
`
const Points = styled.ul`
    margin-top:6px;
    padding-left:18px;
    line-height:22px;
    font-weight:300;
    li { margin-bottom:4px; }
`
export default Experience
