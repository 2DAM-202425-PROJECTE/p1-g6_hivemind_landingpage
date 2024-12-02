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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setIsLoading(true);
            try {
                await emailjs.send('service_eeni5sd', 'template_2vuslui', formData, 'Tjq1cp43LrXoEdW8G');
                setSuccessMessage('Correu enviat correctament!');
                setErrors({});
                setFormData({ name: '', email: '', message: '' });
            } catch (err) {
                console.error('FAILED...', err);
                setErrors({ submit: 'Hi ha hagut un error en enviar el missatge. Si us plau, torna-ho a provar més tard.' });
            } finally {
                setIsLoading(false);
            }
        }
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
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6"
                        noValidate
                    >
                        <div>
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
                                className={`shadow appearance-none border ${errors.name ? 'border-red-500' : 'border-transparent'} bg-gray-800 rounded-3xl w-full py-3 px-4 text-white placeholder:text-white/70 leading-tight focus:outline-none focus:ring-2 focus:ring-white/50 focus:shadow-[0_0_10px_rgba(255,255,255,0.2)] transition duration-300`}
                                placeholder="ex. John Doe"
                                required
                                aria-invalid={errors.name ? 'true' : 'false'}
                                aria-describedby={errors.name ? 'name-error' : undefined}
                            />
                            {errors.name && (
                                <p className="text-red-500 text-xs italic mt-1" id="name-error">{errors.name}</p>
                            )}
                        </div>
                        <div>
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
                                className={`shadow appearance-none border ${errors.email ? 'border-red-500' : 'border-transparent'} bg-gray-800 rounded-3xl w-full py-3 px-4 text-white placeholder:text-white/70 leading-tight focus:outline-none focus:ring-2 focus:ring-white/50 focus:shadow-[0_0_10px_rgba(255,255,255,0.2)] transition duration-300`}
                                placeholder="ex. jdoe@hivemind.com"
                                required
                                aria-invalid={errors.email ? 'true' : 'false'}
                                aria-describedby={errors.email ? 'email-error' : undefined}
                            />
                            {errors.email && (
                                <p className="text-red-500 text-xs italic mt-1" id="email-error">{errors.email}</p>
                            )}
                        </div>
                        <div>
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
                                className={`shadow appearance-none border ${errors.message ? 'border-red-500' : 'border-transparent'} bg-gray-800 rounded-3xl w-full py-3 px-4 text-white placeholder:text-white/70 leading-tight focus:outline-none focus:ring-2 focus:ring-white/50 focus:shadow-[0_0_10px_rgba(255,255,255,0.2)] transition duration-300`}
                                rows="5"
                                placeholder="El teu missatge aquí..."
                                required
                                aria-invalid={errors.message ? 'true' : 'false'}
                                aria-describedby={errors.message ? 'message-error' : undefined}
                            />
                            {errors.message && (
                                <p className="text-red-500 text-xs italic mt-1" id="message-error">{errors.message}</p>
                            )}
                        </div>
                        <div className="flex items-center justify-between space-x-4">
                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-3xl focus:outline-none focus:ring-2 focus:ring-white/50 transition duration-300 flex-grow"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Enviant...' : 'Enviar'}
                            </button>
                            <button
                                type="button"
                                onClick={handleReset}
                                className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-3xl focus:outline-none focus:ring-2 focus:ring-red-300 transition duration-300"
                            >
                                Reiniciar
                            </button>
                        </div>
                        {errors.submit && (
                            <p className="text-red-500 text-sm italic mt-4">{errors.submit}</p>
                        )}
                        {successMessage && (
                            <p className="text-green-400 text-sm font-semibold mt-4">{successMessage}</p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;