import React from 'react';
import AddModelForm from '../components/AddModelForm';
import logOut from '../functions/logOut';

function Home(){
    return(
    <div className="w-screen h-screen flex justify-center">
        <div className="flex flex-col">
        <div className="flex flex-row">
        <h1>Bienvenido Administrador</h1>
        <button 
        className='bg-red-300 m-3 hover:bg-red-500 text-white
        font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
        onClick={logOut}>
            Cerrar Sesión
        </button>
        </div>
        <AddModelForm />
        </div> 
    </div>
    ) 
}

export default Home;