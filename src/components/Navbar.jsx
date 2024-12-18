import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    // Dropdowns
    const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
    const [isCitiesOpen, setIsCitiesOpen] = useState(false);
    // Responsive
    const [visibility, setVisibility] = useState(false);
    // Dropdowns
    const toggleCategories = () => setIsCategoriesOpen(!isCategoriesOpen);
    const toggleCities = () => setIsCitiesOpen(!isCitiesOpen);
    // Responsive
    const handleNav = () => setVisibility(!visibility);

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
    // TODO: MEJORAR NAVBAR
    // TODO: REFACTORIZAR LOS DROPDOWNS
    return (
        <nav className="bg-black text-white">
            <div className="relative flex h-16 items-center justify-between">
                {/* <!-- Mobile menu button--> */}
                <div className="absolute px-5 flex items-center sm:hidden">
                    <button
                        type="button"
                        className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
                        id="mobile-menu"
                        onClick={handleNav}
                    >
                        <span className="absolute -inset-0.5"></span>
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="block size-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                            data-slot="icon"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                        <svg
                            className="hidden size-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                            data-slot="icon"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18 18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                {/* LOGO */}
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start gap-5 px-5">
                    <div className="flex shrink-0 items-center">
                        <img
                            className="h-8 w-auto"
                            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                            alt="Your Company"
                        />
                    </div>
                    {/* NAVBAR DESKTOP */}
                    <nav className="hidden sm:flex text-white uppercase justify-between py-2.5 items-center w-full">
                        <div className="flex flex-row gap-10 items-center">
                            <div className="relative inline-block text-left">
                                {/* Botón del menú */}
                                <button
                                    id="dropdownDefaultButton"
                                    onClick={toggleCategories}
                                    className="text-white border-b border-white px-2 py-1 text-center inline-flex items-center uppercase w-36"
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
                                    className="text-white border-b border-white px-2 py-1 text-center inline-flex items-center uppercase w-36"
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
                </div>
            </div>
            {/* NAVBAR RESPONSIVE */}
            {visibility && (
                <div className="sm:hidden uppercase" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 flex flex-col items-center justify-center gap-5">
                        <div className="relative inline-block text-left">
                            {/* Botón del menú */}
                            <button
                                id="dropdownDefaultButton"
                                onClick={toggleCategories}
                                className="text-white border-b border-white px-2 py-1 text-center inline-flex items-center uppercase w-36"
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
                                className="text-white border-b border-white px-2 py-1 text-center inline-flex items-center uppercase w-36"
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
                        <Link to={'/'} className="block rounded-md px-3 py-2">
                            contacto
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
