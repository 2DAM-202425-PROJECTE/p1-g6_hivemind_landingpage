import React, { useState } from 'react';

const faqsData = [
    {
        question: "Què és Hivemind?",
        answer: "Hivemind és una plataforma que et permet gestionar i col·laborar amb el teu equip de manera eficient."
    },
    {
        question: "Com em registro?",
        answer: "Pots registrar-te fent clic al botó 'Registra't gratuïtament' a la pàgina d'inici."
    },
    {
        question: "Hi ha una prova gratuïta disponible?",
        answer: "Sí, oferim una prova gratuïta de 14 dies per a tots els usuaris nous."
    },
    {
        question: "Com puc contactar amb el suport?",
        answer: "Pots contactar amb el suport enviant un correu electrònic a support@hivemind.com."
    }
];

const Faqs = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="relative flex flex-col min-h-screen text-white">
            <div className="hero-background" />
            <div className="flex-grow flex flex-col justify-center items-center relative px-4 py-12">
                <div className="w-full max-w-4xl bg-gray-900 rounded-3xl p-8 md:p-12 shadow-2xl">
                    <h2 className="text-4xl font-extrabold text-white mb-6">Preguntes freqüents</h2>
                    <div className="space-y-4">
                        {faqsData.map((faq, index) => (
                            <div key={index} className="bg-white/20 p-6 rounded-2xl shadow-lg mb-4">
                                <button
                                    className="w-full text-left text-xl font-semibold text-white flex justify-between items-center"
                                    onClick={() => toggleFaq(index)}
                                >
                                    {faq.question}
                                    <span className="text-2xl right">
                                        {activeIndex === index ? '➖' : '➕'}
                                    </span>
                                </button>
                                {activeIndex === index && (
                                    <p className="mt-4 text-lg text-white">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faqs;