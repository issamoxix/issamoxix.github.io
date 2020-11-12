import React from 'react'
import styled from 'styled-components'
import NavBar from '../Components/NavBar'
import {primaryFont} from '../styles/global'
import Image1 from '../assets/images/undraw1.png'
const About = () => {
    return (
        <Container>
            <NavBar />
            <HeadTitle>
                About me
            </HeadTitle>
            <AboutBody>
                <LeftContainer>
                    <LeftImage src={Image1} />
                </LeftContainer>
                <RightContainer>
                    <AboutTitle>
                        Who is Issam ?
                    </AboutTitle>
                    <Para>
                    I am an undergraduate student at UH2  
                    doing major in Physics .
                     I am passionate about contributing 
                    to open source and realising ideas .
                    </Para>
                    <PrimaryButton>Let's Talk</PrimaryButton>
                </RightContainer>
            </AboutBody>
        </Container>
    )
}
const Container = styled.div`
    color:white;
    font-family:${primaryFont};
`
const HeadTitle = styled.h1`
    font-size:var(--h1-size);
`
const AboutBody = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
`
const LeftContainer = styled.div`
`
const LeftImage = styled.img`
    height:28rem;
`
const RightContainer = styled.div`
    width:30%;
    
`
const AboutTitle = styled.h1`
    color:var(--pr400);
    
`
const Para = styled.p`
    margin:20px 0 0 0;
    color:var(--pr300);
    width:100%;
    line-height:20px;
`
const PrimaryButton = styled.button`
    background-color:transparent;
    border:3px solid var(--pr200);
    color:var(--pr300);
    font-size:var(--h2-size);
    width:100%;
    padding:10px;
    margin-top:40px;
    cursor:pointer;
    transition: all 0.2s linear;
    &:hover {
        background-color:var(--pr300);
        color:var(--pr200);
        border-color:transparent;
    }
`
export default About