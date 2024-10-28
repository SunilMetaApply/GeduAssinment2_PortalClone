import React from 'react';

interface WhatsAppButtonInterface {
  phoneNumber: number;
  message?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonInterface> = ({ phoneNumber, message }) => {
  // const formattedMessage = encodeURIComponent(message || "");
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a 
      href={whatsappLink} 
      target="_blank" 
      rel="noopener noreferrer" 
      style={{
        display: 'inline-block',
        padding: '10px 20px',
        backgroundColor: '#25D366',
        color: '#fff',
        borderRadius: '5px',
        textDecoration: 'none',
      }}
    >
      Chat with us on WhatsApp
    </a>
  );
};

export default WhatsAppButton;
