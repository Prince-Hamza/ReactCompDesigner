import React from 'react'

export default function ItemOptions({ compInfo, setCompInfo, selectedItem }) {

    const contentStyles = ['top right', 'top middle', 'top left', 'centrify', 'centre left', 'centre right', 'bottom right', 'bottom middle', 'bottom left']

    const inLayout = (item) => {
        var layout = compInfo[selectedItem]
        item.inLayout = layout.key
        layout.children = []
        layout.children.push(item)
    }

    const flexStyle = (style) => {

    }

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
                <input type="radio" onChange={(e) => { }} />
                <p> row </p>
            </div>


            <div style={Styles.row}>
                <input type="radio" onChange={(e) => { }} />
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
        overflow:'auto'
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
})
