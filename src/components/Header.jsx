import React from 'react';
import { FaWhatsapp, FaPhone, FaInstagram } from 'react-icons/fa';

function Header() {
  return (
    <header style={{
      background: '#444444', // Fondo gris oscuro
      color: '#FFFFFF', // Texto en blanco para mejor contraste
      fontFamily: 'Open Sans, sans-serif',
      fontWeight: 300,
      marginTop: '20px' // Ajusta el espacio superior según tus necesidades
    }}>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-4 col-12">
            <p><FaWhatsapp className="whatsapp-icon" /><span className="header-text" style={{ paddingLeft: '10px' }}> Línea Whatsapp</span><a href="tel:11-3147-1363" className="header-text" style={{ color: '#28a7e9' }}>11-3147-1363</a></p>
          </div>
          <div className="col-md-3 col-sm-4 col-12">
            <p><FaPhone className="phone-icon" /><span className="header-text" style={{ paddingLeft: '10px' }}> Teléfono</span><a href="tel:(011) 3778-0506" className="header-text" style={{ color: '#28a7e9' }}>(011) 5357-3961</a></p>
          </div>
          <div className="col-md-6 col-sm-4 col-12 text-right">
            <ul className="list-inline">
              <li className="list-inline-item">Síganos:</li>
              <li className="list-inline-item"><a href="https://www.instagram.com/estudio.saenz/"><FaInstagram style={{ color: '#28a7e9' }} /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
