import React from 'react'
import {Link} from "react-router-dom"
import './NavBar.scss'
const NavBar = ()=>{
    return (
        <div className="NavBar-container">
            <div className="Nav-icon">
                <img src="./images/Group.png" />
            </div>
            <div className="Nav">
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/"><li>About</li></Link>
                    <Link to="/"><li>Skills</li></Link>
                    <Link to="/"><li>Projects</li></Link>
                </ul>
            </div>
        </div>
    )
}
export default NavBar