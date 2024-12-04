import '../App.css';

const testimonis = [
    {
        name: "Maria Samntha",
        profession: "Influencer social",
        text: "Estic tenint la millor experiència com a client amb aquesta empresa. Són molt professionals i sempre lliuren a temps.",
        image: "https://www.famousbirthdays.com/headshots/maria-samantha-de-leon-3.jpg",
        rating: 5,
    },
    {
        name: "Lisa Cudrow",
        profession: "Dissenyadora gràfica",
        text: "Els serveis tenen un preu molt assequible i la qualitat és excel·lent. Recomanaria aquesta empresa a tothom.",
        image: "https://cdn.britannica.com/62/248562-050-310A83C9/Lisa-Kudrow-Friends.jpg?w=400&h=300&c=crop",
        rating: 5,
    },
    {
        name: "John Smith",
        profession: "Enginyer de software",
        text: "Són molt professionals amb els seus serveis API i la documentació és molt detallada. Estic molt satisfet amb els seus serveis.",
        image: "https://cdn-images.dzcdn.net/images/artist/086f50bb1ce0e3033634e5e9c2d75462/1900x1900-000000-80-0-0.jpg",
        rating: 5,
    },
];

function Testimonis() {
    return (
        <section className="relative flex flex-col min-h-screen text-white">
            {/* Fons */}
            <div className="hero-background" />
            <div className="flex-grow flex flex-col justify-center items-center relative px-4 py-12">
                <div className="w-full max-w-6xl bg-gray-900 rounded-2xl p-8 shadow-lg">
                    <h2 className="text-3xl font-extrabold text-white mb-6 text-center">Testimonis</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {testimonis.map((testimoni, index) => (
                            <div key={index} className="bg-white/20 p-6 rounded-xl shadow-md">
                                <img
                                    src={testimoni.image}
                                    alt={testimoni.name}
                                    className="rounded-full w-20 h-20 mb-4 object-cover border-2 border-primary mx-auto"
                                />
                                <h3 className="font-bold text-xl text-primary text-center">{testimoni.name}</h3>
                                <p className="text-secondary text-center">{testimoni.profession}</p>
                                <p className="mt-2 text-lg italic text-secondary text-center">
                                    &quot;{testimoni.text}&quot;
                                </p>
                                <div
                                    className="mt-2 text-yellow-500 text-center"
                                    aria-label={`Valoració: ${testimoni.rating} de 5 estrelles`}
                                >
                                    {'★'.repeat(Math.floor(testimoni.rating))}
                                    {'☆'.repeat(5 - Math.floor(testimoni.rating))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonis;
