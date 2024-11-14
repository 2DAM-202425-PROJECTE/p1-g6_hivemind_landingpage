import React, { useState } from 'react';

function Newsletter() {
    return (
        <section className="py-20 bg-gradient-to-br bg-transparent backdrop-blur-3xl rounded-3xl mt-10">
            <div className="from-teal-700 via-teal-600 to-teal-700 relative font-[sans-serif]">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-white text-4xl font-extrabold">Subscriu-te al Nostre Butlletí</h2>
                    <div className="my-6">
                        <p className="text-base text-gray-200 pb-10">Subscriu-te al nostre butlletí i estigues al dia de les novetats
                            últimes notícies, actualitzacions i ofertes exclusives. Obteniu informació valuosa. Uneix-te a la nostra comunitat avui!</p>
                    </div>

                    <div
                        className="max-w-2xl left-0 right-0 mx-auto w-full p-5 flex items-center bg-white/20 rounded shadow-lg absolute -bottom-20  ">
                        <input type="email" placeholder="Introdueix el teu correu electrònic"
                               className="w-full bg-red py-3.5 px-4 text-gray-900 placeholder-gray-700 bg-white/20 text-base focus:outline-none"/>
                        <button
                            className="bg-[#a91079] hover:bg-[#a91079e2] text-white text-base font-semibold tracking-wide py-3.5 px-8 focus:outline-none">
                            Subscriu&#8209;te
                        </button>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Newsletter;
