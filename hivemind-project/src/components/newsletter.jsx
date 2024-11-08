import React, { useState } from 'react';

function Newsletter() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Subscriure:', email);
        setEmail('');
    };

    return (
        <section className="bg-gray-800 text-white p-8 rounded-lg text-center max-w-md mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Subscriu-te al nostre Newsletter</h2>
            <p className="text-lg mb-6">Mantén-te informat amb les últimes notícies!</p>
            <form className="flex flex-col sm:flex-row items-center gap-4" onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Introdueix el teu correu electrònic"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="px-4 py-2 rounded-md w-full sm:w-auto flex-1 text-gray-800"
                />
                <button
                    type="submit"
                    className="px-4 py-2 bg-yellow-500 text-gray-800 font-semibold rounded-md hover:bg-yellow-600 transition"
                >
                    Subscriu-me
                </button>
            </form>
        </section>
    );
}

export default Newsletter;
