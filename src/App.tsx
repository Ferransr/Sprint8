import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa componentes de react-router-dom
import Starships from './pages/Starships';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
// import firebase from 'firebase/app'; // Importa Firebase sin desestructuración
import 'firebase/auth'; // Importa el módulo de autenticación de Firebase
import 'firebase/firestore'; // Importa el módulo de Firestore de Firebase
import AuthRoute from './components/AuthRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/starships" element={<AuthRoute><Starships /></AuthRoute>} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
