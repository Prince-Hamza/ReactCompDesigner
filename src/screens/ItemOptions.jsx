import React from 'react'
import { useState } from 'react'

export default function ItemOptions({ compInfo, setCompInfo, selectedItem }) {

    const contentStyles = ['top right', 'top middle', 'top left', 'centrify', 'centre left', 'centre right', 'bottom right', 'bottom middle', 'bottom left']
    const [flex, setFlex] = useState({ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' })


    const inLayout = (item) => {
        item.inLayout = compInfo[selectedItem].key
        alert(`layout: ${JSON.stringify(compInfo[selectedItem])}`)
        alert(`before : ${JSON.stringify(compInfo[selectedItem])}`)
        compInfo[selectedItem].children.push(item)
        alert(`after : ${JSON.stringify(compInfo[selectedItem])}`)
        setCompInfo([...compInfo])
    }

    const flexStyle = (style) => { }

    const toggleDirection = () => { setFlex(flex.flexDirection === 'row' ? 'column' : 'row') }

    return (
        <div style={Styles.menu}>
            <br />
            <h5> {`Layout ${compInfo[selectedItem].key} children`} </h5>
            {compInfo.map((item) => {
                return (
                    <div>
                        {!item.name.includes('Layout') &&
                            <div style={Styles.row}>
                                <input type="checkbox" onChange={(e) => { inLayout(item) }} />
                                <p> {`${item.name} ${item.key}`} </p>
                            </div>
                        }
                    </div>
                )
            })}

            <h5> Direction </h5>

            <div style={Styles.row}>
                <input checked={flex.flexDirection === 'row' ? true : false} type="radio" onChange={() => { toggleDirection() }} />
                <p> row </p>
            </div>

            <div style={Styles.row}>
                <input checked={flex.flexDirection === 'column' ? true : false} type="radio" onChange={() => { toggleDirection() }} />
                <p> column </p>
            </div>


            <h5> Justify </h5>

            {contentStyles.map((item) => {
                return (
                    <div style={Styles.row}>
                        <input type="radio" onChange={(e) => { flexStyle(item) }} />
                        <p> {item} </p>
                    </div>
                )
            })}

        </div>
    )
}

const Styles = ({
    menu: {
        position: 'absolute',
        right: '0%',
        top: '4%',
        width: '200px',
        height: '100%',
        backgroundColor: 'white',
        overflow: 'auto'
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
})
