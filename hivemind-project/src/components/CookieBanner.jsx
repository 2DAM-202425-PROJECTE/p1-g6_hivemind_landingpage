import React, { useState, useEffect } from 'react';

const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [cookiePreferences, setCookiePreferences] = useState({
        necessary: true,
        analytics: false,
        advertising: false,
    });

    // Comprovar si l'usuari ja ha acceptat les cookies
    useEffect(() => {
        const cookiesAccepted = localStorage.getItem('cookies_accepted');
        if (cookiesAccepted !== 'true') {
            setIsVisible(true); // Mostrar el banner si no s'ha acceptat
        } else {
            const savedPreferences = JSON.parse(localStorage.getItem('cookie_preferences'));
            if (savedPreferences) {
                setCookiePreferences(savedPreferences); // Carregar preferències guardades
            }
        }
    }, []);

    // Acceptar cookies i guardar-les a localStorage
    const acceptCookies = () => {
        localStorage.setItem('cookies_accepted', 'true'); // Guardar l'acceptació a localStorage
        localStorage.setItem('cookie_preferences', JSON.stringify(cookiePreferences)); // Guardar preferències
        setIsVisible(false); // Ocultar el banner
    };

    // Rebutjar cookies i guardar-les a localStorage
    const rejectCookies = () => {
        localStorage.setItem('cookies_accepted', 'false'); // Guardar el rebuig a localStorage
        localStorage.removeItem('cookie_preferences'); // Eliminar les preferències guardades
        setIsVisible(false); // Ocultar el banner
    };

    // Mostrar/ocultar els ajustos
    const toggleSettings = () => {
        setShowSettings(!showSettings);
    };

    // Gestionar els canvis en les preferències de cookies
    const handlePreferencesChange = (e) => {
        setCookiePreferences({
            ...cookiePreferences,
            [e.target.name]: e.target.checked,
        });
    };

    if (!isVisible) return null; // Si no està visible, no renderitzem el banner

    return (
        <div
            className={`fixed bottom-4 right-4 bg-gradient-to-br bg-transparent backdrop-blur-3xl shadow-lg rounded-xl p-4 z-50 w-min h-min flex flex-col justify-between`}
        >
            <div className="flex justify-between items-start flex-col h-full">
                <div className="text-lg text-white">
                    {!showSettings ? (
                        <>
                            Feu clic a "Acceptar" per permetre'ns utilitzar cookies per personalitzar aquest lloc, entregar anuncis i mesurar la seva efectivitat en altres aplicacions i llocs web, incloent les xarxes socials. Personalitzeu les vostres preferències a la configuració de cookies o feu clic a "Rebutjar" si no voleu que utilitzem cookies per aquest propòsit. Més informació a la nostra{' '}
                            <a href="/privacy-policy" className="text-blue-500 underline hover:text-blue-700">política de privacitat.</a>.
                        </>
                    ) : (
                        <div className="text-sm text-gray-700">
                            <p>Configura les cookies que desitges acceptar:</p>
                            {/* Aquí van les opcions per triar quines cookies acceptar */}
                            <div className="mt-2 space-y-2">
                                <label className="block">
                                    <input
                                        type="checkbox"
                                        name="necessary"
                                        checked={cookiePreferences.necessary}
                                        onChange={handlePreferencesChange}
                                        className="mr-2"
                                    />
                                    Cookies necessàries
                                </label>
                                <label className="block">
                                    <input
                                        type="checkbox"
                                        name="analytics"
                                        checked={cookiePreferences.analytics}
                                        onChange={handlePreferencesChange}
                                        className="mr-2"
                                    />
                                    Cookies d'anàlisi
                                </label>
                                <label className="block">
                                    <input
                                        type="checkbox"
                                        name="advertising"
                                        checked={cookiePreferences.advertising}
                                        onChange={handlePreferencesChange}
                                        className="mr-2"
                                    />
                                    Cookies publicitàries
                                </label>
                            </div>
                        </div>
                    )}
                </div>

                {/* Botons */}
                <div className="flex space-x-2 mt-auto">
                    {!showSettings ? (
                        <>
                            <button
                                className="bg-blue-500 text-white text-sm font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
                                onClick={acceptCookies}
                            >
                                Acceptar
                            </button>
                            <button
                                className="bg-gray-200 text-gray-700 text-sm font-semibold py-2 px-4 rounded-lg hover:bg-gray-300 transition duration-200"
                                onClick={rejectCookies}
                            >
                                Rebutjar
                            </button>
                            <button
                                className="bg-yellow-300 text-gray-700 text-sm font-semibold py-2 px-4 rounded-lg hover:bg-yellow-400 transition duration-200"
                                onClick={toggleSettings}
                            >
                                Configuració
                            </button>
                        </>
                    ) : (
                        <button
                            className="bg-green-500 text-white text-sm font-semibold py-2 px-4 rounded-lg hover:bg-green-600 transition duration-200"
                            onClick={acceptCookies}
                        >
                            Desar Configuració
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CookieBanner;
