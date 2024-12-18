import React from "react";
import addModel from "../functions/addModel";
import { useState, useEffect } from "react";
import { getCitysForSelect } from "../helpers/citys";
import { getAttributesForCheckboxes } from "../helpers/attributes";
import { getServicesForCheckboxes } from "../helpers/services";

function AddModelForm(){
    const [citys, setCitys] = useState([]);
    const [selectedCity, setSelectedCity] = useState("");
    const [attributes, setAttributes] = useState([]);
    const [selectedAttributes, setSelectedAttributes] = useState([]);
    const [services, setServices] = useState([]);
    const [selectedServices, setSelectedServices] = useState([]);
    const [inputs, setInputs] = useState([""]); // Array que guarda los valores de los inputs

  // Agregar un nuevo input vacío
  const addInput = () => {
    setInputs([...inputs, ""]);
  };

  // Manejar el cambio de valor en un input
  const handleInputChange = (index, value) => {
    const updatedInputs = [...inputs];
    updatedInputs[index] = value;
    setInputs(updatedInputs);
  };

  // Concatenar los valores de los inputs
  const concatenatedValue = inputs.join(" ");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Valor concatenado:", concatenatedValue);
  };

  useEffect(() => {
    // Cargar los servicios al montar el componente
    const fetchServices = async () => {
      try {
        const servicesList = await getServicesForCheckboxes();
        setServices(servicesList);
      } catch (error) {
        console.error("Error cargando los servicios:", error);
      }
    };
    fetchServices();
  }, []);

  const handleServicesCheckboxChange = (id) => {
    setSelectedServices((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((serviceId) => serviceId !== id) // Desmarcar si ya está seleccionado
        : [...prevSelected, id] // Agregar si no está seleccionado
    );
  };

    useEffect(() => {
        // Cargar los atributos al montar el componente
        const fetchAttributes = async () => {
          try {
            const attributesList = await getAttributesForCheckboxes();
            setAttributes(attributesList);
          } catch (error) {
            console.error("Error cargando los atributos:", error);
          }
        };
        fetchAttributes();
      }, []);
    
      const handleCheckboxChange = (id) => {
        setSelectedAttributes((prevSelected) =>
          prevSelected.includes(id)
            ? prevSelected.filter((attrId) => attrId !== id) // Desmarcar si ya está seleccionado
            : [...prevSelected, id] // Agregar si no está seleccionado
        );
      };

    useEffect(() => {
        // Cargar las ciudades al montar el componente
        const fetchCitys = async () => {
          try {
            const cityList = await getCitysForSelect();
            setCitys(cityList);
          } catch (error) {
            console.error("Error cargando las ciudades:", error);
          }
        };
        fetchCitys();
      }, []);

    function submitHandler(e){
        e.preventDefault();
    
        const name = e.target.name.value;
        const city = e.target.city.value;
        const age = e.target.age.value;
        const instagram = e.target.instagram.value;
        const whatsapp = e.target.whatsapp.value;
        const twitter = e.target.twitter.value;
        const measures = e.target.measures.value;
        const phone = e.target.phone.value;
        const height = e.target.height.value;
        const weight = e.target.weight.value;
        const description = e.target.description.value;
        
        const data = {name, 
                      city,
                      attributes: selectedAttributes,
                      services: selectedServices,
                      urlImage: concatenatedValue,
                      whatsapp,
                      instagram,
                      twitter,
                      measures, 
                      description,
                      age,
                      phone,
                      height,
                      weight};
        addModel(data);
        console.log("modelo añadida exitosamente");
        //limpiar campos del form
        e.target.name.value = 
            e.target.city.value =
            e.target.age.value =
            e.target.instagram.value =
            e.target.whatsapp.value = 
            e.target.twitter.value =
            e.target.measures.value =
            e.target.phone.value =
            e.target.height.value =
            e.target.weight.value =
            e.target.description.value = '';
    }
    return(
    <div className="flex mt-5 flex-row">
            <form onSubmit={submitHandler}>
                <label htmlFor="" className="flex flex-col mt-2 mb-2">
                    Nombre:
                    <input className="mt-3 border-2" type="text" id="name" placeholder="Nombre..." />
                </label>
                <label htmlFor="city" className="flex flex-col mt-2 mb-2">Selecciona una ciudad:</label>
                <select
                    id="city"
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                >
                    <option value="">Selecciona una ciudad</option>
                    {citys.map((city) => (
                    <option key={city.id} value={city.nombre}>
                        {city.nombre}
                    </option>
                    ))}
                </select>
                <div className="flex flex-col mt-2 mb-2">
                <label>Selecciona atributos:</label>
                    {attributes.map((attribute) => (
                    <div key={attribute.id}>
                        <input
                        type="checkbox"
                        id={`attribute-${attribute.id}`}
                        value={attribute.name}
                        checked={selectedAttributes.includes(attribute.name)}
                        onChange={() => handleCheckboxChange(attribute.name)}
                        />
                        <label htmlFor={`attribute-${attribute.id}`}>{attribute.name}</label>
                    </div>
                    ))}
                </div>
                <label>Selecciona servicios:</label>
                <div className="flex flex-col mt-2 mb-2">
                    {services.map((service) => (
                    <div key={service.id}>
                        <input
                        type="checkbox"
                        id={`service-${service.id}`}
                        value={service.name}
                        checked={selectedServices.includes(service.name)}
                        onChange={() => handleServicesCheckboxChange(service.name)}
                        />
                        <label htmlFor={`service-${service.id}`}>{service.name}</label>
                    </div>
                    ))}
                </div>
                <label htmlFor="" className="flex flex-col mt-2 mb-2">
                    Medidas:
                    <input className="mt-2 border-2" type="text"  id="measures" placeholder="Medidas..." />
                </label>
                <label htmlFor="" className="flex flex-col mt-2 mb-2">
                    Instagram:
                    <input className="mt-2 border-2" type="text"  id="instagram" placeholder="Instagram..." />
                </label>
                <label htmlFor="" className="flex flex-col mt-2 mb-2">
                    WhatsApp:
                    <input className="mt-2 border-2" type="text"  id="whatsapp" placeholder="WhatsApp..." />
                </label>
                <label htmlFor="" className="flex flex-col mt-2 mb-2">
                    Twitter/X:
                    <input className="mt-2 border-2" type="text"  id="twitter" placeholder="Twitter..." />
                </label>
                <label htmlFor="" className="flex flex-col mt-2 mb-2">
                    Edad:
                    <input className="mt-2 border-2" type="text" id="age" placeholder="Edad..."/>
                </label>
                <label htmlFor="" className="flex flex-col mt-2 mb-2">
                    Celular:
                    <input className="mt-2 border-2" type="text" id="phone" placeholder="Celular..." />
                </label>
                <label htmlFor="" className="flex flex-col mt-2 mb-2">
                    Estatura:
                    <input className="mt-2 border-2" type="text" id="height" placeholder="Estatura..." />
                </label>
                <label htmlFor="" className="flex flex-col mt-2 mb-2">
                    Peso:
                    <input className="mt-2 border-2" type="text" id="weight" placeholder="Peso..." />
                </label>
                <label htmlFor="" className="flex flex-col mt-2 mb-2">
                    Descripcion:
                    <textarea className="border-2 mt-3" type="text" id="description" placeholder="Descripcion..." />
                </label>
                <label>Introduce los valores:</label>
                <div>
                  {inputs.map((value, index) => (
                    <div key={index}>
                      <input
                        type="text"
                        value={value}
                        onChange={(e) => handleInputChange(index, e.target.value)}
                        placeholder={`Input ${index + 1}`}
                      />
                    </div>
                  ))}
                  <button className="bg-blue-300 hover:bg-blue-500
                text-white font-bold py-2 px-4 rounded
                focus:outline-none focus:shadow-outline" type="button" onClick={addInput}>
                    Agregar input
                  </button>
                </div>
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