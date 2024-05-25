import { useEffect, useState } from "react";
import { REQUEST_HEADERS } from "../../constants";
import { VanCard } from "./VanCard";
import "../../css/ExploreVans.css";
import { useSearchParams } from "react-router-dom";
import { fetchVans } from "../../api/vanApi";
import { CircularLoadingIndicator } from "../../components/CircularLoadingIndicator";

export const ExploreVans = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const [type, setType] = useState(searchParams.get("type"));
  const [vans, setVans] = useState([]);
  const [filteredVans, setFilteredVans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleVanFiltering = (vanType) => {
    if (vanType) {
      setSearchParams((oldSearchParams) => {
        oldSearchParams.set("type", vanType);
        return oldSearchParams;
      });
    } else {
      setSearchParams((oldSearchParams) => {
        oldSearchParams.delete("type");
        return oldSearchParams;
      });
    }
    setType(vanType);
    setFilteredVans(
      vans?.filter((van) => vanType === null || van.type === vanType)
    );
  };

  useEffect(() => {
    async function loadVans() {
        setLoading(true);
        try {
          const data = await fetchVans();
          setVans(data);
        } catch(err) {
          console.log("Some error occured", err);
          setError(err);
        }
        setLoading(false);
    }
    loadVans();
  }, []);

  useEffect(() => {
    handleVanFiltering(type);
  }, [vans, type]);

  if(error) {
    return <h1>There was an error: {error.message}</h1>
  }
  return (
    <div className="explore-vans-page">
      <h1 className="explore-vans--title">Explore our van options</h1>
      <div className="explore-vans--filter-container">
        <button
          className={`explore-vans--filter-btn simple ${
            type === "simple" && "selected"
          }`}
          onClick={() => handleVanFiltering("simple")}
        >
          Simple
        </button>
        <button
          className={`explore-vans--filter-btn luxury ${
            type === "luxury" && "selected"
          }`}
          onClick={() => handleVanFiltering("luxury")}
        >
          Luxury
        </button>
        <button
          className={`explore-vans--filter-btn rugged ${
            type === "rugged" && "selected"
          }`}
          onClick={() => handleVanFiltering("rugged")}
        >
          Rugged
        </button>
        {type && (
          <span
            className="explore-vans--filter-clear"
            onClick={() => handleVanFiltering(null)}
          >
            Clear Filters
          </span>
        )}
      </div>
      {!loading ? <div className="explore-vans--vans-container">
        {filteredVans ?
          filteredVans.map((van) => {
            return (
              <VanCard
                key={van.id}
                id={van.id}
                name={van.name}
                imageUrl={van.imageUrl}
                price={van.price}
                type={van.type}
              />
            );
          }) : <h1>No vans found</h1>}
      </div> : <CircularLoadingIndicator/>}
    </div>
  );
};
