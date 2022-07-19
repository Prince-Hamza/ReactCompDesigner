import React from 'react'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import Layout from '../components/Layout'
import { componentsJson } from '../components/componentsArray'

export default function Sidebar({ components, setComponents, setCompLoad }) {

  const componentFullList = [Layout, Button, TextInput]
  var compsJson = componentsJson.map((item, index) => {
    item.Core = componentFullList[index]
    return item
  })


  const addItem = (item, index) => {
    item.key = components.length + 1
    components.push(compsJson[index])
    setCompLoad(true)
    setComponents([...components])
  }

  return (
    <div style={Styles.Sidebar}>
      <br />
      {compsJson.map((item, index) => {
        return (
          <div key={Math.random()} style={Styles.itemWrap} onClick={() => { addItem(item, index) }}>
            <p style={Styles.Item} > {item.name} </p>
          </div>
        )
      })}
    </div>
  )
}

const Styles = ({
  Sidebar: {
    marginTop: '0.3%',
    width: '15%',
    height: '100%',
    backgroundColor: 'white'
  },
  itemWrap: {
    width: '100%',
    height: '45px',
    boxShadow: '0px 0px 8px 1px whitesmoke',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    marginBottom: '5px'
  },
  Item: {
    font: 'italic 15px times new roman'
  }
})
