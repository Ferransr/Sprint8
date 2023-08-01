import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../index.css';


interface Starship {
  name: string;
  model: string;
}

interface ApiResponse {
  results: Starship[];
  next: string | null;
}

const Starships: React.FC = () => {
  const [starships, setStarships] = useState<Starship[]>([]);
  const [nextPageUrl, setNextPageUrl] = useState<string | null>("https://swapi.dev/api/starships/");

  const fetchStarships = useCallback(async () => {
    if (nextPageUrl) {
      try {
        const response = await axios.get<ApiResponse>(nextPageUrl);
        setStarships((prevStarships) => [...prevStarships, ...response.data.results]);
        setNextPageUrl(response.data.next);
      } catch (error) {
        console.error("Error fetching starships:", error);
      }
    }
  }, [nextPageUrl]);

  useEffect(() => {
    fetchStarships();
  }, [fetchStarships]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || !nextPageUrl) return;
      fetchStarships();
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [fetchStarships, nextPageUrl]);

  return (
    <div className="starships-container">
      {starships.map((starship) => (
        <p key={starship.name} className="starship-item">
          <Link className="starship-name" to={`/starships?name=${starship.name}`}>{starship.name.toUpperCase()}</Link> <br />
          <span className="starship-model">{starship.model}</span>
        </p>
      ))}

    </div>
  );
};

export default Starships;
