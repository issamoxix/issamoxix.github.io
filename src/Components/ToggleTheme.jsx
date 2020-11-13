import React,{useContext} from 'react'
import {ThemeContext} from '../utils/themeContext'
import sun from '../assets/images/sun.png'
import moon from '../assets/images/moon.png'
import styled from 'styled-components'
const ToggleTheme = () => {
    const {theme,setTheme} = useContext(ThemeContext)

    return (
        <>
        <ThemeMode src={theme?moon:sun} onClick={()=>setTheme(!theme)} />
        </>
    )
}
const ThemeMode = styled.img`
    position:absolute;
    right:0;
    top:0;
    height:2rem;
    cursor:pointer;
    @media(max-width:600px){
        top:-5px;
    }
`
export default ToggleTheme
