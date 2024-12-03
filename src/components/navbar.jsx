import {Disclosure, Menu, MenuButton, MenuItem, MenuItems, Transition} from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import {useState, useEffect, Fragment} from 'react';

export default function NavigationBar() {
    const [isScrolled, setIsScrolled] = useState(false);

    const navigation = [
        { name: 'Inici', href: '/', current: true },
        { name: 'Productes', href: '/products', current: false },
        { name: 'Equip', href: '/team', current: false },
        { name: 'Contacte', href: '/contact', current: false },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ');
    }

    return (
        <Disclosure
            as="nav"
            className={classNames(
                'sticky top-0 left-0 w-5/6 mx-auto transition-all duration-300 z-10', // Agregar z-index en el nav para evitar solapamientos
                isScrolled
                    ? 'bg-black/60 h-14 rounded-3xl backdrop-blur-2xl top-4' // Cuando se hace scroll, altura reducida y bordes redondeados
                    : 'bg-black/60 backdrop-blur-2xl w-full' // Cuando está arriba, altura completa sin bordes redondeados
            )}
        >
            <div className="mx-auto max-w-full px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between">
                    {/* Menu hamburguesa en pantallas pequeñas */}
                    <div className="flex sm:hidden">
                        <Menu as="div" className="relative">
                            <div>
                                <MenuButton
                                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                >
                                    <span className="sr-only">Obrir el menú principal</span>
                                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                </MenuButton>
                            </div>
                            <MenuItems className="absolute left-0 mt-2 w-48 origin-top-right rounded-3xl bg-black py-1 shadow-lg ring-1 ring-white ring-opacity-5">
                                {navigation.map((item) => (
                                    <MenuItem key={item.name}>
                                        <a
                                            href={item.href}
                                            className={classNames(
                                                item.current ? 'text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                'block px-4 py-2 text-sm font-medium'
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </a>
                                    </MenuItem>
                                ))}
                            </MenuItems>
                        </Menu>
                    </div>

                    {/* Logo en el lado izquierdo */}
                    <div className="flex items-center ml-10">
                        <img
                            alt="La teva empresa"
                            src="hivemind_logo_nobg.png"
                            className="h-8 w-auto"
                        />
                    </div>

                    {/* Enlaces de navegación centrados */}
                    <div className="flex-1 flex justify-center items-center h-14"> {/* Centrado en pantallas grandes */}
                        <div className="hidden sm:block">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        aria-current={item.current ? 'page' : undefined}
                                        className={classNames(
                                            item.current ? 'text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'rounded-md px-3 py-2 text-lg font-medium' // Aumentamos el tamaño de la fuente
                                        )}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Menu de usuario en el lado derecho */}
                    <div className="flex items-center space-x-4">
                        <Menu as="div" className="relative">
                            <div>
                                <MenuButton
                                    className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                >
                                    <span className="sr-only">Obrir el menú d'usuari</span>
                                    <img
                                        alt="Perfil d'usuari"
                                        src="https://i.pinimg.com/originals/ac/11/aa/ac11aa2add3b0193c8769e0a17d13535.jpg"
                                        className="h-8 w-8 rounded-full"
                                    />
                                </MenuButton>
                            </div>
                            <MenuItems
                                className="absolute right-0 mt-2 w-48 origin-top-right rounded-3xl bg-black py-1 shadow-lg ring-1 ring-white ring-opacity-5">
                                <MenuItem>
                                    <a href="/profile" className="block px-4 py-2 text-sm text-white">El teu perfil</a>
                                </MenuItem>
                                <MenuItem><a href="/login" className="block px-4 py-2 text-sm text-white">Inicia
                                    sessió</a></MenuItem>
                            </MenuItems>
                        </Menu>
                    </div>
                </div>
            </div>
        </Disclosure>
    );
}
