import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface Starship {
  name: string;
  model: string;
}

const Starships: React.FC = () => {
  const [starships, setStarships] = useState<Starship[]>([]);
  const apiUrl = "https://swapi.dev/api/starships/";

  useEffect(() => {
    fetchStarships();
  }, []);

  const fetchStarships = async () => {
    try {
      const response = await axios.get(apiUrl);
      setStarships(response.data.results);
    } catch (error) {
      console.error("Error fetching starships:", error);
    }
  };

  return (
    <div>
      <h1>Star Wars Starships</h1>
      <ul>
        {starships.map((starship) => (
          <li key={starship.name}>
            <Link to={`/starships?name=${starship.name}`}>
              <strong>Name:</strong> {starship.name}
            </Link>
            <strong>Model:</strong> {starship.model}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Starships;