export default function HeroSection() {
    return (
        <section className="relative flex flex-col items-center justify-center text-white pt-24">
            <div className="hero-background" />
            <div className="w-full min-h-screen relative z-10">
                <div className="relative isolate px-6 pt-14 lg:px-8 w-full">
                    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                        <div className="text-center">
                            <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
                                Connecta’t, juga i brilla
                            </h1>
                            <p className="mt-8 text-lg font-medium text-white sm:text-xl">
                                La xarxa social feta a mida per a jugadors com tu. Connecta amb altres gamers, comparteix les teves experiències i viu les teves aventures al món dels videojocs com mai abans.
                            </p>

                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <a
                                    href="/register"
                                    className="rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                    aria-label="Registra't i uneix-te ara"
                                >
                                    Uneix-te ara
                                </a>
                                <a
                                    href="#features"
                                    className="text-sm font-semibold leading-6 text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                    aria-label="Descobreix més sobre les característiques"
                                >
                                    Descobreix més<span aria-hidden="true"> →</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
