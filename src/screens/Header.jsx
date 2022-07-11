import React from 'react'

export default function Header({ setMode }) {
    return (
        <div style={Styles.Header} >
            <p style={Styles.Item} onClick={() => { setMode('move') }}> move </p>
            <p style={Styles.Item} onClick={() => { setMode('resize') }}> resize </p>
        </div>
    )
}

const Styles = ({
    Header: {
        width: '100%',
        height: '30px',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    Item: {
        marginRight: '18px',
        cursor:'pointer'
    }
})

