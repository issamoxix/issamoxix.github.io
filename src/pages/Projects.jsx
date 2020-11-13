import React from 'react'
import styled from 'styled-components'
import NavBar from '../Components/NavBar';
import Proj from '../Components/Proj';
import {primaryFont} from '../styles/global';
import {ProjectsData} from '../Data/Projects' 
const Projects = () => {
    return (
        <Container>
            <NavBar />
            <ProjectsTitle>
            Projects
            </ProjectsTitle>
            <ProjContainer>
                <Projectz>
                    <Proj 
                    title={ProjectsData.Project1.Name} 
                    description={ProjectsData.Project1.Description} 
                    link={ProjectsData.Project1.Link}/> 
                    <Proj 
                    title={ProjectsData.Project2.Name} 
                    description={ProjectsData.Project2.Description} 
                    link={ProjectsData.Project2.Link}/>
                    <Proj 
                    title={ProjectsData.Project3.Name} 
                    description={ProjectsData.Project3.Description} 
                    link={ProjectsData.Project3.Link}/>
                    <Proj 
                    title={ProjectsData.Project4.Name} 
                    description={ProjectsData.Project4.Description} 
                    link={ProjectsData.Project4.Link}/>
                 
                </Projectz>
                
            </ProjContainer>     
        </Container>
    )
}
const Container = styled.div`
    color:${({theme})=>theme.main_color};
    animation:lan 2s linear;
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
    @media(max-width:600px){
        flex-direction:column;
        margin-bottom:10px;
    }
`
const Projectz = styled.div`
    display:grid;
    width:70%;
    grid-gap:5px;
    grid-template-columns:50% 50%;
    grid-template-rows:auto;
    @media(max-width:600px){
        grid-template-columns:auto;
        width:100%;
        margin-bottom:10px;
    }
`

export default Projects