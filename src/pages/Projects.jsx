import React from 'react'
import styled from 'styled-components'
import NavBar from '../Components/NavBar';
import Proj from '../Components/Proj';
import {primaryFont} from '../styles/global';
const Projects = () => {
    return (
        <Container>
            <NavBar />
            <ProjectsTitle>
            Projects
            </ProjectsTitle>
            <ProjContainer>
                <Projectz>
                    <Proj />
                    <Proj />
                    <Proj />
                    <Proj />
                </Projectz>
            </ProjContainer>     
        </Container>
    )
}
const Container = styled.div`
    color:white;
    font-family:${primaryFont}
`
const ProjectsTitle = styled.h1`
    font-size:var(--h2-size);
    font-weight:200;
`
const ProjContainer = styled.div`
    display:flex;
    flex-direction:row;
    margin-top:20px;
`
const Projectz = styled.div`
    display:grid;
    width:70%;
    grid-gap:5px;
    grid-template-columns:50% 50%;
    grid-template-rows:auto;
`

export default Projects