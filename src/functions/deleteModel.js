import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

export default async function deleteModel(id, currentModels, setModels) {
    const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar este modelo?");
    if (confirmDelete) {
        try {
            const modelRef = doc(db, "models", id); // Referencia al documento en Firestore
            await deleteDoc(modelRef); // Elimina el documento
            setModels(currentModels.filter((model) => model.id !== id)); // Actualiza el estado local
            alert("Modelo eliminado correctamente.");
        } catch (e) {
            console.error("Error al eliminar el modelo:", e);
            alert("Hubo un error al eliminar el modelo.");
        }
    }
}