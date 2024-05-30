import { Suspense, useEffect, useState } from "react";
import { VanCard } from "./VanCard";
import "../../css/ExploreVans.css";
import { useSearchParams, useLoaderData, defer, Await } from "react-router-dom";
import { fetchVans } from "../../api/vanApi";
import { CircularLoadingIndicator } from "../../components/CircularLoadingIndicator";

export const vanLoader = async () => {
  try {
    const dataPromise = fetchVans();
    return defer({
      vans: dataPromise,
    });
  } catch (error) {
    return { error: error.message };
  }
};

export const ExploreVans = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [type, setType] = useState(searchParams.get("type"));
  const [error, setError] = useState(null);
  const loaderData = useLoaderData();

  useEffect(() => {
    setType(searchParams.get("type"));
  }, [searchParams]);

  if (loaderData.error) {
    return <h1>There was an error: {loaderData.error}</h1>;
  }

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
  };

  function renderVans(vans) {
    const filteredVans = vans?.filter((van) => type === null || van.type === type);

    return (
      <div className="explore-vans-page">
        <h1 className="explore-vans--title">Explore our van options</h1>
        <div className="explore-vans--filter-container">
          <button
            className={`explore-vans--filter-btn simple ${type === "simple" && "selected"
              }`}
            onClick={() => handleVanFiltering("simple")}
          >
            Simple
          </button>
          <button
            className={`explore-vans--filter-btn luxury ${type === "luxury" && "selected"
              }`}
            onClick={() => handleVanFiltering("luxury")}
          >
            Luxury
          </button>
          <button
            className={`explore-vans--filter-btn rugged ${type === "rugged" && "selected"
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
        <div className="explore-vans--vans-container">
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
        </div>
      </div>
    )
  }

  return (
    <Suspense fallback={<CircularLoadingIndicator/>}>
      <Await resolve={loaderData.vans}>
        {renderVans}
      </Await>
    </Suspense>
  );
};
