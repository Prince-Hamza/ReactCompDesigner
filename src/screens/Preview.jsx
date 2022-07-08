import React from 'react'
import Button from '../components/Button'
import $ from 'jquery'
import 'jquery-ui/ui/widgets/draggable'
import { Resizable } from '../components/GUI'
import { compNames } from '../components/componentsArray'
import { useEffect, useState } from 'react'
import 'jquery-ui/ui/widgets/draggable'

export default function Preview() {

  const [allowResize, setAllowResize] = useState(false)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [size, setSize] = useState({ width: '100%', height: '50px' })



  const Components = [Button]
  var selectedItem

  const Movable = (e, id) => {

    var y = e.clientY;
    var x = e.clientX;

    setCursorPosition({ top: y - 20 + 'px', left: x - 20 + 'px' });

    // document.getElementById(id).style.top = y - 20 + 'px';
    // document.getElementById(id).style.left = x - 20 + 'px';

  }

  const select = (id) => {
    // selectedItem = id
    // Movable()
    // alert(`selected item : ${id}`)
  }

  const moveOrResize = (e, id) => {
    if (allowResize) {
      var element = document.getElementById(id)
      console.log(`div Start: ${element.getBoundingClientRect().left} \n cursor left:${e.clientX}`)
      //element.style.width = (e.clientX - element.getBoundingClientRect().left) + 'px'
      //element.style.height = (e.clientY - element.getBoundingClientRect().top) + 'px'

      setSize({
        width: (e.clientX - element.getBoundingClientRect().left) + 'px',
        height: (e.clientY - element.getBoundingClientRect().top) + 'px'
      })

    } else {
      //setCursorPosition({ top: e.screenY, left: e.screenX });
      Movable(e, id)
    }
  }

  return (
    <div style={Styles.PreviewWrap}>
      <div style={Styles.Preview} className={'DropItemsContainer'} >
        {Components.map((Item, index) => {
          return (
            <Item key={Math.random()} moveOrResize={moveOrResize} cursorPosition={cursorPosition} size={size} />
          )
        })}
      </div>
      <button onClick={() => { setAllowResize(allowResize ? false : true) }} > resize </button>
    </div>
  )
}

const Styles = ({
  PreviewWrap: {
    width: '100%',
    height: '100%',
    marginTop: '1%',
    marginLeft: '1%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Preview: {
    width: '25%',
    height: '60%',
    backgroundColor: 'white',
  },
  itemWrapper: {
    border: 'solid 1px'
  }

})



