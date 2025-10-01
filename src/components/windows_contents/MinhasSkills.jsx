import React, { useState} from 'react'
import '../Components.css'

import { skills } from '../../../public/assets/texts/skills/skills'

export const DivImagens = (props) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            {
                skills[props.itemSkill].map(element => {
                    const [imgok, setImgOk] = useState(true)
                    
                    if (!imgok) {
                        return null
                    } 
                    return <img src={`https://api.iconify.design/vscode-icons/file-type-${element == "Javascript" ? "js-official" : element == "PostgreSQL" ? "pgsql" : element.toLowerCase()}.svg`}
                    style={{ width: '5vw', transform: `rotate(${Math.round(Math.random() * 10000)}deg` }}
                        onError={() => setImgOk(false)}
                    />
                })
            }
        </div>
    )
}


export const MinhasSkills = () => {
    return (
        <section style={sectionStyle}>
            {
                Object.keys(skills).map(element => {
                    return <div>
                        <DivImagens itemSkill={element}/>
                        <h1 style={{ marginBottom: 0 }}>{element}</h1>
                        {
                            <ul>
                                {
                                    skills[element].map(element => {
                                        return <li>{element}</li>
                                    })
                                }
                            </ul>
                        }
                    </div>

                })
            }
        </section>
    )
}

const sectionStyle = {
    maxHeight: '60vh',
    overflowY: 'scroll',
    background: 'white',
    paddingBlock: 25,
    paddingInline: 50,
    margin: 5,
}