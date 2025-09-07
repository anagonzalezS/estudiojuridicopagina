import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./WhatsappIcon.css"; // Importamos los estilos

const WhatsappIcon = () => {
  const phoneNumber = "+5491162087349"; // Número con código de país
  const message = encodeURIComponent("Hola, ¡quiero que se contacten conmigo! ");
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const whatsappLink = isMobile
    ? `https://wa.me/${phoneNumber}?text=${message}`
    : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

  return (
    <a
      href={whatsappLink}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      title="Saenz & Asociados"
    >
      <FaWhatsapp className="whatsapp-icon" />
    </a>
  );
};

export default WhatsappIcon;
