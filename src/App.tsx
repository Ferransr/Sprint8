import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Starships from "./pages/starships";
import StarshipDetails from "./pages/starshipDetails";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/starships" element={<StarshipDetails />} />
        <Route path="/" element={<Starships />} />
      </Routes>
    </Router>
  );
};

export default App;