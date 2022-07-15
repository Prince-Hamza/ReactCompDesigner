import React from 'react'

export default function TextInput({ info, onClick, index }) {
    return (
        <input
            style={{ ...Styles.input, width: info.width, height: info.height, top: info.top, left: info.left }}
            onClick={() => { onClick(index) }}
            type="text"
        ></input>
    )
}

const Styles = ({
    input: {
        position: 'absolute'
    }
})