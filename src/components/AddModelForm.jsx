import React from "react";
import addModel from "../functions/addModel";

function AddModelForm(){
    function submitHandler(e){
        e.preventDefault();
        /* nombre, descripcion, ciudad, edad, telefono, estatura, peso, medidas{92, 65, 108},
        atributos{delgada, ingles, besos, cabello negro, cola grande, etc xD},
        servicios{masaje, besos, sexo mutuo, oral, etc xD}, whatsapp, instagram, twitter  */
        const name = e.target.name.value;
        const city = e.target.city.value;
        const description = e.target.description.value;
        
        const data = {name, city, description};
        addModel(data);
        //limpiar campos del form
        e.target.name.value = 
            e.target.city.value = 
            e.target.description.value = '';
    }
    return(
    <div className="flex mt-5 flex-row">
            <form onSubmit={submitHandler}>
                <label htmlFor="" className="flex flex-col mt-2 mb-2">
                    Nombre:
                    <input className="mt-3 border-2" type="text" id="name" placeholder="Nombre..." />
                </label>
                <label htmlFor="" className="flex flex-col mt-2 mb-2">
                    Ciudad:
                    <select id="city" className="mt-2">
                        <option value="puebla">Puebla</option>
                        <option value="cdmx">CMDX</option>
                        <option value="guadalajara">Guadalajara</option>
                    </select>
                </label>
                <label htmlFor="" className="flex flex-col mt-2 mb-2">
                    Contacto:
                    <input type="email" id="contact"/>
                </label>
                <label htmlFor="" className="flex flex-col mt-2 mb-2">
                    Descripcion:
                    <textarea className="border-2 mt-3" type="text" id="description" placeholder="Descripcion..." />
                </label>
                <button className="bg-blue-300 hover:bg-blue-500
                text-white font-bold py-2 px-4 rounded
                focus:outline-none focus:shadow-outline">
                   Agregar
                </button>
            </form>
        </div>

    );
}

export default AddModelForm;