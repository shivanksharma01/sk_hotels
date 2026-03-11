import React from 'react'

import firstimg from '../assets/firstimg.png'

export default function Hero() {
  return (
    <div>
      <img 
        src={firstimg} 
        alt="Hero"
        style={{ width: '100%', height: 600, display: 'block' }}
      />
    </div>
  )
}
