import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="relative flex flex-col min-h-screen text-white">
            <div className="hero-background" />
            <div className="flex-grow flex flex-col justify-center items-center relative px-4 py-12">
                <div className="w-full max-w-2xl bg-gray-900 rounded-3xl p-8 md:p-12 shadow-2xl">
                    <h1 className="text-4xl font-bold text-center mb-8">Política de Privacitat</h1>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2">Introducció</h2>
                        <p>
                            Aquesta política de privacitat explica com recollim, utilitzem, divulguem i protegim la teva informació personal quan visites el nostre lloc web o utilitzes els nostres serveis. T'encoratgem a llegir-la atentament per entendre les nostres pràctiques respecte a les teves dades personals.
                        </p>
                    </section>
                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2">Informació que Recollim</h2>
                        <p>
                            Recollim diversos tipus d'informació depenent de com interactues amb nosaltres, incloent:
                        </p>
                        <ul className="list-disc pl-5">
                            <li>Informació personal identificable, com el teu nom, adreça de correu electrònic, etc.</li>
                            <li>Dades d'ús, com l'adreça IP, tipus de navegador, etc.</li>
                            <li>Informació de cookies (tal com es descriu en la nostra política de cookies).</li>
                        </ul>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2">Com Utilitzem la Informació</h2>
                        <p>
                            Utilitzem la informació recollida per als següents propòsits:
                        </p>
                        <ul className="list-disc pl-5">
                            <li>Per proporcionar i personalitzar els nostres serveis.</li>
                            <li>Per millorar la funcionalitat del lloc web i l'experiència de l'usuari.</li>
                            <li>Per enviar comunicacions relacionades amb el teu compte o serveis sol·licitats.</li>
                            <li>Per complir amb les nostres obligacions legals.</li>
                        </ul>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2">Com Protegim la Teva Informació</h2>
                        <p>
                            Implementem mesures de seguretat adequades per protegir la teva informació personal contra l'accés no autoritzat, l'alteració o la divulgació. No obstant això, has de ser conscient que cap transmissió de dades per Internet o emmagatzematge electrònic és completament segur.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2">Compartir la Teva Informació</h2>
                        <p>
                            No compartim la teva informació personal amb tercers, excepte en els següents casos:
                        </p>
                        <ul className="list-disc pl-5">
                            <li>Amb proveïdors de serveis que ens ajuden a operar el nostre lloc web.</li>
                            <li>Per complir amb els requisits legals o respondre a sol·licituds governamentals.</li>
                        </ul>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2">Els Teus Drets</h2>
                        <p>
                            Tens el dret d'accedir, corregir o eliminar la informació personal que hem recollit sobre tu. També pots oposar-te a certs usos de la teva informació personal, com el màrqueting directe.
                        </p>
                        <p>
                            Si desitges exercir algun d'aquests drets, pots contactar-nos a través dels mitjans proporcionats al final d'aquesta política.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2">Canvis en Aquesta Política</h2>
                        <p>
                            Podem actualitzar aquesta política de privacitat de tant en tant. T'informarem de qualsevol canvi important publicant la nova política en aquesta pàgina. Et recomanem revisar aquesta política periòdicament.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2">Contacte</h2>
                        <p>
                            Si tens alguna pregunta o preocupació sobre aquesta política de privacitat, si us plau, contacta'ns a:
                        </p>
                        <address className="font-semibold">
                            hivemind@nexxus.com<br/>
                            Calle Falsa 123, Tortosa, Espanya
                        </address>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;