import React from 'react'
import styled from 'styled-components'
import img from '../assets/images/profile.png'
import Input from '../Components/Input'
import L_Footer, { redirect } from '../Components/L_Footer'
import ToggleTheme from '../Components/ToggleTheme'
import { social_media } from '../Data/Links'
const Landing = () => {
    return (
        <Wraper>
            {/* landing page */}
            <Body>
                <Header>

                <ProfileImage src={img} alt="Profile" onClick={()=>redirect(social_media.github)} />
                    <h1>
                        Hi Im <Name>Issam</Name>
                    </h1>
                    <Para>Software Engineer</Para>
                </Header>
                <Input/>
                <L_Footer />
            </Body>
            <ToggleTheme />
        </Wraper>
    )
}
const Wraper = styled.div`
    position:relative;
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
    animation:lan 2s linear;
`
const Body = styled.div`
    color:${({theme})=>theme.main_color};
    
    width:624px;
    
    display:flex;
    flex-direction:column;
    align-items:center;
    @media (max-width:600px){
        &{
            width:auto;
        }
    }
`
const ProfileImage = styled.img`
    height:15rem;
    cursor:pointer;
`
const Name = styled.span`
    color:${({theme})=>theme.pr300};
`
const Para = styled.p`
    color:${({theme})=>theme.pr500};
    line-height:11px;

`
const Header = styled.div`
    text-align:center;
`

export default Landing