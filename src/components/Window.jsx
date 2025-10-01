import React, { useRef } from 'react'
import Draggable from 'react-draggable'
import { Topbar } from './Topbar'
import { colors } from '../constants/Colors'

export const Window = (props) => {
    const nodeRef = useRef(null)
    
    return (
        <Draggable cancel='.no-drag, section' nodeRef={nodeRef} bounds='body' defaultPosition={{x: window.innerWidth < 800 ? 0 : window.innerWidth / 2, y:-(window.innerHeight / 2)}}>
            <div ref={nodeRef} style={styleWindowContent}>
                <Topbar title={props.titleWindow} openCloseFunction={props.openCloseFunction} iconTab={props.iconTab}/>
                {props.children}
            </div>
        </Draggable>
    )
}

const styleWindowContent = {
    background: colors.windowBackground, 
    cursor: 'auto',
    borderTop: '2px solid #FFFFFF',
    borderLeft: '2px solid #FFFFFF',
    borderRight: '2px solid #424242ff',
    borderBottom: '2px solid #424242ff',
}