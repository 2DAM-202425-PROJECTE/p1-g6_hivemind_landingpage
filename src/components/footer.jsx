import React from 'react';
import { Link } from 'react-router-dom';  // Si estàs utilitzant React Router per la navegació

const Footer = () => {
    return (
        <footer className="bg-black w-full mx-auto backdrop-blur-2xl text-white text-center py-4">
            <p>&copy; 2024 Hivemind Nexus. Tots els drets reservats.</p>
            <div className="mt-4">
                <Link to="/contact" className="text-white hover:text-gray-300 mx-3">
                    Contacte
                </Link>
                <span>|</span>
                <Link to="/privacy-policy" className="text-white hover:text-gray-300 mx-3">
                    Política de privacitat i cookies
                </Link>
                <span>|</span>
                <Link to="/terms-of-service" className="text-white hover:text-gray-300 mx-3">
                    Termes i condicions
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
