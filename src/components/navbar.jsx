import { Disclosure, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';

export default function NavigationBar() {
    const navigation = [
        { name: 'Inici', href: '/', current: true },
        { name: 'Productes', href: '/products', current: false },
        { name: 'Equip', href: '/team', current: false },
        { name: 'Contacte', href: '/contact', current: false },
    ];

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ');
    }

    return (
        <Disclosure as="nav" className="bg-black/60 rounded-3xl mt-2 w-5/6 mx-auto backdrop-blur-2xl sticky top-2 z-20 mb-5">
            <div className="mx-auto max-w-full px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button
                                        className="inline-flex items-center justify-center rounded-3xl p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                    >
                                        <span className="sr-only">Obrir el menú principal</span>
                                        {open ? (
                                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="absolute left-0 z-10 mt-72 w-48 rounded-3xl bg-gray-800 shadow-lg">
                                        <div className="space-y-1 px-2 pb-3 pt-2">
                                            {navigation.map((item) => (
                                                <Disclosure.Button
                                                    key={item.name}
                                                    as="a"
                                                    href={item.href}
                                                    className={classNames(
                                                        item.current
                                                            ? 'bg-gray-900 text-white'
                                                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                        'block rounded-md px-3 py-2 text-base font-medium'
                                                    )}
                                                    aria-current={item.current ? 'page' : undefined}
                                                >
                                                    {item.name}
                                                </Disclosure.Button>
                                            ))}
                                        </div>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    </div>
                    <div className="flex items-center ml-10">
                        <img
                            alt="La teva empresa"
                            src="public/hivemind_logo_nobg.png"
                            className="h-8 w-auto"
                        />
                    </div>
                    <div className="flex-1 flex justify-center">
                        <div className="hidden sm:block">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        aria-current={item.current ? 'page' : undefined}
                                        className={classNames(
                                            item.current ? 'text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'rounded-md px-3 py-2 text-sm font-medium',
                                        )}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button
                            type="button"
                            className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                            <span className="sr-only">Veure notificacions</span>
                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
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
                            <MenuItems className="absolute right-0 mt-2 w-48 origin-top-right rounded-3xl bg-black py-1 shadow-lg ring-1 ring-white ring-opacity-5">
                                <MenuItem>
                                    <a href="/profile" className="block px-4 py-2 text-sm text-white">El teu perfil</a>
                                </MenuItem>
                                <MenuItem><a href="#" className="block px-4 py-2 text-sm text-white">Configuració</a></MenuItem>
                                <MenuItem><a href="/login" className="block px-4 py-2 text-sm text-white">Inicia sessió</a></MenuItem>
                            </MenuItems>
                        </Menu>
                    </div>
                </div>
            </div>
            <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                        <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'block rounded-md px-3 py-2 text-base font-medium',
                            )}
                        >
                            {item.name}
                        </Disclosure.Button>
                    ))}
                </div>
            </Disclosure.Panel>
        </Disclosure>
    );
}
