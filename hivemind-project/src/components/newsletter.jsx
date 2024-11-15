import React from 'react';

function Newsletter() {
    return (
        <section className="py-20 bg-gradient-to-br bg-transparent backdrop-blur-3xl rounded-3xl mt-10">
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
                        className="flex flex-col sm:flex-row items-center gap-4 max-w-2xl mx-auto w-full p-4 sm:p-5 bg-white/20 rounded shadow-lg">
                        <input
                            type="email"
                            placeholder="Introdueix el teu correu electrònic"
                            className="w-full bg-white/20 py-3 px-4 text-gray-900 placeholder-gray-700 rounded-lg sm:rounded-tl-lg sm:rounded-bl-lg text-sm sm:text-base focus:outline-none"
                        />
                        <button
                            className="w-full sm:w-auto bg-[#a91079] hover:bg-[#a91079e2] text-white text-sm sm:text-base font-semibold tracking-wide py-3 rounded-lg sm:rounded-tr-lg sm:rounded-br-lg px-6 focus:outline-none">
                            Subscriu&#8209;te
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Newsletter;
