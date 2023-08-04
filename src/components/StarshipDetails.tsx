import { useEffect, useState } from "react";

interface Starship {
  url: string;
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
  hyperdrive_rating: string;
  MGLT: string;
}

interface StarshipDetailsProps {
  selectedStarship: Starship;
}

export function StarshipDetails({ selectedStarship }: StarshipDetailsProps) {
  const [image, setImage] = useState<string>('');

  useEffect(() => {
    const imageId = selectedStarship.url.slice(32, -1);
    setImage(`https://starwars-visualguide.com/assets/img/starships/${imageId}.jpg`);
  }, [selectedStarship.url]);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = `./src/assets/img/imageNotFound404.jpg`;
  };

  return (
    <div className="starshipDetailCard">
      <div>
        <img className="starshipImage" src={image} alt={selectedStarship.name + ' image'} onError={handleImageError}></img>
      </div>
      <div>
        <ul>
          <li><span className="starshipDetails">Model: </span>{selectedStarship.model}</li>
          <li><span className="starshipDetails">Starship Class: </span>{selectedStarship.starship_class}</li>
          <li><span className="starshipDetails">Manufacturer: </span>{selectedStarship.manufacturer}</li>
          <li><span className="starshipDetails">Cost: </span>{selectedStarship.cost_in_credits} credits</li>
          <li><span className="starshipDetails">Crew: </span>{selectedStarship.crew}</li>
          <li><span className="starshipDetails">Passengers Capacity: </span>{selectedStarship.passengers}</li>
          <li><span className="starshipDetails">Cargo Capacity: </span>{selectedStarship.cargo_capacity}</li>
          <li><span className="starshipDetails">Consumables: </span>{selectedStarship.consumables}</li>
          <li><span className="starshipDetails">Length: </span>{selectedStarship.length} meters</li>
          <li><span className="starshipDetails">Hyperdrive rating: </span>{selectedStarship.hyperdrive_rating}</li>
          <li><span className="starshipDetails">Maximum Speed in Realspace: </span>{selectedStarship.MGLT} MGLT</li>
        </ul>
      </div>
    </div>
  )
}
