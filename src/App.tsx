import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Starships from "./components/starships";
import StarshipDetails from "./components/starshipDetails";

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