import React from 'react'

import styled from 'styled-components'
import {primaryFont} from '../styles/global'
import sun from '../assets/images/sun.png'
import { Link } from 'react-router-dom'
const NavBar = ()=>{
    return (
        <Container>
            <List>
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
            <ThemeMode src={sun} />
        </Container>
    )
}
const Container = styled.div`
    color:white;
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
    color:white;
    cursor:pointer;
    transition:all 0.2s linear;
    &:hover {
        color:var(--pr100);
    }
`
const ThemeMode = styled.img`
    position:absolute;
    right:0;
    top:0;
    height:2rem;
    cursor:pointer;
`
export default NavBar