import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Starships from "./pages/Starships";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/starships' element={<Starships />} />
      </Routes>
    </Router>
  )
}

export default App;