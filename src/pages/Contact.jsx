import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.message) newErrors.message = 'Message is required';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            emailjs
                .send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
                .then(
                    (response) => {
                        console.log('SUCCESS!', response.status, response.text);
                        setSuccessMessage('Email sent successfully!');
                        setErrors({});
                    },
                    (err) => {
                        console.log('FAILED...', err);
                    }
                );
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <div className="hero-background"/>
            <div className="flex-grow flex flex-col justify-center items-center relative z-10">
                <div className="sm:mx-auto sm:w-full bg-blue-950 rounded-3xl p-10">
                    <h2 className="text-3xl text-white text-center mb-10 font-bold">Contacte</h2>
                    <p className="mt-6 text-xl text-center w-full text-white mb-6">
                        Contacta amb nosaltres per a qualsevol dubte o suggeriment. Estarem encantats
                        d'ajudar-te!
                    </p>
                    <form
                        onSubmit={handleSubmit}
                        className="max-w-lg mx-auto p-8 rounded-3xl shadow-lg bg-black/60 text-white"
                    >
                        <div className="mb-4">
                            <label
                                className="block text-white text-sm font-bold mb-2"
                                htmlFor="name"
                            >
                                Nom
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="shadow appearance-none border border-transparent bg-black/60 rounded-3xl w-full py-2 px-3 text-white placeholder:text-white/70 leading-tight focus:outline-none focus:ring-2 focus:ring-white/50 focus:shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                                placeholder="ex. John Doe"
                                required
                            />
                            {errors.name && (
                                <p className="text-red-500 text-xs italic">{errors.name}</p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-white text-sm font-bold mb-2"
                                htmlFor="email"
                            >
                                Correu electrònic
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="shadow appearance-none border border-transparent bg-black/60 rounded-3xl w-full py-2 px-3 text-white placeholder:text-white/70 leading-tight focus:outline-none focus:ring-2 focus:ring-white/50 focus:shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                                placeholder="ex. jdoe@hivemind.com"
                                required
                            />
                            {errors.email && (
                                <p className="text-red-500 text-xs italic">{errors.email}</p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-white text-sm font-bold mb-2"
                                htmlFor="message"
                            >
                                Missatge
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="shadow appearance-none border border-transparent bg-black/60 rounded-3xl w-full py-2 px-3 text-white placeholder:text-white/70 leading-tight focus:outline-none focus:ring-2 focus:ring-white/50 focus:shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                                rows="5"
                                placeholder="Missatge"
                                required
                            />
                            {errors.message && (
                                <p className="text-red-500 text-xs italic">{errors.message}</p>
                            )}
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                className="bg-black/60 hover:bg-black/80 text-white font-bold py-2 px-4 rounded-3xl focus:outline-none focus:ring-2 focus:ring-white/50 w-full"
                            >
                                Enviar
                            </button>
                        </div>
                        {successMessage && (
                            <p className="text-green-500 text-xs italic mt-4">{successMessage}</p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;