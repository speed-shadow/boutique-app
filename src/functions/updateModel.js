import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

export default async function updateModel(id, currentModels, setModels) {
    const newName = prompt("Introduce el nuevo nombre del modelo:");
    if (newName) {
        try {
            const modelRef = doc(db, "models", id); // Ahora doc está definido
            await updateDoc(modelRef, { name: newName });
            setModels(currentModels.map((model) => (model.id === id ? { ...model, name: newName } : model)));
            alert("Modelo actualizado correctamente.");
        } catch (e) {
            console.error("Error al actualizar el modelo:", e);
            alert("Hubo un error al actualizar el modelo.");
        }
    }
}
