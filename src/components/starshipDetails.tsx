import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

interface Starship {
    name: string;
    model: string;
    // Añadir otras características
}

const StarshipDetails: React.FC = () => {
    const [searchParams] = useSearchParams();
    const name = searchParams.get("name") || "";
    const [starship, setStarship] = useState<Starship | null>(null);
    const apiUrl = `https://swapi.dev/api/starships/?search=${name}`;

    const fetchStarship = useCallback(async () => {
        try {
            const response = await axios.get(apiUrl);
            setStarship(response.data.results[0]);
        } catch (error) {
            console.error(`Error fetching details of ${name}:`, error);
        }
    }, [apiUrl, name]);

    useEffect(() => {
        fetchStarship();
    }, [fetchStarship]);

    return starship ? (
        <div>
            <h1>{starship.name}</h1>
            <p>Model: {starship.model}</p>
            {/* Añadir otras características */}
        </div>
    ) : (
        <p>Loading...</p>
    );
};

export default StarshipDetails;
