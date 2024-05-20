import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Inciar sesión</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continuar</button>
        <p className="loginsignup-login">¿Ya tienes una cuenta? <span>Inicia sesión aquí</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>Para continuar, estoy de acuerdo con los términos y condiciones.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
