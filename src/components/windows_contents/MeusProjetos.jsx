import React, { useState } from 'react'
import '../Components.css'

import { colors } from '../../constants/Colors'
import { projetos } from './assets/texts/projetos/projetos'
import { ButtonWin } from '../ButtonWin'
import folder from '../../../assets/gifs/folder.gif'

export const PageProjeto = (props) => {
    const [imgok, setImgOk] = useState(true)

    return (
        <>
            <img src={props.data.foto} style={{ display: imgok ? 'block' : 'none', width: props.mobile ? '20%' : '100%', border: `2px solid gray` }} onError={() => setImgOk(false)} />
            <h3>{props.nameProject}</h3>
            <p style={{ textAlign: 'justify' }}>{props.data.texto}</p>
            <p><a href={props.data.links[0]}>Github</a> | <a href={props.data.links[1]}>Projeto</a></p>
            <div style={{display: 'flex', gap: '50%', justifyContent: 'center'}}>
                  <img src={folder} style={{ width: '5vw', height: '5vw' }} />
                  <img src={folder} style={{ width: '5vw', height: '5vw' }} />
            </div>
        </>
    )
}


export const MeusProjetos = () => {
    const [project, setProject] = useState({})
    const tiposProjetos = Object.keys(projetos)
    const nomesProjetos = []
    tiposProjetos.forEach(element => {
        Object.keys(projetos[element]).forEach(nome => {
            nomesProjetos.push(nome)
        })
    })

    const openProject = (title, op) => {
        if (op == "o") {
            let verifyProject = project
            delete verifyProject[title]

            Object.keys(verifyProject).forEach(element => {
                if (verifyProject[element]) {
                    setProject(prev => ({
                        ...prev,
                        [element]: !prev[element]
                    }))
                }
            })
        }
        setProject(prev => ({
            ...prev,
            [title]: !prev[title]
        }))
    }

    return (
        <section style={sectionStyle}>
            <div style={{ margin: 0, padding: '2%', width: '40%', background: 'white' }} className='reverse-border'>
                {
                    tiposProjetos.map(element => {
                        return <div>
                            <h3>{element}</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}>
                                {
                                    Object.keys(projetos[element]).map(element => {
                                        return <ButtonWin title={element} function={() => openProject(element, "o")} />
                                    })
                                }
                            </div>
                        </div>
                    })
                }
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', background: 'white', padding: '2%'}} className='reverse-border'>
                {
                    tiposProjetos.map(element => {
                        return Object.keys(projetos[element]).map(nome => {
                            return project[nome] ? <PageProjeto nameProject={nome} data={projetos[element][nome]} mobile={nome == 'Predimec Manutenções App' ? true : false} /> : null
                        })
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