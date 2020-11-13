import React from 'react'
import styled from 'styled-components'

const ProgressBar = ({width}) => {
    return (
        <Container>
            <Progress style={{width:width}}>

            </Progress>
        </Container>
    )
}
const Container = styled.div`
    border:4px solid var(--pr200);
    height:40px;
    width:30vw;
    border-radius:20px;
    @media(max-width:600px){
        width:100%;
    }
`
const Progress = styled.div`
    background-color:var(--pr100);
    
    height:100%;
    border-radius:20px;
    animation:progress 2s linear;
`
export default ProgressBar