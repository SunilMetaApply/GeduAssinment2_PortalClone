import React from 'react';


const WhatsAppButton: React.FC = () => {
  
  const phoneNumber: number = 917428697331;
  const message: string = "I need assistance, please help me";
  const whatsappLink: string = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

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
