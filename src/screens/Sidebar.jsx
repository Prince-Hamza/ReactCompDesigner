import React from 'react'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import { compNames } from '../components/componentsArray'

export default function Sidebar({ components, setComponents }) {
  const componentFullList = [Button, TextInput]

  const addItem = (index) => {
    components.push(componentFullList[index])
    setComponents([...components])
  }

  return (
    <div style={Styles.Sidebar}>
      <br />
      {compNames.map((item, index) => {
        return (
          <div key={Math.random()} style={Styles.itemWrap} onClick={() => { addItem(index) }}>
            <p style={Styles.Item} > {item} </p>
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
