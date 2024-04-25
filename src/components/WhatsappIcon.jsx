import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsappIcon = () => {
    const phoneNumber = "5491137780506"; // Reemplaza con tu número de teléfono, incluyendo el código de país
    const message = encodeURIComponent("Hola, ¡quiero que se contacten conmigo! ");
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    let whatsappLink;

    if (isMobile) {
        whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;
    } else {
        whatsappLink = `https://web.whatsapp.com/send?phone=${phoneNumber}`;
    }

    return (
        <a href={whatsappLink} className="whatsapp-float" title="Saenz & Asociados">
            <FaWhatsapp size={50} color="#fff" />
        </a>
    );
}

export default WhatsappIcon;
