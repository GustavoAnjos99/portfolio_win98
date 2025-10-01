import { useState } from 'react'
import '../Components.css'
import { ButtonWin } from '../ButtonWin'
import { contato } from '../../../public/assets/texts/contato/contato'

import world_computer from './assets/gifs/world_computer.gif'

import world_computer from '../../../assets/gifs/world_computer.gif'

export const Contato = () => {
    const [emailCopied, setEmailCopied] = useState(false)

    const copyEmail = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            setEmailCopied(true)
        });
    };
    return (
        <section style={sectionStyle}>
            <div className='reverse-border' style={{ padding: '2%', display: 'flex', flexDirection: 'column', alignItems: 'space-between' }}>
                <h1>Entre em contato!</h1>
                <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
                    {
                        Object.keys(contato).map(element => {
                            return element == 'email' ? <>
                                    <ButtonWin title={contato[element]} function={() => copyEmail(contato[element])} contato />
                                    <p style={{fontWeight: 'bolder', textAlign: 'center', margin: 0}}>{emailCopied ? "Email Copiado!" : null}</p>
                                </>
                                :
                                <a href={contato[element]} target={'blank'}>
                                    <ButtonWin title={element} contato />
                                </a>
                        })
                    }
                </div>
                <div style={{padding: '10%', display: 'flex', justifyContent: 'center'}}>
                    <img src={world_computer} style={{ width: '10vw', height: '10vw'}} />
                </div>
            </div>
        </section>
    )
}

const sectionStyle = {
    background: 'white',
    margin: 5,
}