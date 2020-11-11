import React from 'react'
import styled from 'styled-components'

 const Input = () => {
    return (
        <Container>
            <PrimaryButton>About</PrimaryButton>
            <PrimaryButton>Skills</PrimaryButton>
            <PrimaryButton>Projects</PrimaryButton>
        </Container>
    )
}
const Container = styled.div`
    display:flex;
    flex-direction:column;
    margin-top:20px;
`
const PrimaryButton = styled.button`
    border-color:transparent;
    margin:5px 0;
    width:350px;
    background-color:var(--pr500);
    font-family: "Work Sans", sans-serif;
    color:white;
    font-size:30px;
    padding:5px 0 ;
    border-radius:10px;
    box-shadow: 0px 0px 5px var(--pr100);
    transition:all 0.2s linear;
    cursor:pointer;
    &:hover {
        transform:translateY(-2px);
    }
`
export default Input
