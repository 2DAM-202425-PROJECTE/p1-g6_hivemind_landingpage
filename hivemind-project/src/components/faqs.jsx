// hivemind-project/src/components/faqs.jsx
import React, { useState } from 'react';

const faqsData = [
    {
        question: "What is Hivemind?",
        answer: "Hivemind is a platform that allows you to manage and collaborate with your team efficiently."
    },
    {
        question: "How do I register?",
        answer: "You can register by clicking on the 'Registra't gratuïtament' button on the homepage."
    },
    {
        question: "Is there a free trial available?",
        answer: "Yes, we offer a 14-day free trial for all new users."
    },
    {
        question: "How can I contact support?",
        answer: "You can contact support by emailing support@hivemind.com."
    }
];

const Faqs = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-gradient-to-br bg-transparent backdrop-blur-3xl rounded-3xl mt-10">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-extrabold text-white mb-6">Frequently Asked Questions</h2>
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