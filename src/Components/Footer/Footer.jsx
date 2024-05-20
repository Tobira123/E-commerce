import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/logo_big.png';
import instagram_icon from '../Assets/instagram_icon.png';
// import whatsapp_icon from '../Assets/whatsapp_icon.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>De todo un poquito</p>
      </div>
      <ul className="footer-links">
        {/* <li>Acerca de nosotros</li> */}
        <li>Contactos</li>
      </ul>
      <div className="footer-social-icon">
        
        <div className="footer-icons-container">
          <a href="https://www.instagram.com/de.todounpoquitoo/" target="_blank" rel="noopener noreferrer">
            <img src={instagram_icon} alt="Instagram" />
          </a>
        </div>

      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023</p>
        <p>Todos los derechos reservados.</p>
      </div>
    </div>
  );
}

export default Footer;
