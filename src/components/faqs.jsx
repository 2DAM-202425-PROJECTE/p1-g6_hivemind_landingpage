// hivemind-project/src/components/faqs.jsx
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
        <section className="bg-orange-300 p-4 rounded-3xl mt-5">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-extrabold text-white mb-6">Preguntes freqüents</h2>
                <div className="space-y-4">
                    {faqsData.map((faq, index) => (
                        <div key={index} className="bg-white/20 p-6 rounded-2xl shadow-lg mb-4">
                            <button
                                className="w-full text-left text-xl font-semibold text-gray-900 flex justify-between items-center"
                                onClick={() => toggleFaq(index)}
                            >
                                {faq.question}
                                <span className="text-2xl right">
                                    {activeIndex === index ? '➖' : '➕'}
                                </span>
                            </button>
                            {activeIndex === index && (
                                <p className="mt-4 text-lg text-black">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faqs;
