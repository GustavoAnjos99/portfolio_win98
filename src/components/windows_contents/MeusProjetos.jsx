import React, { useState, useEffect } from 'react'
import '../Components.css'
import { colors } from '../../constants/Colors'

export const MeusProjetos = () => {
    return (
        <section style={sectionStyle}>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', margin: 0 }}>
                <img src='../../assets/gifs/profile.gif' style={{ width: '10vw', height: '11vw', border: `2px solid ${colors.buttonBackground}` }} />
                <img src='../../assets/gifs/computer_cd.gif' style={{ width: '10vw', height: '10vw' }} />
            </div>
            <hr/>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

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