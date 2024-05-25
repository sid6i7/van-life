import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import { REQUEST_HEADERS } from "../../constants";
import "../../css/host/HostVanDetailLayout.css";
import { HostVanDetailShared } from "./HostVanDetailShared";
import { HostVanDetailNavBar } from "./HostVanDetailNavBar";
import { fetchVan } from "../../api/vanApi";
import { CircularLoadingIndicator } from "../../components/CircularLoadingIndicator";

export const HostVanDetailLayout = () => {
  const [hostVan, setHostVan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { vanId } = useParams();

  useEffect(() => {
    const fetchVanData = async () => {
      setLoading(true);
      const vanData = await fetchVan(vanId);
      setHostVan(vanData);
    }
    try {
      fetchVanData();
    } catch (err) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [vanId]);

  if(loading) {
    return <CircularLoadingIndicator/>
  }

  if (error) {
    <h1>Could not fetch van, try refreshing</h1>
  }
  
  return (
    <div className="host-van-detail-layout--container">
      <div className="van-detail--back-btn">
        <NavLink to={".."} relative="path">🡨 Back to all vans</NavLink>
      </div>
      <div className="host-van-detail-layout">
        {hostVan && <HostVanDetailShared hostVan={hostVan} />}
        <HostVanDetailNavBar vanId={vanId} />
        <div className="host-van-detail--outlet">
          {hostVan && <Outlet context={[hostVan, setHostVan]} />}
        </div>
      </div>
    </div>
  );
};
