import { useState } from 'react'
import './App.css'

import { Title } from './components/Title'
import { Topbar } from './components/Topbar'
import { Window } from './components/Window'
import { colors } from './constants/Colors'
import { SobreMim } from './components/windows_contents/SobreMim'
import { MinhasSkills } from './components/windows_contents/MinhasSkills'
import { MeusProjetos } from './components/windows_contents/MeusProjetos'
import { Contato } from './components/windows_contents/Contato'
import { ExpProfissionais } from './components/windows_contents/ExpProfissionais'
import { FormAcademica } from './components/windows_contents/FormAcademica'

import star_spinning from './assets/gifs/star_spinning.gif'
import computer from './assets/icons/computer.png'
import computer_folder from './assets/icons/computer_folder.png'
import people from './assets/icons/people.png'
import search from './assets/icons/search.png'
import world_folder from './assets/icons/world_folder.png'
import globe from './assets/icons/globe.png'
import portfolio_logo from './assets/img/portfolio_logo.png'

function App() {
  const iconsDataMobile = [
    ["15%", "80%", "Sobre mim", people],
    ["60%", "70%", "Minhas Skills", computer],
    ["40%", "40%", "Meus Projetos", computer_folder],
    ["60%", "5%",  "Contato", search],
    ["75%", "25%", "Exp. Profissionais", world_folder],
    ["20%", "10%", "Form. Acadêmica", globe]
  ]
  const iconsDataPC = [
    ["25%", "86%", "Sobre mim", people],
    ["80%", "68%", "Minhas Skills", computer],
    ["40%", "55%", "Meus Projetos", computer_folder],
    ["50%", "5%", "Contato", search],
    ["70%", "30%", "Exp. Profissionais", world_folder],
    ["20%", "25%", "Form. Acadêmica", globe]
  ]

  const iconsData = window.innerWidth < 615 ? iconsDataMobile : iconsDataPC

  const [windows, setWindow] = useState({})
  const openCloseWindow = (title, op) => {
    if (op == "o") {
      let verifyWindow = windows
      delete verifyWindow[title]

      Object.keys(verifyWindow).forEach(element => {
        if (verifyWindow[element]) {
          setWindow(prev => ({
            ...prev,
            [element]: !prev[element]
          }))
        }
      })

    }
    setWindow(prev => ({
      ...prev,
      [title]: !prev[title]
    }))
  }

  
  return (
    <div className='containerHome'>
      <Topbar title="Gustavo dos Anjos" home />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: "5vw" }}>
        {/* <img src={star_spinning} style={imageStyles} /> */}
        <div>
          <img src={portfolio_logo} style={{width: window.innerWidth < 900 ? '80vw' : '55vw'}}/>
          {/* <Title text={"GUSTAVO DOS ANJOS CAMPOS"} />
          <Title text={"Dev Fullstack"} subtitle/> */}
        </div>
        {/* <img src={star_spinning} style={imageStyles} /> */}
      </div>
      <div className='iconsContainer'>
        {
          iconsData.map(element => {

            const iconStyle = {
              top: element[0],
              right: element[1],
            }

            return <section style={iconStyle} className='icon' key={element[2]} onClick={() => openCloseWindow(element[2], "o")}>
              <img src={element[3]} style={{ width: '48px', height: '48px', margin: 0 }} />
              <p style={{ margin: 0, color: colors.textWhite }}>{element[2]}</p>
            </section>
          })
        }
      </div>
      {
        iconsData.map(element => (
          windows[element[2]] && (
            <div style={{ minWidth: 'min-content', maxWidth: window.innerWidth < 1450 ? '70vw' : window.innerWidth < 615 ? '90vw' : element[2] == 'Meus Projetos' ? '50vw' :'35vw' }}>
              <Window
                iconTab={element[3]}
                key={element[2]}
                titleWindow={element[2]}
                openCloseFunction={() => openCloseWindow(element[2], "c")}
              >
                {
                  element[2] == "Sobre mim" ? <SobreMim /> :
                    element[2] == "Minhas Skills" ? <MinhasSkills /> :
                      element[2] == "Meus Projetos" ? <MeusProjetos /> :
                        element[2] == "Contato" ? <Contato /> : 
                          element[2] == "Exp. Profissionais" ? <ExpProfissionais/> : 
                            element[2] == "Form. Acadêmica" ? <FormAcademica/> : null
                }
              </Window>
            </div>
          )
        ))
      }
      <p style={{ position: 'absolute', bottom: 0, left: 15, zIndex: -1 }}>Gustavo dos anjos, dev fullstack | 2025</p>
    </div>
  )
}

const imageStyles = {
   width: window.innerWidth < 615 ? "15%" : "5%", 
   height: window.innerWidth < 615 ? "35%" : "5%"
}

export default App
