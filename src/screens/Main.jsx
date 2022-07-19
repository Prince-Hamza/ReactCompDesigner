import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Preview from './Preview'
import { useState } from 'react'

export default function Main() {
    const [components, setComponents] = useState([])
    const [mode, setMode] = useState('free')
    const [compLoad, setCompLoad] = useState(false)

    return (
        <div style={Styles.container}>
            <Header />
            <div style={Styles.primaryRow} >
                <Sidebar
                    components={components}
                    setComponents={setComponents}
                    setCompLoad={setCompLoad}
                />
                <Preview
                    components={components}
                    mode={mode}
                    setMode={setMode}
                    compLoad={compLoad}
                    setCompLoad={setCompLoad}
                />
            </div>
        </div>
    )
}


const Styles = ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: 'whitesmoke',
        width: '100%',
        height: '950px'
    },
    primaryRow: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    }
})


