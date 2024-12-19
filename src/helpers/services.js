// firebaseHelper.js
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Inicializa Firestore
const db = getFirestore();

/**
 * helper para obtener y mapear los datos de la colección 'services' en Firebase.
 * @returns {Promise<Array<{ id: string, name: string }>>} Lista de servicios.
 */
export const getServicesForCheckboxes = async () => {
  try {
    // Referencia a la colección 'services'
    const servicesCollection = collection(db, "services");

    // Obtiene los documentos de la colección
    const querySnapshot = await getDocs(servicesCollection);

    // Mapea los documentos a un formato usable
    const services = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      name: doc.data().name, // Asegúrate de que los documentos tengan un campo 'name'
    }));

    return services;
  } catch (error) {
    console.error("Error obteniendo servicios:", error);
    throw error; // Lanza el error para manejarlo en el componente
  }
};
