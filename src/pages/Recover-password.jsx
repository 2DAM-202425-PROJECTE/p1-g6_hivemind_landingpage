import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RecoverPassword = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/recover-password', { email })
            .then(() => {
                alert("Si l'email existeix al sistema, rebràs un correu amb instruccions per restablir la contrasenya.");
                navigate('/login');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="relative">
            <div className="hero-background" />
            <div className="w-full h-full relative z-10 pt-10 text-left backdrop-blur-2xl rounded-3xl p-5">
                <h2 className="text-3xl text-white text-center mb-10 font-bold">Recupera la teva Contrasenya</h2>
                <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-8 rounded-3xl shadow-lg bg-opacity-60 bg-black form-transparent">
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                            Correu Electrònic
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="focus:border-white focus:border-opacity-50 text-white bg-opacity-60 bg-black shadow appearance-none border-4 rounded-3xl w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="ex. correu@exemple.com"
                        />
                    </div>
                    <div className="flex flex-col gap-4 items-center justify-between">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline w-full"
                        >
                            Envia les Instruccions
                        </button>
                        <button
                            type="button"
                            onClick={() => navigate('/login')}
                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline w-full"
                        >
                            Torna a Iniciar Sessió
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RecoverPassword;
