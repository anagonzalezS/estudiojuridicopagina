import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';
import WOW from 'wowjs';

function Contact() {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return (
    <section id="contact" className="wow fadeIn contact-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="wow bounceIn" data-wow-offset="50" data-wow-delay="0.3s">CONTÁCTENOS <span>AHORA</span></h2>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-12 wow fadeInLeft form-animation" data-wow-offset="50" data-wow-delay="0.9s">
            <form action="enviarcorreoCAS2" method="post">
              <div className="form-group">
                <label htmlFor="fullname">NOMBRE</label>
                <input name="fullname" type="text" className="form-control" id="fullname" />
              </div>
              <div className="form-group">
                <label htmlFor="email">EMAIL</label>
                <input name="email" type="email" className="form-control" id="email" />
              </div>
              <div className="form-group">
                <label htmlFor="message">MENSAJE</label>
                <textarea name="message" rows="4" className="form-control" id="message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-12 wow fadeInRight" data-wow-offset="50" data-wow-delay="0.6s">
            <address>
              <p className="address-title" style={{ color: '#28a7e9' }}>ESTAMOS A TU DISPOSICIÓN</p>
              <span>Contamos con una cobertura en CABA Y PROVINCIA.</span>
              <p><FontAwesomeIcon icon={faPhone} /> (011) 5357-3691 /  (011) 11-3366-3567 (Urgencias penales)</p>
              <p><FontAwesomeIcon icon={faEnvelope} /> consultas-info@saenz-asociados.com.ar</p>
              <p><FontAwesomeIcon icon={faMapMarker} />  - C.A.B.A. - </p>
            </address>
            <hr style={{ borderColor: '#28a7e9' }} />
            <ul className="list-unstyled social-icon">
              <li><h4>SÍGANOS</h4></li>
              <li>
                <a href="https://www.instagram.com/estudio.saenz/" className="wow fadeIn" data-wow-offset="50" data-wow-delay="1s">
                  <FontAwesomeIcon icon={faInstagram} className="instagram-icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
