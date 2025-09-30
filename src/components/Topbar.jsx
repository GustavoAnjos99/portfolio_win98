import React from 'react'
import { colors } from '../constants/Colors'
import { ButtonWin } from './ButtonWin'

export const Topbar = (props) => {

    return (
        <>
            {props.home ?
                <header style={homeStyleHeader}>
                        <ButtonWin title={props.title} />
                        <ButtonWin title={`${new Date().getHours()}:${new Date().getMinutes()}`} />
                </header>
                :
                <header style={windowStyleHeader}>
                    <div style={blueTabStyle}>
                        <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
                            <img src={props.iconTab} style={{ width: '20px', height: '20px' }} />
                            <p style={{ color: colors.textWhite, margin: 0 }}>{props.title}</p>
                        </div>
                        <ButtonWin title="X" function={props.openCloseFunction} />
                    </div>
                </header>
            }
        </>
    )
}

const homeStyleHeader = {
    width: '100%',
    background: colors.buttonBackground,
    marginBottom: "3vw",
    borderTop: '2px solid #FFFFFF',
    borderBottom: '2px solid #424242ff',
    paddingInline: 5,
    paddingBlock: 2,
    display: 'flex',
    justifyContent: 'space-between'
}

const windowStyleHeader = {
    minWidth: "100%",
    background: colors.buttonBackground,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: '2px solid #424242ff',
}

const blueTabStyle = {
    background: colors.tabBlue,
    width: '100%',
    paddingInline: 5,
    margin: 3,
    paddingBlock: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
}