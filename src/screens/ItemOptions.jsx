import React from 'react'

export default function ItemOptions({ compInfo, setCompInfo, selectedItem }) {
    return (
        <div style={Styles.menu}>
            <br />
            <h5> {`Layout ${selectedItem.key} children`} </h5>
            {compInfo.map((item) => {
                return (
                    <div style={Styles.row}>
                        <input type="checkbox" onChange={(e) => { }} />
                        {`${item.name} ${item.key}`}
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
        backgroundColor: 'white'
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
})
