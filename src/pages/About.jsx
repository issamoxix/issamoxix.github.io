import React from 'react'
import styled from 'styled-components'
import NavBar from '../Components/NavBar'
import { primaryFont } from '../styles/global'
import Image1 from '../assets/images/undraw1.png'

import { redirect } from '../Components/L_Footer'
import { social_media } from '../Data/Links'
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
                        👋🏽 Hi, my name is Issam Haidaoui
                        <br></br>
                        <br></br>

                        🎓 Bachelor in Physics.
                        <br></br>

                        <br></br>
                        🌇 Germany/Berlin , with a passion for Data Science and Automation
                        <br></br>
                        <br></br>

                        📚 Started coding since 2015 i was mostly creating websites and automating games , Currently im working as a Student Web Scraper
                        <br></br>
                        <br></br>

                        💻 As for my future, I hope to one day work in the field of data
                        <br></br>
                        <br></br>

                        🏔 In my free time , you can find me playing games or coding something that is related to gaming
                        <br></br>
                        <br></br>

                        💪🏽 My strengths : Data scraping , Data cleaning, Python , Learning new tech and Problem solving
                        <br></br>
                        <br></br>

                        👨‍💻 You can find all my projects in github @issamoxix
                    </Para>

                    <PrimaryButton onClick={() => redirect(social_media.twitter)} >Let's Talk</PrimaryButton>
                </RightContainer>
            </AboutBody>
        </Container>
    )
}
const Container = styled.div`
    color:${({ theme }) => theme.main_color};
    font-family:${primaryFont};
    animation:lan 2s linear;
    overflow:hidden;
`
const HeadTitle = styled.h1`
    font-size:var(--h1-size);
    font-weight:200;
`
const AboutBody = styled.div`
    display:flex;
    flex-wrap:wrap;
    flex-direction:row;
    justify-content:center;
    @media(max-width:600px){
        flex-direction:column;
    }
`
const LeftContainer = styled.div`
    animation:slide_left 2s linear;
`
const LeftImage = styled.img`
    height:28rem;
    @media(max-width:600px){
    height:14rem;
    }
`
const RightContainer = styled.div`
    width:30%;
    animation:slide_right 2s linear;
    @media(max-width:1000px){
        width:50%;
    }
    @media(max-width:600px){
        width:100%;
        margin:20px 0; 
    }
`
const AboutTitle = styled.h1`
    color:${({ theme }) => theme.pr400};
    
`
const Para = styled.p`
    margin:20px 0 0 0;
    color:${({ theme }) => theme.pr300};
    width:100%;
    line-height:20px;
`
const PrimaryButton = styled.button`
    background-color:transparent;
    border:3px solid ${({ theme }) => theme.pr200};
    color:${({ theme }) => theme.pr300};
    font-size:var(--h2-size);
    width:100%;
    padding:10px;
    margin-top:40px;
    cursor:pointer;
    transition: all 0.2s linear;
    &:hover {
        background-color:${({ theme }) => theme.pr300};
        color:${({ theme }) => theme.pr200};
        border-color:transparent;
    }
`
export default About