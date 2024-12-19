// firebaseHelper.js
import { getFirestore, collection, getDocs } from "firebase/firestore"; 

// Inicializa Firestore
const db = getFirestore();

//helper de mapeo para las ciudades
export const getCitysForSelect = async () => {
  try {
    // Referencia a la colección 'citys'
    const citysCollection = collection(db, "citys");
    
    // Obtiene los documentos
    const querySnapshot = await getDocs(citysCollection);
    
    // Mapea los documentos a un formato usable
    const citys = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      nombre: doc.data().nombre, // Asegúrate de que los documentos tienen un campo 'name'
    }));
    
    return citys;
  } catch (error) {
    console.error("Error obteniendo ciudades:", error);
    throw error; // Opcional: Lanza el error para manejarlo en el componente
  }
};
