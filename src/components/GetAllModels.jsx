import React, {useState, useEffect} from "react";
import getAllModels from '../functions/getAllModels';
import updateModel  from "../functions/updateModel";
import deleteModel from "../functions/deleteModel";

function GetAllModels (){
    const [models, setModels] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchModels = async () => {
            try {
                const querySnapshot = await getAllModels();
                const modelsArray = [];
                querySnapshot.forEach((doc) => {
                    modelsArray.push({ id: doc.id, ...doc.data() });
                });
                setModels(modelsArray);
            } catch (e) {
                console.error("Error al cargar las modelos:", e);
            } finally {
                setLoading(false);
            }
        };

        fetchModels();
    }, []);

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar este modelo?");
        if (confirmDelete) {
            try {
                await deleteDoc(doc(db, "models", id));
                setModels(models.filter((model) => model.id !== id));
                alert("Modelo eliminado correctamente.");
            } catch (e) {
                console.error("Error al eliminar el modelo:", e);
                alert("Hubo un error al eliminar el modelo.");
            }
        }
    };

    const handleUpdate = async (id) => {
        const newName = prompt("Introduce el nuevo nombre del modelo:");
        if (newName) {
            try {
                const modelRef = doc(db, "models", id);
                await updateDoc(modelRef, { name: newName });
                setModels(models.map((model) => (model.id === id ? { ...model, name: newName } : model)));
                alert("Modelo actualizado correctamente.");
            } catch (e) {
                console.error("Error al actualizar el modelo:", e);
                alert("Hubo un error al actualizar el modelo.");
            }
        }
    };

    if (loading) return <p className="text-center text-gray-500">Cargando modelos...</p>;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold text-center mb-4">Lista de Modelos</h1>
            <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2">Nombre</th>
                        <th className="border border-gray-300 px-4 py-2">Edad</th>
                        <th className="border border-gray-300 px-4 py-2">Altura</th>
                        <th className="border border-gray-300 px-4 py-2">Peso</th>
                        <th className="border border-gray-300 px-4 py-2">Medidas</th>
                        <th className="border border-gray-300 px-4 py-2">Ciudad</th>
                        <th className="border border-gray-300 px-4 py-2">Descripción</th>
                        <th className="border border-gray-300 px-4 py-2">Instagram</th>
                        <th className="border border-gray-300 px-4 py-2">Twitter</th>
                        <th className="border border-gray-300 px-4 py-2">WhatsApp</th>
                        <th className="border border-gray-300 px-4 py-2">Teléfono</th>
                        <th className="border border-gray-300 px-4 py-2">Atributos</th>
                        <th className="border border-gray-300 px-4 py-2">Servicios</th>
                        <th className="border border-gray-300 px-4 py-2">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {models.map((model) => (
                        <tr key={model.id} className="hover:bg-gray-50">
                            <td className="border border-gray-300 px-4 py-2 text-sm">{model.name || 'Sin nombre'}</td>
                            <td className="border border-gray-300 px-4 py-2 text-sm">{model.age || 'Sin edad'}</td>
                            <td className="border border-gray-300 px-4 py-2 text-sm">{model.height || 'Sin altura'}</td>
                            <td className="border border-gray-300 px-4 py-2 text-sm">{model.weight || 'Sin peso'}</td>
                            <td className="border border-gray-300 px-4 py-2 text-sm">{model.measures || 'Sin medidas'}</td>
                            <td className="border border-gray-300 px-4 py-2 text-sm">{model.city || 'Sin ciudad'}</td>
                            <td className="border border-gray-300 px-4 py-2 text-sm">{model.description || 'Sin descripción'}</td>
                            <td className="border border-gray-300 px-4 py-2 text-sm"><a href={model.instagram} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Instagram</a></td>
                            <td className="border border-gray-300 px-4 py-2 text-sm"><a href={model.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Twitter</a></td>
                            <td className="border border-gray-300 px-4 py-2 text-sm"><a href={model.whatsapp} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">WhatsApp</a></td>
                            <td className="border border-gray-300 px-4 py-2 text-sm">{model.phone || 'Sin teléfono'}</td>
                            <td className="border border-gray-300 px-4 py-2 text-sm">{model.attributes ? model.attributes.join(', ') : 'Sin atributos'}</td>
                            <td className="border border-gray-300 px-4 py-2 text-sm">{model.services ? model.services.join(', ') : 'Sin servicios'}</td>
                            <td className="border border-gray-300 px-4 py-2 text-sm">
                                <button onClick={() => updateModel(model.id, models, setModels)} className="bg-blue-100 text-blue-600 px-4 py-1 rounded hover:bg-blue-200">Actualizar</button>
                                <button onClick={() => deleteModel(model.id, models, setModels)} className="bg-red-100 text-red-600 px-4 py-1 rounded hover:bg-red-200 ml-2">Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default GetAllModels;