import React, { useState } from 'react';

function Newsletter() {
    // Estado para almacenar el correo electrónico
    const [email, setEmail] = useState('');
    // Estado para manejar el mensaje de éxito o error
    const [message, setMessage] = useState('');

    // Maneja el cambio en el input de correo
    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    // Maneja el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validación básica del correo electrónico
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (email && emailPattern.test(email)) {
            // Aquí iría la lógica de envío, por ejemplo, una llamada a una API para registrar el correo
            setMessage('Gràcies per subscriure’t al nostre butlletí!');
            setEmail('');
        } else {
            setMessage('Si us plau, introdueix un correu electrònic vàlid.');
        }
    };

    return (
        <section className="py-20 backdrop-blur-3xl rounded-3xl mt-10">
            <div className="from-teal-700 via-teal-600 to-teal-700 relative font-[sans-serif]">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-extrabold">
                        Subscriu-te al Nostre Butlletí
                    </h2>
                    <div className="my-6">
                        <p className="text-sm sm:text-base md:text-lg text-gray-200 pb-10">
                            Subscriu-te al nostre butlletí i estigues al dia de les últimes novetats, notícies, actualitzacions i
                            ofertes exclusives. Uneix-te a la nostra comunitat avui!
                        </p>
                    </div>

                    <div
                        className="flex flex-col sm:flex-row items-center gap-4 max-w-2xl mx-auto w-full p-4 sm:p-5 bg-white/20 rounded-3xl shadow-lg">
                        <input
                            type="email"
                            value={email}
                            onChange={handleChange}
                            placeholder="Introdueix el teu correu electrònic"
                            className="w-full bg-white/20 py-3 px-4 text-gray-900 placeholder-gray-700 rounded-3xl text-sm sm:text-base focus:outline-none"
                        />
                        <button
                            className="w-full sm:w-auto bg-[#a91079] hover:bg-[#a91079e2] text-white text-sm sm:text-base font-semibold tracking-wide py-3 rounded-3xl px-6 focus:outline-none">
                            Subscriu&#8209;te
                        </button>
                    </div>

                    {/* Mostrar el mensaje de éxito o error */}
                    {message && (
                        <div className="mt-4 text-white font-semibold">
                            {message}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Newsletter;
