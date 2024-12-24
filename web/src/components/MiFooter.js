// Footer.js
import React from 'react';
import './MiFooter.css'; // Opcional: si necesitas estilos específicos.

function MiFooter() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="https://www.oracle.com/legal/privacy/" target="_blank" rel="noopener noreferrer">Política de Privacidad</a>
          <a href="https://www.oracle.com/legal/terms/" target="_blank" rel="noopener noreferrer">Términos de Uso</a>
          <a href="https://www.oracle.com/legal/copyright.html" target="_blank" rel="noopener noreferrer">Información de Copyright</a>
        </div>
        <div className="footer-social">
          <a href="https://www.facebook.com/Oracle" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com/Oracle" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://www.linkedin.com/company/oracle" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://www.instagram.com/oracle/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.youtube.com/user/Oracle" target="_blank" rel="noopener noreferrer">YouTube</a>
        </div>
        <div className="footer-copyright">
          <p>© 2024 Oracle. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default MiFooter;
