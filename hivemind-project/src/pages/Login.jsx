import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navegate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/login', {username, password})
            .then(result => {
                console.log(result);
                navegate('/dashboard');
            })
            .catch(err => console.log(err));
    };


    return (
        <>
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <img
                alt="Your Company"
                src="public/hivemind_logo_nobg.png"
                className="mx-auto h-10 w-auto"
              />
              <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                El teu compte Hivemind:
              </h2>
            </div>
    
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form action="/" method="POST" className="space-y-6">
                <div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
                            Nom d'usuari
                        </label>
                    </div>
                    <div className="mt-2">
                        <input
                        id="username"
                        name="username"
                        type="username"
                        required
                        autoComplete="current-username"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                        />
                    </div>
                    </div>
    
                    <div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                            Contrasenya
                        </label>
                        <div className="text-sm">
                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                            Has oblidat la contrasenya?
                        </a>
                        </div>
                    </div>
                    <div className="mt-2">
                        <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        autoComplete="current-password"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                        />
                    </div>
                    </div>
    
                    <div>
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Inicia sessio
                    </button>
                    </div>
              </form>
    
              <p className="mt-10 text-center text-sm/6 text-gray-500">
                Encara no ets membre?{' '}
                <a href="/register" className="font-semibold text-indigo-600 hover:text-indigo-500">
                   Registra't gratuitament
                </a>
              </p>
            </div>
          </div>
        </>
    );
};

export default Login;