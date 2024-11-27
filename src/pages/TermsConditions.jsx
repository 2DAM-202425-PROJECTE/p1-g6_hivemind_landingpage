import React from 'react';

const TermsAndConditions = () => {
    return (
        <div className="relative flex flex-col min-h-screen text-white">
            <div className="hero-background" />
            <div className="flex-grow flex flex-col justify-center items-center relative px-4 py-12">
                <div className="w-full max-w-2xl bg-gray-900 rounded-3xl p-8 md:p-12 shadow-2xl">
                    <h1 className="text-4xl font-bold text-center mb-8">Termes i Condicions</h1>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2">Introducció</h2>
                        <p>
                            Aquests Termes i Condicions regulen l'ús de HiveMind Nexus. En accedir o utilitzar la nostra plataforma, acceptes complir amb aquests termes. Si no estàs d'acord amb alguna part d'aquests termes, has d'abstenir-te d'utilitzar els nostres serveis.
                        </p>
                        <p>
                            HiveMind Nexus es reserva el dret de modificar aquests termes en qualsevol moment. És la teva responsabilitat revisar regularment aquests termes per mantenir-te informat de qualsevol canvi.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2">Ús de la Plataforma</h2>
                        <p>
                            HiveMind Nexus et concedeix una llicència limitada, no exclusiva i no transferible per accedir i utilitzar la plataforma únicament per a fins legals, d'acord amb aquests Termes i Condicions. Acceptes no utilitzar la plataforma per a activitats il·legals, perjudicials o no autoritzades.
                        </p>
                        <p>
                            Ets responsable d'assegurar-te que l'ús de la plataforma compleixi amb totes les lleis, regulacions i directrius aplicables.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2">Conducta de l'Usuari</h2>
                        <p>
                            En utilitzar HiveMind Nexus, acceptes no publicar, carregar o transmetre cap contingut que sigui il·legal, ofensiu, difamatori, abusiu o que infringeixi els drets d'altres. Ens reservem el dret d'eliminar qualsevol contingut que violi aquestes directrius sense previ avís.
                        </p>
                        <p>
                            A més, acceptes no participar en cap activitat que pugui interferir o interrompre les operacions de la plataforma o l'experiència d'altres usuaris.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2">Limitació de Responsabilitat</h2>
                        <p>
                            HiveMind Nexus no és responsable de cap dany indirecte, incidental, especial o punitiu derivat del teu ús o incapacitat per utilitzar la plataforma. No garantim que la plataforma estigui lliure d'errors o interrupcions.
                        </p>
                        <p>
                            En cap cas, HiveMind Nexus serà responsable de cap pèrdua de dades, beneficis o altres pèrdues tangibles o intangibles derivades de l'ús de la plataforma.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2">Modificacions</h2>
                        <p>
                            HiveMind Nexus es reserva el dret de modificar o actualitzar aquests Termes i Condicions en qualsevol moment. Aquestes modificacions entraran en vigor immediatament després de la seva publicació a la plataforma. L'ús continuat de la plataforma després d'aquests canvis implica la teva acceptació dels termes actualitzats.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2">Terminació del Compte</h2>
                        <p>
                            HiveMind Nexus es reserva el dret de suspendre, desactivar o terminar el teu compte si es detecta qualsevol activitat que violi aquests Termes i Condicions. També podem prendre les accions legals necessàries si és requerit.
                        </p>
                        <p>
                            En cas de terminació, pots perdre l'accés al teu compte i a totes les dades associades, i HiveMind Nexus no és responsable de cap pèrdua derivada de la terminació del compte.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2">Llei Aplicable</h2>
                        <p>
                            Aquests Termes i Condicions es regiran i interpretaran d'acord amb les lleis de la jurisdicció en la qual opera HiveMind Nexus. Qualsevol disputa derivada o relacionada amb aquests termes estarà subjecta a la jurisdicció exclusiva dels tribunals competents d'aquesta jurisdicció.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2">Informació de Contacte</h2>
                        <p>
                            Si tens alguna pregunta o preocupació respecte a aquests Termes i Condicions, si us plau, contacta'ns a hivemind@nexxus.com. Estem compromesos a proporcionar suport ràpid i efectiu per abordar qualsevol consulta o problema que puguis tenir.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default TermsAndConditions;