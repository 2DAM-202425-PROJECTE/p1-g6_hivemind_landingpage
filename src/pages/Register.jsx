import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer"; // Import the Footer component

const Register = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/register', { name, username, password })
            .then(() => navigate('/login'))
            .catch(err => console.log(err));
    };

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center text-white">
            <div className="hero-background" />
            <div className="w-full max-w-lg bg-gray-900 rounded-3xl p-8 md:p-12 shadow-2xl">
                <h2 className="text-3xl text-white text-center mb-10 font-bold">Crea el teu Compte</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
                            Nom i Cognoms
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="focus:border-white focus:border-opacity-50 text-white bg-opacity-60 bg-black shadow appearance-none border-4 rounded-3xl w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="ex. John Doe"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
                            Nom d'usuari
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="focus:border-white focus:border-opacity-50 text-white bg-opacity-60 bg-black shadow appearance-none border-4 rounded-3xl w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="ex. johndoe"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
                            Contrasenya
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="focus:border-white focus:border-opacity-50 text-white bg-opacity-60 bg-black shadow appearance-none border-4 rounded-3xl w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="*******"
                        />
                    </div>
                    <div className="flex flex-col gap-4 items-center justify-between">
                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline w-full"
                        >
                            Registra't
                        </button>
                        <button
                            type="button"
                            onClick={() => navigate('/login')}
                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline w-full"
                        >
                            Ja tens un compte? Inicia sessió
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;