import React from 'react';

function Footer() {
  return (
    <footer className="footer" style={{ backgroundColor: '#444444', paddingTop: '20px', paddingBottom: '20px' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <p className="text-white" style={{ margin: '0' }}> {/* Agregar la clase text-white para texto blanco */}
              Copyright © 2024 SAENZ & ASOCIADOS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
