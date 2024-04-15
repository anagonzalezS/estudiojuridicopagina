import React from 'react';
import { FaWhatsapp, FaPhone, FaInstagram, FaEnvelope } from 'react-icons/fa';

function Header() {
  return (
    <header style={{
      color: '#FFFFFF', // Texto en blanco para mejor contraste
      fontFamily: 'Open Sans, sans-serif',
      fontWeight: 300,
      marginTop: '20px' // Ajusta el espacio superior según tus necesidades
    }}>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-4 col-12">
            <p><FaWhatsapp className="whatsapp-icon" /><span className="header-text" style={{ paddingLeft: '10px' }}> Línea Whatsapp</span><a href="tel:11-5320-3554" className="header-text" style={{ color: '#28a7e9' }}>11-3147-1363</a></p>
          </div>
          <div className="col-md-3 col-sm-4 col-12">
            <p><FaPhone className="phone-icon" /><span className="header-text" style={{ paddingLeft: '10px' }}> Urgencias penales 24 hs</span><a href="tel: 11-3778-0506" className="header-text" style={{ color: '#28a7e9' }}>11-5357-3961</a></p>
          </div>
          <div className="col-md-3 col-sm-4 col-12">
            <p><FaEnvelope className="email-icon" /><span className="header-text" style={{ paddingLeft: '10px' }}> Email</span><a href="mailto:estudio@saenz-asociados.com.ar" className="header-text" style={{ color: '#28a7e9' }}>estudio@saenz-asociados.com.ar</a></p>
          </div>
          <div className="col-md-3 col-sm-12 col-12 text-right">
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
