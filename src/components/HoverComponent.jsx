import React, { useState } from 'react'

function HoverComponent({ text }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered('Home')}
      onMouseLeave={() => setHovered('')}
      style={{
        backgroundColor: hovered ? 'lightblue' : '',
        color: hovered ? 'white' : 'black',
        padding: '10px',
        margin: '10px',
      }}
    >
      {text}
    </div>
  )
}

export default HoverComponent