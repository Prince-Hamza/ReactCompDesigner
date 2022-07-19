import React from 'react'
import { postData } from './interact'

export default function Header() {
    return (
        <div style={Styles.Header}>
            <div style={Styles.headerLeft}></div>
            <div style={Styles.headerRight}>
                <p style={Styles.Item} onClick={() => { postData(true) }} > {`< />`} </p>
            </div>
        </div>
    )
}


const subHeader = ({
    position: 'inherit',
    top: '0%',
    width: '35%',
    height: '100%'
})

const centrify = ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
})

const Styles = ({
    Header: {
        position: 'absolute',
        width: '100%',
        height: '30px',
        backgroundColor: 'rgb(79,80,80)'
    },
    headerLeft: {
        ...subHeader,
        ...centrify,
        left: '0%'
    },
    headerRight: {
        ...subHeader,
        ...centrify,
        right: '0%',
        color: 'cyan'
    },
    Item: {
        marginRight: '18px',
        cursor: 'pointer'
    }
})

