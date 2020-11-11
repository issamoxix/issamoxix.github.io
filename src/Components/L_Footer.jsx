import React from 'react'
import styled from 'styled-components'
import twitter from '../assets/images/twitter.png'
import github from '../assets/images/github.png'
import email from '../assets/images/email.png'
import { social_media } from '../Data/Links'
const L_Footer = () => {
    
    return (
        <Container>
            <Icons src={twitter} onClick={()=>redirect(social_media.twitter)} />
            <Icons src={github} onClick={()=>redirect(social_media.github)} />
            <Icons src={email} />
        </Container>
    )
}
const Container = styled.div`
    color:white;
    margin:5px 0;
`
const Icons = styled.img`
    height:3rem;
    margin:0 5px;
    cursor:pointer;
    transition:all 0.2s linear;
    &:hover {
        transform:translateY(2px);
    }
`
export const redirect = (loc)=>{
    window.location=loc
}
export default L_Footer