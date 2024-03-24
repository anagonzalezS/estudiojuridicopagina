import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsappIcon = () => {
    const phoneNumber = "5491137780506"; // Reemplaza con tu número de teléfono, incluyendo el código de país
    const message = encodeURIComponent("Hola somos Saenz & Asociacion, ¿cómo puedo ayudarte? ");
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <a href={whatsappLink} className="whatsapp-float" title="Saenz & Asociados">
            <FaWhatsapp size={50} color="#fff" />
        </a>
    );
}

export default WhatsappIcon;
