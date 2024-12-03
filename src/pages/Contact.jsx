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
        // Clear error when user starts typing
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

        // Validate inputs
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        // Sanitize inputs
        const sanitizedData = {
            name: DOMPurify.sanitize(formData.name),
            email: DOMPurify.sanitize(formData.email),
            message: DOMPurify.sanitize(formData.message),
        };

        setIsLoading(true);

        // Send email using EmailJS
        emailjs.send('service_jqct0fo', 'template_cqnp0hi', sanitizedData, 'Lex0DDJSKCMoCfwwE')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setSuccessMessage('Your message has been sent successfully!');
                setIsLoading(false);
                // Reset form data
                setFormData({ name: '', email: '', message: '' });
                setErrors({});
            }, (error) => {
                console.log('FAILED...', error);
                setErrors({ submit: 'Failed to send message. Please try again later.' });
                setIsLoading(false);
            });
    };

    const handleReset = () => {
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
        setSuccessMessage('');
    };

    return (
        <div className="relative flex flex-col min-h-screen text-white">
            <div className="hero-background" />
            <div className="flex-grow flex flex-col justify-center items-center relative px-4 py-12">
                <div className="w-full max-w-2xl bg-gray-900 rounded-3xl p-8 md:p-12 shadow-2xl">
                    <h2 className="text-4xl text-white text-center mb-8 font-bold">Contacte</h2>
                    <p className="text-xl text-center w-full text-white mb-8">
                        Contacta amb nosaltres per a qualsevol dubte o suggeriment. Estarem encantats
                        d'ajudar-te!
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
                                className="w-full px-3 py-2 text-black"
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
                                className="w-full px-3 py-2 text-black"
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
                                className="w-full px-3 py-2 text-black"
                            />
                            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                        </div>
                        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded" disabled={isLoading}>
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