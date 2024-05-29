import React from "react";
import { NavLink, Outlet, useLoaderData } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../../css/host/HostVanDetailLayout.css";
import { HostVanDetailShared } from "./HostVanDetailShared";
import { HostVanDetailNavBar } from "./HostVanDetailNavBar";
import { fetchVan } from "../../api/vanApi";

export const hostVanDetailLoader = async ({params}) => {
  const {vanId} = params;
  const vanData = await fetchVan(vanId);
  return vanData;
}

export const HostVanDetailLayout = () => {
  
  const hostVan = useLoaderData();
  const {vanId} = useParams();
  
  return (
    <div className="host-van-detail-layout--container">
      <div className="van-detail--back-btn">
        <NavLink to={".."} relative="path">🡨 Back to all vans</NavLink>
      </div>
      <div className="host-van-detail-layout">
        {hostVan && <HostVanDetailShared hostVan={hostVan} />}
        <HostVanDetailNavBar vanId={vanId} />
        <div className="host-van-detail--outlet">
          {hostVan && <Outlet context={[hostVan]} />}
        </div>
      </div>
    </div>
  );
};
