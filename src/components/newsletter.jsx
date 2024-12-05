import React, { useState } from 'react';

function Newsletter() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (email && emailPattern.test(email)) {
            setMessage('Gràcies per subscriure’t al nostre butlletí!');
            setEmail('');
        } else {
            setMessage('Si us plau, introdueix un correu electrònic vàlid.');
        }
    };

    return (
        <section className="relative flex flex-col min-h-screen text-white ">
            <div className="flex-grow flex flex-col justify-center items-center relative px-4 py-12">
                <div className="w-full max-w-4xl bg-gray-900 rounded-3xl p-8 md:p-12 shadow-2xl">
                    <h2 className="text-sm sm:text-base font-semibold text-[#EB24AC] tracking-wide uppercase text-center">
                        Subscriu-te al Nostre Butlletí
                    </h2>
                    <p className="mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-100 sm:tracking-tight text-center">
                        Estigues al dia de les últimes novetats
                    </p>
                    <p className="max-w-3xl mt-5 mx-auto text-base sm:text-lg md:text-xl text-gray-300 text-center">
                        Subscriu-te al nostre butlletí i estigues al dia de les últimes novetats, notícies,
                        actualitzacions i ofertes exclusives. Uneix-te a la nostra comunitat avui!
                    </p>
                    <form onSubmit={handleSubmit}
                          className="flex flex-col sm:flex-row items-center gap-4 max-w-2xl mx-auto w-full p-4 sm:p-5 rounded-3xl mt-8">
                        <input
                            type="email"
                            value={email}
                            onChange={handleChange}
                            placeholder="Introdueix el teu correu electrònic"
                            className="w-full bg-white/60 py-3 px-4 text-[#1a202c] placeholder-gray-700 rounded-3xl text-sm sm:text-base focus:outline-none"
                            />
                        <button
                            type="submit"
                            className="w-full sm:w-auto bg-[#1e3a8a] hover:bg-[#1c2c5b] text-white text-sm sm:text-base font-semibold tracking-wide py-3 rounded-3xl px-6 focus:outline-none">
                            Subscriu&#8209;te
                        </button>
                    </form>
                    {message && (
                        <div className="mt-4 text-white font-semibold text-center">
                            {message}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Newsletter;