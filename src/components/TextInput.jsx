import React from 'react'

export default function TextInput({ info, onClick, index }) {
    return (
        <button
            style={{ ...Styles.input, width: info.width, height: info.height, top: info.top, left: info.left }}
            onClick={() => { onClick(index) }}
            type="text"
        ></button>
    )
}

const Styles = ({
    input: {
        position: 'absolute'
    }
})