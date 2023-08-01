import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

interface Starship {
    name: string;
    model: string;
    starship_class: string;
    manufacturer: string;
    cost_in_credits: string;
    crew: string;
    passengers: string;
    cargo_capacity: string;
    consumables: string;
    length: string;
    max_atmosphering_speed: string;
    hyperdrive_rating: string;
    imageUrl: string;
}

const StarshipDetails: React.FC = () => {
    const [searchParams] = useSearchParams();
    const name = searchParams.get("name") || "";
    const [starship, setStarship] = useState<Starship | null>(null);
    const apiUrl = `https://swapi.dev/api/starships/?search=${name}`;

    const fetchStarship = useCallback(async () => {
        try {
            const response = await axios.get(apiUrl);
            const starship = response.data.results[0];

            // Extrae el id de la URL de la nave.
            const urlSegments = starship.url.split('/');
            const id = urlSegments[urlSegments.length - 2];

            // Construye la URL de la imagen y la agrega al objeto de la nave.
            starship.imageUrl = `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;

            setStarship(starship);
        } catch (error) {
            console.error(`Error fetching details of ${name}:`, error);
        }
    }, [apiUrl, name]);

    const onImageError = (ev: React.SyntheticEvent<HTMLImageElement, Event>) => {
        (ev.target as HTMLImageElement).src = './src/assets/img/imageNotFound404.jpg'; //imagen de respaldo
    };

    useEffect(() => {
        fetchStarship();
    }, [fetchStarship]);

    return starship ? (
        <div>
            <img className="starship-image" src={starship.imageUrl} alt={starship.name} onError={onImageError} />
            <div className="starship-details-container">
                <p className="starship-details-main-title">{starship.name.toUpperCase()}</p>
                <div className="starship-title-details">
                    <p>MODEL : <span className="starship-details">{starship.model}</span> </p>
                    <p>STARSHIP CLASS : <span className="starship-details">{starship.starship_class}</span> </p>
                    <p>MANUFACTURER : <span className="starship-details">{starship.manufacturer}</span> </p>
                    <p>COST : <span className="starship-details">{starship.cost_in_credits} CREDITS</span></p>
                    <p>CREW : <span className="starship-details">{starship.crew}</span></p>
                    <p>PASSANGER CAPACITY : <span className="starship-details">{starship.passengers}</span></p>
                    <p>CARGO CAPACITY : <span className="starship-details">{starship.cargo_capacity} TONS</span></p>
                    <p>CONSUMABLES : <span className="starship-details">{starship.consumables}</span></p>
                    <p>LENGTH : <span className="starship-details">{starship.length} METERS</span></p>
                    <p>MAXIMUM ATMOSPHERING SPEED : <span className="starship-details">{starship.max_atmosphering_speed} KM/H</span></p>
                    <p>HYPERDRIVE RATING : <span className="starship-details">{starship.hyperdrive_rating}</span></p>
                </div>
            </div>
        </div>
    ) : (
        <p className="loading">LOADING...</p>
    );
};

export default StarshipDetails;



