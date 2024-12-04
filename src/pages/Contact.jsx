import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import DOMPurify from 'dompurify';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        if (errors[name]) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: '',
            }));
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'El nom és obligatori';
        if (!formData.email.trim()) {
            newErrors.email = 'El correu electrònic és obligatori';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'El correu electrònic no és vàlid';
        }
        if (!formData.message.trim()) newErrors.message = 'El missatge és obligatori';
        return newErrors;
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        const sanitizedData = {
            name: DOMPurify.sanitize(formData.name),
            email: DOMPurify.sanitize(formData.email),
            message: DOMPurify.sanitize(formData.message),
        };

        setIsLoading(true);

        emailjs.send('service_jqct0fo', 'template_cqnp0hi', sanitizedData, 'Lex0DDJSKCMoCfwwE')
            .then((response) => {
                setSuccessMessage('El teu missatge s\'ha enviat correctament!');
                setIsLoading(false);
                setFormData({ name: '', email: '', message: '' });
                setErrors({});
            }, () => {
                setErrors({ submit: 'Error en enviar el missatge. Torna-ho a provar.' });
                setIsLoading(false);
            });
    };

    return (
        <div className="relative flex flex-col min-h-screen text-white">
            <div className="hero-background" />
            <div className="flex-grow flex flex-col justify-center items-center relative px-4 py-12">
                <div className="w-full max-w-2xl bg-gray-900 rounded-3xl p-8 md:p-12 shadow-2xl">
                    <h2 className="text-4xl text-white text-center mb-8 font-bold">Contacte</h2>
                    <p className="text-xl text-center w-full text-white mb-8">
                        Contacta amb nosaltres per a qualsevol dubte o suggeriment. Estarem encantats d'ajudar-te!
                    </p>
                    {successMessage && <p className="text-green-500 text-center mb-4">{successMessage}</p>}
                    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                        <div>
                            <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
                                Nom
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="focus:border-white focus:border-opacity-50 text-white bg-opacity-60 bg-black shadow appearance-none border-4 rounded-3xl w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="El teu nom"
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                        </div>
                        <div>
                            <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="focus:border-white focus:border-opacity-50 text-white bg-opacity-60 bg-black shadow appearance-none border-4 rounded-3xl w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="exemple@correu.com"
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </div>
                        <div>
                            <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
                                Missatge
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="focus:border-white focus:border-opacity-50 text-white bg-opacity-60 bg-black shadow appearance-none border-4 rounded-3xl w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Escriu el teu missatge..."
                            />
                            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline w-full"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Enviant...' : 'Enviar'}
                        </button>
                        {errors.submit && <p className="text-red-500 text-center mt-4">{errors.submit}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
