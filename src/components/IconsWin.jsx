import React from 'react'
import './Components.css'
import { colors } from '../constants/Colors'


import computer from '../../assets/icons/computer.png'
import computer_folder from '../../assets/icons/computer_folder.png'
import people from '../../assets/icons/people.png'
import search from '../../assets/icons/search.png'
import { Window } from './Window'

export const Icons = () => {
    const iconPositons = [
        ["30%", "90%", "Sobre mim", people],
        ["80%", "68%", "Minhas Skills", computer],
        ["40%", "40%", "Meus Projetos", computer_folder],
        ["60%", "10%", "Contato", search]
    ]
    return (
        <>
            {
                iconPositons.map(element => {

                    const iconStyle = {
                        top: element[0],
                        right: element[1],
                    }

                    return <div>
                        <section style={iconStyle} className='icon' key={element[2]}>
                            <img src={element[3]} style={{ width: '48px', height: '48px', margin: 0 }} />
                            <p style={{ margin: 0, color: colors.textWhite }}>{element[2]}</p>
                        </section>
                        <Window titleWindow={element[2]} closeFunction={() => { alert("ola") }} />
                    </div>
                })
            }
        </>
    )
}



