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
        <section style={sectionStyle} className='reverse-border'>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', margin: 0 }}>
                <img src={profile} style={widthImgGifresponsive} />
                <img src={computer_cd} style={widthImgGifresponsive} />
            </div>
            <hr />
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

const widthImgGifresponsive = {
    width: window.innerWidth < 615 ? '30vw' : '10vw', 
    height: window.innerWidth < 615 ? '30vw' : '10vw'
}