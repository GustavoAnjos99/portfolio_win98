import React, { useState, useEffect } from 'react'
import '../Components.css'
import { colors } from '../../constants/Colors'

import profile from '../../assets/gifs/profile.gif'
import computer_cd from '../../assets/gifs/computer_cd.gif'
import sobreMimTxt from '../../assets/texts/sobre_mim/sobre_mim.txt?raw'

export const SobreMim = () => {
    const [textSobreMim, setTextSobreMim] = useState([])
    
    useEffect(() => {
        setTextSobreMim(sobreMimTxt.split("\n"))
    }, []) 

    return (
        <section style={sectionStyle}>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', margin: 0 }}>
                <img src={profile} style={{ width: '10vw', height: '11vw', border: `2px solid ${colors.buttonBackground}` }} />
                <img src={computer_cd} style={{ width: '10vw', height: '10vw' }} />
            </div>
            <hr/>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                {
                    textSobreMim.map(element => {
                        return <p style={{ textAlign: 'justify' }}>{element}</p>
                    })
                }
            </div>
        </section>
    )
}

const sectionStyle = {
    background: 'white',
    paddingBlock: 25,
    paddingInline: 50,
    margin: 5,
}