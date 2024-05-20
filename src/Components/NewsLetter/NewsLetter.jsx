import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>OFERTAS</h1>
      <p>Deja tú WhatsApp para recibir ofertas</p>
      <div>
        <input type="number" placeholder='Tu número' />
        <button>Suscribirse</button>
      </div>
    </div>
  )
}

export default NewsLetter
