import React from 'react'
import { colors } from '../constants/Colors'

export const Title = (props) => {
  const titleStyle = {
    color: colors.textWhite, 
    fontSize: props.subtitle ? '4vw' : window.innerWidth < 615 ? '7vw' : '4vw', 
    margin: 0, 
    textAlign: 'center', 
    fontStyle: props.italic ? 'italic' : 'normal'
  }
  
  return (
    <h1 style={titleStyle}>{props.text}</h1>
  )
}
