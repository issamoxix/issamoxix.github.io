import React from 'react'
import styled from 'styled-components'
import img from '../assets/images/profile.png'
import Input from '../Components/Input'
import L_Footer, { redirect } from '../Components/L_Footer'
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
                    <Para>Front end Developer</Para>
                </Header>
                <Input/>
                <L_Footer />
            </Body>
        </Wraper>
    )
}
const Wraper = styled.div`

    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
    animation:lan 2s linear;
`
const Body = styled.div`
    color:white;
    
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
    color:var(--pr300);
`
const Para = styled.p`
    color:var(--pr500);
    line-height:11px;

`
const Header = styled.div`
    text-align:center;
`

export default Landing