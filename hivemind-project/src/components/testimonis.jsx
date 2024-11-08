import '../App.css';

const testimonials = [
    {
        name: "Maria Samntha",
        profession: "Web Developer",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
        image: "path/to/maria.jpg", // Replace with the actual path to the image
        rating: 4.5,
    },
    {
        name: "Lisa Cudrow",
        profession: "Graphic Designer",
        text: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi.",
        image: "path/to/lisa.jpg", // Replace with the actual path to the image
        rating: 5,
    },
    {
        name: "John Smith",
        profession: "Marketing Specialist",
        text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.",
        image: "path/to/john.jpg", // Replace with the actual path to the image
        rating: 4,
    },
];

function Testimonis() {
    return (
        <div id="testimonials" className="max-w-5xl mx-auto p-8 text-center text-white">
            <h1 className="text-3xl font-semibold mb-8 text-white">Testimonials</h1>
            <div className="flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="backdrop-blur-3xl p-6 rounded-3xl shadow-lg flex flex-col items-center">
                        <img src={testimonial.image} alt={testimonial.name} className="rounded-full w-24 h-24 mb-4" />
                        <h2 className="font-bold text-xl">{testimonial.name}</h2>
                        <p className="text-blue-500">{testimonial.profession}</p>
                        <p className="mt-2 text-lg italic text-white">&quot;{testimonial.text}&quot;</p>
                        <div className="mt-2 text-yellow-500">
                            {'★'.repeat(Math.floor(testimonial.rating))}{'☆'.repeat(5 - Math.floor(testimonial.rating))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Testimonis;
