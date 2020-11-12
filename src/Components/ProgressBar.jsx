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
`
const Progress = styled.div`
    background-color:var(--pr100);
    
    height:100%;
    border-radius:20px;
`
export default ProgressBar