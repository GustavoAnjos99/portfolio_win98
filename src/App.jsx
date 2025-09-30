import { useState } from 'react'
import './App.css'

import { Title } from './components/Title'
import { Topbar } from './components/Topbar'
import { Window } from './components/Window'
import { colors } from './constants/Colors'
import { SobreMim } from './components/windows_contents/SobreMim'
import { MinhasSkills } from './components/windows_contents/MinhasSkills'
import { MeusProjetos } from './components/windows_contents/MeusProjetos'

import computer from '../assets/icons/computer.png'
import computer_folder from '../assets/icons/computer_folder.png'
import people from '../assets/icons/people.png'
import search from '../assets/icons/search.png'

function App() {
  const iconsData = [
    ["30%", "90%", "Sobre mim", people],
    ["80%", "68%", "Minhas Skills", computer],
    ["40%", "40%", "Meus Projetos", computer_folder],
    ["60%", "10%", "Contato", search]
  ]

  const [window, setWindow] = useState({})
  const openCloseWindow = (title, op) => {
    if (op == "o") {
      let verifyWindow = window
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
  // //     if (op == "o"){
  //       let verifyWindow = window
  //       delete verifyWindow[title]

  //       let name
  //       Object.keys(verifyWindow).forEach(element => {
  //         if (element) name = element
  //         setWindow(prev => ({
  //           ...prev,
  //           [name]: !prev[name]
  //         }))
  //       })
  //       setWindow(prev => ({
  //         ...prev,
  //         [title]: !prev[title]
  //       }))
  //     } else if (op == "c") {
  return (
    <div>
      <Topbar title="Gustavo dos Anjos" home />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: "5vw" }}>
        <img src='..\assets\gifs\star_spinning.gif' style={{ width: "5%", height: "5%" }} />
        <div>
          <Title text={"GUSTAVO DOS ANJOS"} />
          <Title text={"DEV FULLSTACK"} italic />
        </div>
        <img src='../assets/gifs/star_spinning.gif' style={{ width: "5%", height: "5%" }} />
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
          window[element[2]] && (
            <div style={{ minWidth: 'min-content', maxWidth: '35vw' }}>
              <Window
                iconTab={element[3]}
                key={element[2]}
                titleWindow={element[2]}
                openCloseFunction={() => openCloseWindow(element[2], "c")}
              >
                {
                  element[2] == "Sobre Mim" ? <SobreMim /> :
                    element[2] == "Minhas Skills" ? <MinhasSkills /> :
                      element[2] == "Meus Projetos" ? <MeusProjetos /> :
                        <SobreMim />
                }
              </Window>
            </div>
          )
        ))
      }
      <p style={{ position: 'absolute', bottom: 0, left: 15 }}>Gustavo dos anjos, dev fullstack | 2025</p>
    </div>
  )
}

export default App
