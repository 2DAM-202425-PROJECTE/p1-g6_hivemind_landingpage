export default function TeamPage() {
    const teamMembers = [
        { name: 'Radostin Ivanov', role: 'CEO', imageUrl: 'noimage.png', description: 'Desenvolupador principal del projecte, amb estudis de SMX i DAM' },
        { name: 'Gerard Moreno', role: 'CTO', imageUrl: 'noimage.png', description: 'Mantenidor del front end' },
        { name: 'Manel Méndez', role: 'CFO', imageUrl: 'noimage.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet felis sit amet nunc.' },
        { name: 'Harry White', role: 'COO', imageUrl: 'noimage.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet felis sit amet nunc.' },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <div className="hero-background"/>
            <div className="flex-grow flex flex-col justify-center items-center relative z-10">
                <div className="sm:mx-auto sm:w-full bg-blue-950 rounded-3xl p-10">
                    <h2 className="text-5xl font-extrabold text-center mb-8 text-white animate-fade-in">El nostre equip</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member) => (
                            <div key={member.name}
                                 className="bg-white/10 backdrop-blur-3xl rounded-3xl shadow-lg p-6 text-center text-white transition-transform transform hover:scale-105 hover:shadow-2xl animate-slide-up">
                                <img
                                    src={member.imageUrl}
                                    alt={member.name}
                                    className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-white"
                                />
                                <h3 className="text-2xl font-semibold">{member.name}</h3>
                                <p className="text-lg text-gray-300">{member.role}</p>
                                <p className="text-sm mt-2">{member.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <style jsx>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                @keyframes slide-up {
                    from {
                        transform: translateY(20px);
                        opacity: 0;
                    }
                    to {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }

                .animate-fade-in {
                    animation: fade-in 1s ease-in-out;
                }

                .animate-slide-up {
                    animation: slide-up 0.5s ease-in-out;
                }

                .hero-background {
                    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('../public/fondo.webp');
                    background-size: cover;
                    background-position: center;
                    background-attachment: fixed;
                    width: 100%;
                    height: 100vh;
                    position: fixed;
                    top: 0;
                    left: 0;
                    z-index: -1;
                }
            `}</style>
        </div>
    );
}