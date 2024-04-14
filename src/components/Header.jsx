import React from 'react';
import { FaWhatsapp, FaPhone, FaFacebook, FaInstagram } from 'react-icons/fa';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-4 col-xs-12">
            <p><FaWhatsapp /> Línea Whatsapp <a href="#">11-3147-1363</a></p>
          </div>
          <div className="col-md-3 col-sm-4 col-xs-12">
            <p><FaPhone /> Teléfono <a href="#">(011) 5357-3961</a></p>
          </div>
          <div className="col-md-5 col-sm-4 col-xs-12">
            <ul className="social-icon">
              <li><span>Síganos</span></li>
              <li><a href="https://www.facebook.com/Litigar-Estudio-Jurídico%C3%ADdico-208353225674/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a></li>
              <li><a href="https://www.instagram.com/estudiolitigar/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
