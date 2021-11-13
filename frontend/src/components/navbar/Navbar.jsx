import React from 'react'
import './navbar.scss'

export default function Navbar() {
    return (
        <div className="navbar" id="navbar">
            <ul>
                <li> <a href="#intro">About Me</a></li>
                <li> <a href="#skill">Skill</a></li>
                <li> <a href="#project">Projects</a></li>
                <li> <a href="#contact">Contact Me</a></li>
            </ul>
        </div>
    )
}
