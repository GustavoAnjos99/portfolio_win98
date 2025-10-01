import React from 'react'
import { colors } from '../constants/Colors'
import './Components.css'

export const ButtonWin = (props) => {
  const handleClick = (e) => {
    e.stopPropagation()
    if (props.function) props.function(e)
  }
  return (
    <button onClick={handleClick} onTouchEnd={handleClick} className={`${props.contato ? 'buttonWinContainerContato' : 'buttonWinContainer'}`}>{props.title}</button>
  )
}
