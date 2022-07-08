import React from 'react'

export default function Button(props) {

    function Resize(e) {
        var element = 'Button'
        element.style.width = (e.clientX - element.offsetLeft) + 'px';
        element.style.height = (e.clientY - element.offsetTop) + 'px';
    }

    function stopResize(e) {
        window.removeEventListener('mousemove', Resize, false);
        window.removeEventListener('mouseup', stopResize, false);
    }

    const resizerMouseDown = () => {
        window.addEventListener('mousemove', Resize, false)
        window.addEventListener('mouseup', stopResize, false)
        window.addEventListener('mouseleave', stopResize, false);
    }

    return (
        <div
            style={{ ...Styles.Button, width: props.size.width, height: props.size.height, top: props.cursorPosition.top, left: props.cursorPosition.left }}
            id={'Button'}
            onMouseMove={(e) => { props.moveOrResize(e, 'Button') }}
        >
            <p>  Button </p>

            {/* <div id={'resizerifier'} style={Styles.Resizer} onMouseDown={(e) => { resizerMouseDown() }}>         </div> */}
        </div>
    )
}

const Styles = ({
    Button: {
        // width: '100%',
        // height: '50px',
        position: 'absolute',
        border: 'none',
        outline: 'none',
        backgroundColor: 'cyan',
        color: 'white',
        boxShadow: '0px 0px 8px 1px lightgray',
        cursor: 'pointer'
    },
    Resizer: {
        width: '100%',
        height: '5px',
        backgroundColor: 'black',
        left: '0',
        bottom: '0',
        cursor: 'se-resize'
    }
})



