import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
    const [isCitiesOpen, setIsCitiesOpen] = useState(false);

    const toggleCategories = () => setIsCategoriesOpen(!isCategoriesOpen);
    const toggleCities = () => setIsCitiesOpen(!isCitiesOpen);

    const categories = ['Modelos VIP', 'Masajes', 'Trans', 'Gigolo'];
    const cities = [
        'Ciudad de México',
        'Guadalajara',
        'Monterrey',
        'Mérida',
        'Cancún',
        'Tijuana',
        'Puebla',
        'Chihuahua',
    ];

    return (
        // TODO: REALIZAR EL RESPONSIVE
        <nav className="flex bg-black text-white uppercase justify-between px-5 py-2.5 items-center">
            <div className="flex flex-row gap-10 items-center">
                <Link to={'/'}>Logo</Link>
                <div className="relative inline-block text-left">
                    {/* Botón del menú */}
                    <button
                        id="dropdownDefaultButton"
                        onClick={toggleCategories}
                        className="text-white border-b border-white font-medium text-sm px-2 py-1 text-center inline-flex items-center uppercase w-36"
                        type="button"
                    >
                        CATEGORIAS
                        <svg
                            className="w-2.5 h-2.5 ml-3 right-3 absolute"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 1 4 4 4-4"
                            />
                        </svg>
                    </button>

                    {/* Menú desplegable */}
                    {isCategoriesOpen && (
                        <div
                            id="dropdown"
                            className="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-36 dark:bg-gray-800"
                        >
                            <ul
                                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                aria-labelledby="dropdownDefaultButton"
                            >
                                {categories.map((category, ndx) => {
                                    return (
                                        <li key={ndx}>
                                            <Link
                                                to={'/'}
                                                className="block px-4 py-2 hover:bg-gray-600"
                                            >
                                                {category}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    )}
                </div>
                <div className="relative inline-block text-left">
                    {/* Botón del menú */}
                    <button
                        id="dropdownDefaultButton"
                        onClick={toggleCities}
                        className="text-white border-b border-white font-medium text-sm px-2 py-1 text-center inline-flex items-center uppercase w-36"
                        type="button"
                    >
                        CIUDADES
                        <svg
                            className="w-2.5 h-2.5 ml-3 right-3 absolute"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 1 4 4 4-4"
                            />
                        </svg>
                    </button>

                    {/* Menú desplegable */}
                    {isCitiesOpen && (
                        <div
                            id="dropdown"
                            className="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-36 dark:bg-gray-800"
                        >
                            <ul
                                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                aria-labelledby="dropdownDefaultButton"
                            >
                                {cities.map((city, ndx) => {
                                    return (
                                        <li key={ndx}>
                                            <Link
                                                to={'/'}
                                                className="block px-4 py-2 hover:bg-gray-600"
                                            >
                                                {city}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    )}
                </div>
                <Link to={'/'}>CONTACTO</Link>
            </div>
            {/* BUSCADOR */}
            <div className="relative">
                <input
                    type="text"
                    placeholder="Buscar..."
                    className="rounded-full indent-3 border-white border-2 outline-none bg-black"
                />
                <img
                    src="/src/assets/SVG/search.svg"
                    alt=""
                    className="w-5 absolute right-3 top-1/2 transform -translate-y-1/2"
                />
            </div>
        </nav>
    );
}
