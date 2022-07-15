import React from 'react'

export default function Layout({ info, onClick, index }) {
    return (
        <div
            style={{ ...Styles.layoutWrap, width: info.width, height: info.height, top: info.top, left: info.left }}
            onClick={() => { onClick(index) }}
        >
        </div>
    )
}


const Styles = ({
    layoutWrap: {
        position: 'absolute',
        border: 'solid 1px cyan'
    }
})
