import React from 'react'

import 'jquery-ui/ui/widgets/draggable'
import { useState } from 'react'
import 'jquery-ui/ui/widgets/draggable'

export default function Preview({ components, mode, setMode }) {

  const [location, setLocation] = useState({ top: 0, left: 0 })
  const [size, setSize] = useState({ width: '100px', height: '50px' })
  const [compInfo, setCompInfo] = useState([{ top: 0, left: 0, width: '100px', height: '50px' }, { top: 0, left: 0, width: '100px', height: '50px' }])
  const [selectedItem, setSelectedItem] = useState(0)
  //const Components = [Button, TextInput]

  const getXYpos = (elm) => {
    var x = elm.offsetLeft;
    var y = elm.offsetTop;

    elm = elm.offsetParent

    while (elm != null) {
      x = parseInt(x) + parseInt(elm.offsetLeft)
      y = parseInt(y) + parseInt(elm.offsetTop)
      elm = elm.offsetParent;
    }

    return { 'xp': x, 'yp': y }
  }

  const getCoords = (e) => {
    var xy_pos = getXYpos(e.target)
    // e.pageX - elem.left
    var x = e.pageX - xy_pos['xp']
    var y = e.pageY - xy_pos['yp']

    return { 'xp': x, 'yp': y }

  }

  const handleMouseMoveOnParent = (e) => {
    var mouseXY = getCoords(e)
    if (mode === 'move') { Object.assign(compInfo[selectedItem], { top: mouseXY.yp + 8 + 'px', left: mouseXY.xp - 8 + 'px' }) }
    if (mode === 'resize') { Object.assign(compInfo[selectedItem], { height: mouseXY.yp + 8 + 'px', width: mouseXY.xp - 8 + 'px' }) }
    setCompInfo([...compInfo])
  }

  const onRightClick = (e) => {
    e.preventDefault()
    setMode(mode === 'move' ? 'resize' : mode === 'resize' ? 'free' : 'move')
  }

  const onItemClick = (index) => {
    setSelectedItem(index)
  }



  return (
    <div style={Styles.PreviewWrap}>
      <div
        style={Styles.Preview}
        onMouseMove={(e) => { handleMouseMoveOnParent(e) }}
        onContextMenu={(e) => { onRightClick(e) }}
      >
        {components.map((Item, index) => {
          return (
            <Item key={Math.random()} onClick={onItemClick} info={compInfo[index]} index={index} >

            </Item>
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



