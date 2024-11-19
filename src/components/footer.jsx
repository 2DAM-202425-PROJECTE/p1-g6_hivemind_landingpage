// src/components/footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';  // Si estàs utilitzant React Router per la navegació

const Footer = () => {
    return (
        <footer className="bg-black/60 rounded-3xl mt-2 w-full mx-auto backdrop-blur-2xl text-white text-center py-4">
            <p>&copy; 2024 Hivemind Nexus. All rights reserved.</p>
            <div className="mt-4">
                <Link to="/contact" className="text-white hover:text-gray-300 mx-3">
                    Contact
                </Link>
                <span>|</span>
                <Link to="/privacy-policy" className="text-white hover:text-gray-300 mx-3">
                    Privacy & Cookie Policy
                </Link>
                <span>|</span>
                <Link to="/terms-of-service" className="text-white hover:text-gray-300 mx-3">
                    Terms & Conditions
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
