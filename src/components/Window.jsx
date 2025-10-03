import React, { useRef } from 'react'
import Draggable from 'react-draggable'
import { Topbar } from './Topbar'
import { colors } from '../constants/Colors'

export const Window = (props) => {
    const nodeRef = useRef(null)
    
    const responsiveWindow = () => {
        if(window.innerWidth > 800) return {x: window.innerWidth / 4, y: -(window.innerHeight / 2)}
        if(window.innerWidth <= 800 && window.innerWidth > 615) return {x: 0, y: window.innerHeight}
        if(window.innerWidth <= 615) return {x: 0, y: 0}
    }

    return (
        <Draggable cancel='.no-drag, section' nodeRef={nodeRef} bounds='body' defaultPosition={responsiveWindow()}>
            <div ref={nodeRef} style={styleWindowContent}>
                <div style={{position: 'sticky', top: 0}}>
                    <Topbar title={props.titleWindow} openCloseFunction={props.openCloseFunction} iconTab={props.iconTab}/>
                </div>
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
    minWidth:  window.innerWidth < 615 ? '90vw' : '',
    maxHeight: '80vh',
    overflowY: 'auto'
}