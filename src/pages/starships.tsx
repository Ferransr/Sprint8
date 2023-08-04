import { useEffect, useState, useCallback } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import InfiniteScroll from "react-infinite-scroll-component";
import { StarshipDetails } from '../components/StarshipDetails';

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

function Starships() {
  const [starships, setStarships] = useState<Starship[]>([]);
  const [selectedStarship, setSelectedStarship] = useState<Starship>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [loadingComplete, setLoadingComplete] = useState<boolean>(false);

  const fetchAPI= useCallback(async(pageNumber: number) => {
    const res = await axios.get('https://swapi.dev/api/starships/', {
      params: {
        page: pageNumber,
      },
    });
    return res.data;
  }, []);

  const getStarships = useCallback(async(pageNumber: number) => {
    const data = await fetchAPI(pageNumber);
    setStarships(prevStarships => [...prevStarships, ...data.results]);
    setHasMore(data.next !== null);
  }, [fetchAPI]);

  const getMoreShips = useCallback(async() => {
    setLoadingComplete(false);
    const newPage = pageNumber + 1;
    setPageNumber(newPage);
  }, [pageNumber]);

  const handleStarshipClick = useCallback((starship: Starship) => {
    if (selectedStarship && selectedStarship.name === starship.name) {
      setSelectedStarship(undefined);
    } else {
      setSelectedStarship(starship);
    }
  }, [selectedStarship]);

  useEffect(() => {
    getStarships(pageNumber);
    setLoadingComplete(false);
  }, [pageNumber, getStarships])
  
  return (
    <>
      <Navbar />
      <InfiniteScroll
        dataLength={starships.length}
        hasMore={hasMore}
        next={getMoreShips}
        loader={loadingComplete}>

          <div className='starships-container'>
            { starships.length === 0 && <div className='loading'>Loading...</div> }
            {starships?.map((starship, index) => (
              <div key={index} className='starshipContainerCard' onClick={() => handleStarshipClick(starship)}>
                <div>
                  <a className='starshipName'>{starship.name.toUpperCase()}</a>
                </div>
                <div className='starshipModel'>{starship.model}</div>
                {selectedStarship && selectedStarship.name === starship.name && <StarshipDetails selectedStarship={selectedStarship} />}
              </div>
            ))}
            {!hasMore && <div className='loadingComplete'>All ships have loaded successfully!</div>}
          </div>
      </InfiniteScroll>
    </>
  );
}

export default Starships;
