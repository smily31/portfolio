import React from 'react'
import './skill.scss'
import { skill } from "../../skill"

export default function Skill() {
    return (
        <div className="skill" id="skill">
            <h2 className="title">
                My Skills
            </h2>
           <div className="container">
               {
                   skill.map( s => (
                       <div className="box">
                           <img src={s.logo} alt="logo" />
                       </div>
                   )
                   )
               }
           </div>
        </div>
    )
}
