import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/login', { username, password })
            .then(result => {
                console.log(result);
                if (result.data === "Success") {
                    navigate('/profile');
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="relative">
            <div className="hero-background" />
            <div className="w-full h-full relative z-10 pt-10 text-left backdrop-blur-2xl rounded-3xl p-5">
                <h2 className="text-3xl text-white text-center mb-10 font-bold">
                    Inicia sessió
                </h2>
                <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-8 rounded-3xl shadow-lg form-transparent">
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
                            Nom d'usuari
                        </label>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            required
                            autoComplete="current-username"
                            className="shadow appearance-none border-4 rounded-3xl w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
                            Contrasenya
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            autoComplete="current-password"
                            className="shadow appearance-none border-4 rounded-3xl w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="text-right mb-6">
                        <a href="/recover-password" className="text-sm text-blue-300 hover:text-blue-500">
                            Has oblidat la contrasenya?
                        </a>
                    </div>
                    <div className="flex flex-col gap-4 items-center justify-between">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline w-full"
                        >
                            Inicia sessió
                        </button>
                        <button
                            type="button"
                            onClick={() => navigate('/register')}
                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline w-full"
                        >
                            No tens un compte? Registra't
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
