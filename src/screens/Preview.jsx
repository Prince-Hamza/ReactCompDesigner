import React from 'react'
import 'jquery-ui/ui/widgets/draggable'
import { useState, useEffect } from 'react'
import 'jquery-ui/ui/widgets/draggable'
import ItemOptions from './ItemOptions'
import { getCoords } from '../components/GUI'

export default function Preview({ components, mode, setMode }) {

  const [compInfo, setCompInfo] = useState(components)
  const [selectedItem, setSelectedItem] = useState(-1)

  useEffect(() => { setCompInfo([...components]) }, [components])

  const handleMouseMoveOnParent = (e) => {
    var mouseXY = getCoords(e)
    if (mode === 'move' && selectedItem > -1) Object.assign(compInfo[selectedItem], { top: mouseXY.yp + 35 + 'px', left: mouseXY.xp - 35 + 'px' })
    if (mode === 'resize' && selectedItem > -1) Object.assign(compInfo[selectedItem], { height: mouseXY.yp + 35 + 'px', width: mouseXY.xp - 35 + 'px' })
    setCompInfo([...compInfo])
  }

  const onRightClick = (e) => {
    e.preventDefault()
    setMode(mode === 'move' ? 'resize' : mode === 'resize' ? 'free' : 'move')
  }

  const onItemClick = (index) => { setSelectedItem(index) }

  return (
    <div style={Styles.PreviewWrap}>

      {selectedItem > -1 && components[selectedItem].name.includes('Layout') && <ItemOptions compInfo={compInfo} setCompInfo={setCompInfo} selectedItem={selectedItem} />}

      <div style={Styles.Preview} onMouseMove={(e) => { handleMouseMoveOnParent(e) }} onContextMenu={(e) => { onRightClick(e) }} >
        {compInfo.map((Item, index) => {
          return (
            <Item.Core key={Math.random()} onClick={onItemClick} info={Item} index={index} />
          )
        })}
      </div>
    </div>
  )
}

const Styles = ({
  PreviewWrap: {
    width: '100%',
    height: '100%',
    marginTop: '1%',
    marginLeft: '1%',
    backgroundColor: 'whitesmoke',
  },
  Preview: {
    position: 'absolute',
    top: '12%',
    left: '45%',
    width: '289px',
    height: '599px',
    backgroundColor: 'white',
    boxShadow: '0px 0px 4px 1px lightgray'
  },
  itemWrapper: {
    border: 'solid 1px'
  }

})



