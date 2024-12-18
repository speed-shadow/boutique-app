// firebaseHelper.js
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Inicializa Firestore
const db = getFirestore();

/**
 * Función para obtener y mapear los datos de la colección 'attributes' en Firebase.
 * @returns {Promise<Array<{ id: string, name: string }>>} Lista de atributos.
 */
export const getAttributesForCheckboxes = async () => {
  try {
    // Referencia a la colección 'attributes'
    const attributesCollection = collection(db, "attributes");
    
    // Obtiene los documentos
    const querySnapshot = await getDocs(attributesCollection);
    
    // Mapea los documentos a un formato usable
    const attributes = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      name: doc.data().name, // Asegúrate de que los documentos tienen un campo 'name'
    }));
    
    return attributes;
  } catch (error) {
    console.error("Error obteniendo atributos:", error);
    throw error; // Opcional: Lanza el error para manejarlo en el componente
  }
};
