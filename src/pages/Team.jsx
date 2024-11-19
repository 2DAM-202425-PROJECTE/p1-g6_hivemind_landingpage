export default function TeamPage() {
    const teamMembers = [
        { name: 'Radostin Ivanov', role: 'CEO', imageUrl: '/public/noimage.png', description: 'Desenvolupador principal del projecte, amb estudis de SMX i DAM' },
        { name: 'Gerard Moreno', role: 'CTO', imageUrl: '/public/noimage.png', description: 'Mantenidor del front end' },
        { name: 'Manel Méndez', role: 'CFO', imageUrl: '/public/noimage.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet felis sit amet nunc.' },
        { name: 'Harry White', role: 'COO', imageUrl: '/public/noimage.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet felis sit amet nunc.' },
    ];

    return (
        <div className="relative flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="hero-background"/>
            <div className="sm:mx-auto sm:w-full relative z-10 pt-10 text-left backdrop-blur-2xl rounded-3xl p-5">
                    <h2 className="text-3xl font-semibold text-center mb-8 text-white">El nostre equip</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {teamMembers.map((member) => (
                            <div key={member.name}
                                 className="bg-white/20 backdrop-blur-3xl rounded-3xl shadow-lg p-6 text-center text-white">
                                <img
                                    src={member.imageUrl}
                                    alt={member.name}
                                    className="w-24 h-24 rounded-full mx-auto mb-4"
                                />
                                <h3 className="text-xl font-semibold">{member.name}</h3>
                                <p className="text-white text-base">{member.role}</p>
                                <p className="text-white text-sm mt-2">{member.description}</p>
                            </div>
                        ))}
                </div>
            </div>
        </div>
);
}