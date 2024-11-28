import '../App.css';

const testimonials = [
    {
        name: "Maria Samntha",
        profession: "Social influencer",
        text: "I am having the best customer experience with this company. They are very professional and always deliver on time.",
        image: "https://www.famousbirthdays.com/headshots/maria-samantha-de-leon-3.jpg",
        rating: 5,
    },
    {
        name: "Lisa Cudrow",
        profession: "Graphic Designer",
        text: "The services are at very affordable price and the quality is top-notch. I would recommend this company to everyone.",
        image: "https://cdn.britannica.com/62/248562-050-310A83C9/Lisa-Kudrow-Friends.jpg?w=400&h=300&c=crop",
        rating: 5,
    },
    {
        name: "John Smith",
        profession: "Software Engineer",
        text: "They are very professional with their API services and the documentation is very detailed. I am very happy with their services.",
        image: "https://cdn-images.dzcdn.net/images/artist/086f50bb1ce0e3033634e5e9c2d75462/1900x1900-000000-80-0-0.jpg",
        rating: 5,
    },
];

function Testimonis() {
    return (
        <section className="relative flex flex-col min-h-screen text-white">
            {/* Background */}
            <div className="hero-background" />
            <div className="flex-grow flex flex-col justify-center items-center relative px-4 py-12">
                <div className="w-full max-w-6xl bg-gray-900 rounded-2xl p-8 shadow-lg">
                    <h2 className="text-3xl font-extrabold text-white mb-6 text-center">Testimonials</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white/20 p-6 rounded-xl shadow-md">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="rounded-full w-20 h-20 mb-4 object-cover border-2 border-primary mx-auto"
                                />
                                <h3 className="font-bold text-xl text-primary text-center">{testimonial.name}</h3>
                                <p className="text-secondary text-center">{testimonial.profession}</p>
                                <p className="mt-2 text-lg italic text-secondary text-center">
                                    &quot;{testimonial.text}&quot;
                                </p>
                                <div
                                    className="mt-2 text-yellow-500"
                                    aria-label={`Rating: ${testimonial.rating} out of 5 stars`}
                                >
                                    {'★'.repeat(Math.floor(testimonial.rating))}
                                    {'☆'.repeat(5 - Math.floor(testimonial.rating))}
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
