import React from "react";
import loginWithEmail from "../functions/loginWithEmail";

function Login() {
    async function submitHandler(e) {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;

        // Llama a la función de inicio de sesión
        await loginWithEmail(username, password);
    }

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="flex flex-col">
                <h1 className="text-3xl font-bold">Inicia sesión</h1>
                <form 
                    className="flex flex-col" 
                    onSubmit={submitHandler}
                >
                    <label htmlFor="username">Nombre de usuario</label>
                    <input
                        className="shadow appearance-none border rounded w-full mt-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text" 
                        id="username" 
                        required 
                    />
                    <label htmlFor="password">Contraseña</label>
                    <input
                        className="shadow appearance-none border rounded w-full mt-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="password" 
                        id="password" 
                        required 
                    />
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Acceder
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;