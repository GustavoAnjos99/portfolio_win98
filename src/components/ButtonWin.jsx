import React from 'react'
import { colors } from '../constants/Colors'
import './Components.css'

export const ButtonWin = (props) => {
  return (
    <button onClick={props.function} className='buttonWinContainer'>{props.title}</button>
  )
}
