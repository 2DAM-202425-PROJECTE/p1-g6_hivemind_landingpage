import {Dialog, DialogPanel, Disclosure, Menu, MenuButton, MenuItem, MenuItems} from '@headlessui/react'
import {Bars3Icon, BellIcon, XMarkIcon} from '@heroicons/react/24/outline'
import {useState} from "react";

const navigation = [
    { name: 'Home', href: '#', current: true },
    { name: 'Productes', href: '#', current: false },
    { name: 'Blog', href: '#', current: false },
    { name: 'Contacta.ns', href: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function NavigationBar(){
    return(
        <Disclosure as="nav" className="bg-black/60 rounded-3xl mt-2 w-5/6 mx-auto backdrop-blur-2xl sticky top-2 z-10">
            <div className="mx-auto max-w-full px-2 sm:px-6 lg:px-8 ">
                <div className="relative flex h-16 items-center justify-between">

                    {/* Mobile menu button and menu panel */}
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    {/* Hamburger / Cross Icon Toggle */}
                                    <Disclosure.Button
                                        className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                    >
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>

                                    {/* Mobile Menu Panel */}
                                    <Disclosure.Panel className="absolute left-0 z-10 mt-72 w-48 rounded-lg bg-gray-800 shadow-lg">
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


                    {/* Logo Section */}
                    <div className="flex items-center ml-10">
                        <img
                            alt="Your Company"
                            src="public/hivemind_logo_nobg.png"
                            className="h-8 w-auto"
                        />
                    </div>

                    {/* Links Section */}
                    <div className="flex-1 flex justify-center">
                        <div className="hidden sm:block">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        aria-current={item.current ? 'page' : undefined}
                                        className={classNames(
                                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'rounded-md px-3 py-2 text-sm font-medium',
                                        )}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Profile Section */}
                    <div className="flex items-center space-x-4">
                        <button
                            type="button"
                            className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                            <span className="sr-only">View notifications</span>
                            <BellIcon className="h-6 w-6" aria-hidden="true"/>
                        </button>

                        {/* Profile dropdown */}
                        <Menu as="div" className="relative">
                            <div>
                                <MenuButton
                                    className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                    <span className="sr-only">Open user menu</span>
                                    <img
                                        alt="User profile"
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        className="h-8 w-8 rounded-full"
                                    />
                                </MenuButton>
                            </div>
                            <MenuItems
                                className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5"
                            >
                                <MenuItem>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                                        Your Profile
                                    </a>
                                </MenuItem>
                                <MenuItem>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                                        Settings
                                    </a>
                                </MenuItem>
                                <MenuItem>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                                        Sign out
                                    </a>
                                </MenuItem>
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

function HeroSection() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="relative flex flex-col items-center justify-center text-white">
            <div className="hero-background" />
            <div className="w-full h-full relative z-10">
                <header className="absolute inset-x-0 top-0 z-50">
                    <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                        <div className="fixed inset-0 z-50"/>
                        <DialogPanel
                            className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-transparent px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                            <div className="flex items-center justify-between">
                                <a href="#" className="-m-1.5 p-1.5">
                                    <span className="sr-only">Your Company</span>
                                    <img
                                        alt=""
                                        src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                                        className="h-8 w-auto"
                                    />
                                </a>
                                <button
                                    type="button"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                >
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon aria-hidden="true" className="h-6 w-6"/>
                                </button>
                            </div>
                            <div className="mt-6 flow-root">
                                <div className="-my-6 divide-y divide-gray-500/10">
                                    <div className="space-y-2 py-6">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                    <div className="py-6">
                                        <a
                                            href="#"
                                            className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            Log in
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </DialogPanel>
                    </Dialog>
                </header>

                <div className="relative isolate px-6 pt-14 lg:px-8 w-full h-full">
                    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                            <div
                                className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                Announcing our next round of funding.{' '}
                                <a href="#" className="font-semibold text-indigo-600">
                                    <span aria-hidden="true" className="absolute inset-0"/>
                                    Read more <span aria-hidden="true">&rarr;</span>
                                </a>
                            </div>
                        </div>
                        <div className="text-center">
                            <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                                El futur dels videojocs està aquí
                            </h1>
                            <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                                Nosaltres tenim la solució perfecta per a que puguis disfrutar del teu temps amb els amics
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <a
                                    href="#"
                                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Get started
                                </a>
                                <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                                    Registra&#39;t gratuïtament<span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function TeamsSection() {
    const teamMembers = [
        { name: 'Radostin Ivanov', role: 'CEO', imageUrl: 'path/to/image1.jpg', description: 'Desenvolupador principal del projecte, amb estudis de SMX i DAM' },
        { name: 'Gerard Moreno', role: 'CTO', imageUrl: 'path/to/image2.jpg', description: 'Mantenidor del front end' },
        { name: 'Manel Méndez', role: 'CFO', imageUrl: 'path/to/image3.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet felis sit amet nunc.' },
        { name: 'Harry White', role: 'COO', imageUrl: 'path/to/image4.jpg' , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet felis sit amet nunc.' },

    ];

    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold text-center mb-8">El nostre equip</h2>
                <div className="flex flex-wrap justify-center">
                    {teamMembers.map((member) => (
                        <div key={member.name} className="w-full sm:w-1/2 lg:w-1/3 p-4">
                            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                                <img
                                    src={member.imageUrl}
                                    alt={member.name}
                                    className="w-24 h-24 rounded-full mx-auto mb-4"
                                />
                                <h3 className="text-xl font-semibold">{member.name}</h3>
                                <p className="text-gray-600">{member.role}</p>
                                <p className="text-gray-500 mt-2">{member.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default function Webpage() {
    return (
        <section>
            <NavigationBar/>
            <HeroSection />
            <TeamsSection/>
        </section>
    )
}



