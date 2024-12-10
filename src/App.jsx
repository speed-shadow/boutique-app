import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './styles/tailwind.css';
import { auth } from './firebase/firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import Home from './views/Home';
import Login from './views/Login';
import BoutiqueHome from './views/BoutiqueHome';

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
        />
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

