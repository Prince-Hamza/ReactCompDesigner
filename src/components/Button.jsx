import React from 'react'

export default function Button({ location, size, onMouseDown }) {
    return (
        <div style={{ ...Styles.Button, width: size.width, height: size.height, top: location.top, left: location.left }}        >
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



