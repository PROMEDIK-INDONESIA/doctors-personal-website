import React, { useState } from 'react'
import HoverComponent from '../../components/HoverComponent'
import './index.css'

function Header() {

  const [selected, setSelected] = useState('')
  const [hovered, setHovered] = useState(false)
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        border: '1px solid lightblue',
        borderRadius: '25px',
        margin: '10px',
        padding: '10px 30px 10px 30px',
      }}
    >
      <div
        style={{
          // backgroundColor: 'blue',
          alignItems: 'center',
          display: 'flex',
        }}
      >
        <img
          src='/src/assets/react.svg'
          style={{ width: 40, height: 40 }}
        />
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          gap: '10px',
          alignItems: 'center',
        }}
      >
        <HoverComponent text='Home' />
        <HoverComponent text='Overview' />
        <HoverComponent text='Imaging' />
        <HoverComponent text='Labs' />
        <HoverComponent text='Heart' />
        <HoverComponent text='Brain' />
        <HoverComponent text='Lungs' />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          // backgroundColor: 'blue',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <div>Notif</div>
        <div>Setting</div>
        <div>
          <img
            src='/src/assets/avatar.svg'
            style={{ width: 30, height: 30 }}
          />
        </div>
      </div>
    </div>
  )
}

export default Header