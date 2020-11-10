import React from 'react'
import "./Home.scss"
const Home_content = ()=>{
    return (
        <div className="home-container">
            <div className="home-body">
                <h1>
                    <span style={{color:"white"}}>Hi im </span> Issam
                </h1>
                <button>About Me</button>
            </div>
            <div className="home-pic">
                <img className="pic" src="./images/exp.png" />
            </div>
        </div>
    )
}
export default Home_content