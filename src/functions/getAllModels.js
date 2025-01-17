import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

export default async function getAllModels(){
    try {
        return await getDocs(collection(db, "models"));
    } catch (e) {
        console.error("Error al obtener modelos:", e);
    }
};