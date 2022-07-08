import React from 'react'
import { compNames } from '../components/componentsArray'

export default function Sidebar() {


  return (
    <div style={Styles.Sidebar}>
      {compNames.map((item) => {
        return (
          <div key={Math.random()} >
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
  Item: {
    cursor: 'pointer'
  }
})
