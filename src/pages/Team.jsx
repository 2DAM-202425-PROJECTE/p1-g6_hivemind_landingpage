import React from 'react';
import { Link } from 'react-router-dom';

export default function TeamPage() {
    const teamMembers = [
        { name: 'Radostin Ivanov', role: 'CEO', imageUrl: '/placeholder.svg?height=96&width=96', description: 'Desenvolupador principal del projecte, amb estudis de SMX i DAM' },
        { name: 'Gerard Moreno', role: 'CTO', imageUrl: '/placeholder.svg?height=96&width=96', description: 'Mantenidor del front end amb experiència en React i Next.js' },
        { name: 'Manel Méndez', role: 'CFO', imageUrl: '/placeholder.svg?height=96&width=96', description: 'Expert en finances i estratègia empresarial amb més de 10 anys d\'experiència' },
        { name: 'Harry White', role: 'COO', imageUrl: '/placeholder.svg?height=96&width=96', description: 'Especialista en operacions i optimització de processos empresarials' },
    ];

    const companyValues = [
        { title: 'Innovació', description: 'Busquem constantment noves maneres de millorar i créixer' },
        { title: 'Integritat', description: 'Actuem amb honestedat i transparència en tot el que fem' },
        { title: 'Col·laboració', description: 'Treballem junts per aconseguir objectius comuns' },
        { title: 'Excel·lència', description: 'Ens esforcem per oferir la millor qualitat en tots els nostres productes i serveis' },
    ];

    return (
        <div className="relative flex flex-col min-h-screen text-white">
            <div className="hero-background"/>
            <main className="flex-grow flex flex-col justify-center items-center relative">
                <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-900 rounded-3xl my-8">
                    <h1 className="text-5xl font-extrabold text-center mb-8 text-white">El nostre equip</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member) => (
                            <div key={member.name}
                                 className="bg-gray-800 rounded-3xl shadow-lg p-6 text-center text-white transition-transform transform hover:scale-105 hover:shadow-2xl">
                                <img
                                    src={member.imageUrl}
                                    alt={member.name}
                                    width={96}
                                    height={96}
                                    className="rounded-full mx-auto mb-4 border-2 border-white"
                                />
                                <h3 className="text-2xl font-semibold">{member.name}</h3>
                                <p className="text-lg text-gray-300">{member.role}</p>
                                <p className="text-sm mt-2">{member.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-800 rounded-3xl my-8">
                    <h2 className="text-4xl font-bold text-center mb-8 text-white">Els nostres valors</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {companyValues.map((value, index) => (
                            <div key={index} className="bg-gray-700 rounded-xl p-6 shadow-lg">
                                <h3 className="text-2xl font-semibold text-white mb-2">{value.title}</h3>
                                <p className="text-gray-300">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-900 rounded-3xl my-8">
                    <h2 className="text-4xl font-bold text-center mb-8 text-white">La nostra missió</h2>
                    <p className="text-xl text-center text-gray-300 mb-8">
                        A HiveMind, la nostra missió és crear una plataforma innovadora que connecti persones i idees,
                        fomentant la col·laboració i el creixement personal i professional.
                    </p>
                    <div className="text-center">
                        <Link to="/" className="inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition duration-300">
                            Informa't més
                        </Link>
                    </div>
                </section>

                <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-800 rounded-3xl my-8">
                    <h2 className="text-4xl font-bold text-center mb-8 text-white">Uneix-te al nostre equip</h2>
                    <p className="text-xl text-center text-gray-300 mb-8">
                        Estem sempre buscant talent apassionat i creatiu per unir-se a la nostra missió.
                        Si creus que pots aportar valor al nostre equip, ens encantaria saber de tu!
                    </p>
                    <div className="text-center">
                        <Link to="/Contact" className="inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition duration-300">
                            Ficat en contacte!
                        </Link>
                    </div>
                </section>
            </main>
        </div>
    );
}