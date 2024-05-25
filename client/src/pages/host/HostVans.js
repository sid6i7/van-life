import React, { useEffect, useState } from "react";
import { REQUEST_HEADERS } from "../../constants";
import { HostVanCard } from "./HostVanCard";
import "../../css/HostVans.css";
import { fetchHostVans } from "../../api/vanApi";
import { CircularLoadingIndicator } from "../../components/CircularLoadingIndicator";

export const HostVans = () => {
  const [hostVans, setHostVans] = useState([]);
  const [hostId, setHostId] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHostVanData = async () => {
      setLoading(true);
      const vans = await fetchHostVans(hostId);
      setHostVans(vans);
    }
    try {
      fetchHostVanData();
    } catch(err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [hostId]);

  if (loading) {
    return <CircularLoadingIndicator/>
  }

  if (error) {
    return <h1>Could not fetch vans, try refreshing</h1>
  }

  return (
    <div className="host-vans">
      <h1 className="host-vans--title">Your listed vans</h1>
      <div className="host-vans--container">
        {hostVans.map((van) => {
          return (
            <HostVanCard
              key={van.id}
              id={van.id}
              name={van.name}
              price={van.price}
              imgUrl={van.imageUrl}
            />
          );
        })}
      </div>
    </div>
  );
};
