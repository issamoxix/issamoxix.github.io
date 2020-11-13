import React from 'react'
import styled from 'styled-components'
import {primaryFont} from '../styles/global'
import { Link } from 'react-router-dom'
import ToggleTheme from './ToggleTheme'
const NavBar = ()=>{
    // const [toggletheme,settoggletheme] = useState(false)
    
    return (
        <Container>
            <List>
            <Link to="/">
                <ListItems>
                    Home
                </ListItems>
                </Link>
                <Link to="/About">
                <ListItems>
                    About
                </ListItems>
                </Link>
                <Link to="/Skills">
                <ListItems>
                    Skills
                </ListItems>
                </Link>
                <Link to="/Projects">
                <ListItems>
                    Projects
                </ListItems>
                </Link>
            </List>
            {/* <ThemeMode src={theme?moon:sun} onClick={()=>setTheme(!theme)} /> */}
            <ToggleTheme/>
        </Container>
    )
}
const Container = styled.div`
    color:${({theme})=>theme.main_color};
    height:70px;
    width:100%;
    position:relative;
`
const List = styled.ul`
    list-style:none;
    display:flex;
    flex-direction:row;
    font-family:${primaryFont};
    margin-left:10px;
`
const ListItems = styled.li`
    margin-right:30px;
    color:${({theme})=>theme.main_color};
    cursor:pointer;
    transition:all 0.2s linear;
    &:hover {
        color:${({theme})=>theme.pr100};
    }
`

export default NavBar