import { Link, Outlet } from 'react-router-dom';
import logOut from '../functions/logOut';

function Home() {
    return (
        <div className="flex min-h-screen bg-gray-100">
            <aside className="w-64 bg-gray-800 text-white flex flex-col">
                <div className="p-4 text-center font-bold text-xl border-b border-gray-700">
                    Bienvenido Administrador
                </div>
                <nav className="flex-1 justify-between p-4">
                    <ul className="space-y-4">
                        <li>
                            <Link
                                to={'addModel'}
                                className="block py-2 px-4 rounded hover:bg-gray-700 transition"
                            >
                                Agregar Modelo
                            </Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <button
                                className="bg-red-400 m-3 hover:bg-red-500 text-white font-bold py-2 px-4 rounded transition focus:outline-none focus:shadow-outline"
                                onClick={logOut}
                            >
                                Cerrar Sesión
                            </button>
                        </li>
                    </ul>
                </nav>
                <footer className="p-4 border-t border-gray-700 text-sm text-center">
                    © 2024 My Dashboard
                </footer>
            </aside>
            <main className="flex-1 p-6">
                <div className="flex justify-center">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}

export default Home;
