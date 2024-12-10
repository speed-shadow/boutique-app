//funcion para iniciar sesion con email y password
import {auth} from '../firebase/firebaseConfig';
import {signInWithEmailAndPassword} from 'firebase/auth';

export default async function loginWithEmail(email, password){
    try {
        const user = await signInWithEmailAndPassword(auth, email,password);
    } catch (error) {
        console.log(error);
    }
}