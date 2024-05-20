import React from 'react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const phoneNumber = '527811048823'; // Reemplaza con tu número de WhatsApp

  return (
    <a 
      href={`https://wa.me/${phoneNumber}`} 
      className="whatsapp-button" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png" alt="WhatsApp" />
    </a>
  );
};

export default WhatsAppButton;
