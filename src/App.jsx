import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AddModelForm from './components/AddModelForm';
import { auth } from './firebase/firebaseConfig';
import './styles/tailwind.css';
import BoutiqueHome from './views/BoutiqueHome';
import Home from './views/Home';
import Login from './views/Login';
import GetAllModels from './components/GetAllModels';

function App() {
  const [user, setUser] = useState(null);

  // Escucha cambios en la autenticación
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, usuarioFirebase => {
      if (usuarioFirebase) {
        setUser(usuarioFirebase);
      } else {
        setUser(null);
      }
    });
    // Limpia el listener al desmontar
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Routes>
        {/* Ruta para Login */}
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/home" />}
        />
        {/* Ruta para Home */}
        <Route
          path="/home"
          element={user ? <Home user={user} /> : <Navigate to="/login" />}
        >
          <Route path='addModel' element={<AddModelForm/>}></Route>
          <Route path='getAllModels' element={<GetAllModels/>}></Route>
        </Route>
        {/* Ruta por defecto/redirección (envia a inicio de la web)*/}
        <Route
          path="/"
          element={<BoutiqueHome/>}
        />
        {/* ruta para Home de las modelos al precionar inicio */}
        <Route
          path="/inicio"
          element={<BoutiqueHome/>}
        />
      </Routes>
    </Router>
  );
}

export default App;

