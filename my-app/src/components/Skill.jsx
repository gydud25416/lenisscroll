"use client"
import React from "react";
import Title from "./Title";

const skillSet = [
    {
        id:1,
        skill:"React.js"
    },
    {
        id:2,
        skill:"Next.js"
    },
    {
        id:3,
        skill:"Javascript"
    },
    {
        id:4,
        skill:"jQuery"
    },
    {
        id:5,
        skill:"CSS3"
    },
    {
        id:6,
        skill:"HTML"
    },
    {
        id:7,
        skill:"GA4"
    },
    {
        id:8,
        skill:"Git"
    },
    {
        id:9,
        skill:"SVN"
    },
    {
        id:10,
        skill:"Slack"
    },
    {
        id:11,
        skill:"Notion"
    },
    {
        id:12,
        skill:"Jira"
    },
    {
        id:13,
        skill:"Adobe Photoshop"
    },
    {
        id:14,
        skill:"Adobe Illustrator"
    },
    {
        id:15,
        skill:"Figma"
    },
]

export default function Skill(){

    return(
        <div id="skill" className="wrap_skill">
            <Title title={'Skill'} />
            <div className="skills">
                <ul>
                    {skillSet.map((item)=>(
                        <li key={item.id}>
                        <button>{item.skill}</button>
                        <div className="img">
                            <img src={`skill${item.id}.png`} alt={item.skill} />
                        </div>
                        <div  className="cursor pc-view">{ item.id === 1 ? "⬅️ Skill에 마우스를 올려보세요! 🖱️" : "  " }</div>
                        <div className="cursor mo-view">{ item.id === 1 ? "⬅️ TOUCH! ❣️" : "  " }</div>
                    </li>
                    ))} 
                </ul>
            </div>
        </div>
    )
}