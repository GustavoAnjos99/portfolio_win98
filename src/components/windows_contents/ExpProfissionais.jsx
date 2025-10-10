import React, { useState } from 'react'
import '../Components.css'

import { colors } from '../../constants/Colors'
import clouds from '../../assets/img/clouds.png'
import world_folder from '../../assets/icons/world_folder.png'

import { experiencias } from '../../assets/texts/experiencias/experiencias'

export const CardEmprego = (props) => {
    return (
        <div style={{ borderBottom: '1px solid black' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', margin: 0 }}>
                <h3 style={{ margin: 0 }}>{props.nomeEmpresa}</h3>
                <h3 style={{ margin: 0, textAlign: 'right' }}>{props.data}</h3>
            </div>
            <p style={{ textAlign: 'justify' }}>{props.descricaoEmprego}</p>
        </div>
    )
}



export const ExpProfissionais = () => {
    return (
        <section style={window.innerWidth < 615 ? sectionStyleMobile : sectionStyle}>
            {
                window.innerWidth > 615 &&
                <div style={{ padding: window.innerWidth < 615 ? '2%' : 0, margin: 0, width: window.innerWidth < 615 ? '100%' : '40%', background: 'white', height: window.innerWidth < 615 ? '10vh' : '50vh', marginBottom: window.innerWidth < 615 ? 10 : 0 }} className='reverse-border'>

                    <div style={window.innerWidth < 615 ? expsImgMobile.container : expsImg.container}>
                        <img src={clouds} style={window.innerWidth < 615 ? expsImgMobile.clouds : expsImg.clouds} />
                        <img src={world_folder} style={window.innerWidth < 615 ? expsImgMobile.icon : expsImg.icon} />
                        <h1 style={window.innerWidth < 615 ? expsImgMobile.text : expsImg.text}>Exps.</h1>
                    </div>

                </div>
            }
            <div style={{ width: '100%', background: 'white', padding: '2%' }} className='reverse-border'>
                <h1 style={{ margin: 0, marginBottom: '10%' }}>Minhas Experiências</h1>
                {
                    Object.keys(experiencias).map(nomeEmpresa => {
                        return <CardEmprego nomeEmpresa={nomeEmpresa} data={experiencias[nomeEmpresa]['data']} descricaoEmprego={experiencias[nomeEmpresa]['texto']} />
                    })
                }
            </div>
        </section>
    )
}

const sectionStyle = {
    display: 'flex',
    background: colors.buttonBackground,
    paddingBlock: 25,
    paddingInline: 20,
    margin: 0,
    justifyContent: 'space-evenly',
    gap: '10%'
}

const sectionStyleMobile = {
    display: 'flex',
    flexDirection: 'column',
    background: colors.buttonBackground,
    paddingBlock: 25,
    paddingInline: 20,
    margin: 0,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    gap: '10%'
}

const expsImg = {
    container: {
        position: 'relative',
        height: '100%',
        width: '100%'
    },
    clouds: {
        position: 'absolute',
        width: '100%'
    },
    icon: {
        position: 'absolute',
        width: '60%',
        top: '60px',
        right: '0',
        left: '0',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    text: {
        position: 'absolute',
        zIndex: 500,
        fontFamily: 'Helvetica',
        textShadow: '0 0.06vw, 0.06vw 0, 0.06vw 0.06vw',
        top: '25%',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: window.innerWidth < 1450 ? '6vw' : '3vw'
    }
}


const expsImgMobile = {
    container: {
        display: 'flex',
        alignItems: 'flex-start',
    },
    clouds: {
        width: '20%',
    },
    icon: {
        width: '25%',
        height: '25%',
        right: '0',
        left: '0',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    text: {
        zIndex: 500,
        fontFamily: 'Helvetica',
        textShadow: '0 0.06em, 0.06em 0, 0.06em 0.06em',
        fontSize: '3em'
    }
}