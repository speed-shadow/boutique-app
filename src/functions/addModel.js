import {db} from '../firebase/firebaseConfig';
//colecction y addDoc son necesarios para enviar datos a firestore
import {collection, addDoc} from 'firebase/firestore';

export default async function addModel(data) {
    try {
        //apuntar a la coleccion 
        const collectionRef = collection(db,'models');
        //pasarle los datos a la coleccion
        const modelId = await addDoc(collectionRef, data);
        return modelId;
    } catch (error) {
        console.log(error)
    }
}