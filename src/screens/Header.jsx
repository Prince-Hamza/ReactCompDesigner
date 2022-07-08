import React from 'react'

export default function Header(props) {
    return (
        <div style={Styles.Header} >
            <p style={Styles.Item} > move </p>
        </div>
    )
}

const Styles = ({
    Header: {
        width: '100%',
        height: '30px',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    Item:{
        marginRight:'18px'        
    },
    resize:{
        cursor:'pointer'
    }
})

