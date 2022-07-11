import React from 'react'

export default function Button({ info, onClick, index }) {
    return (
        <div
            style={{ ...Styles.Button, width: info.width, height: info.height, top: info.top, left: info.left }}
            onClick={() => { onClick(index) }}
        >
            <p>  Button </p>
        </div>
    )
}

const Styles = ({
    Button: {
        position: 'absolute',
        border: 'none',
        outline: 'none',
        backgroundColor: 'cyan',
        color: 'white',
        boxShadow: '0px 0px 8px 1px lightgray',
        cursor: 'pointer'
    }
})



