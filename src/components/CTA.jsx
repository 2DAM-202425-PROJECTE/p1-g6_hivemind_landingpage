function CTA() {
    return (
        <section className="relative flex flex-col min-h-screen text-white">
            <div className="hero-background" />
            <div className="flex-grow flex flex-col justify-center items-center relative px-4 py-12">
                <div className="w-full max-w-4xl bg-gray-900 rounded-3xl p-8 md:p-12 shadow-2xl">
                    <h2 className="text-sm sm:text-base font-semibold text-[#a91079] tracking-wide uppercase text-center">
                        Descobreix Nexxus
                    </h2>
                    <p className="mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-100 sm:tracking-tight text-center">
                        La teva comunitat, <span className="text-[#a91079]">més connectada que mai</span>
                    </p>
                    <p className="max-w-3xl mt-5 mx-auto text-base sm:text-lg md:text-xl text-gray-300 text-center">
                        Uneix-te a la xarxa social que redefineix com interactuem, juguem i compartim moments.
                        Comença avui mateix i desbloqueja recompenses exclusives només per ser-hi.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                        <a
                            href="/register"
                            className="inline-block px-6 py-3 text-sm sm:text-base bg-[#a91079] text-black font-semibold rounded-3xl hover:bg-[#871065] transition">
                            Registra't ara
                        </a>
                        <a
                            href="/products"
                            className="inline-block px-6 py-3 text-sm sm:text-base bg-gray-800 text-white font-semibold rounded-3xl hover:bg-gray-700 transition">
                            Descobreix més
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CTA;