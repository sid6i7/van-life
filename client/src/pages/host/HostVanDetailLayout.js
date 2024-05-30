import React, { Suspense } from "react";
import { Await, defer, NavLink, Outlet, useLoaderData } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../../css/host/HostVanDetailLayout.css";
import { HostVanDetailShared } from "./HostVanDetailShared";
import { HostVanDetailNavBar } from "./HostVanDetailNavBar";
import { fetchVan } from "../../api/vanApi";
import { requireAuth } from "../../utils/auth";
import { CircularLoadingIndicator } from "../../components/CircularLoadingIndicator";

export const hostVanDetailLoader = async ({params, request}) => {
  requireAuth(request);
  const {vanId} = params;
  return defer({
    vanData: fetchVan(vanId)
  });
}

export const HostVanDetailLayout = () => {
  
  const loaderData = useLoaderData();
  const {vanId} = useParams();

  function renderVan(hostVan) {
    return (
      <div className="host-van-detail-layout">
        {hostVan && <HostVanDetailShared hostVan={hostVan} />}
        <HostVanDetailNavBar vanId={vanId} />
        <div className="host-van-detail--outlet">
          {hostVan && <Outlet context={[hostVan]} />}
        </div>
      </div>
    );
  };
  
  return (
    <div className="host-van-detail-layout--container">
      <div className="van-detail--back-btn">
        <NavLink to={".."} relative="path">🡨 Back to all vans</NavLink>
      </div>
      <Suspense fallback={<CircularLoadingIndicator/>}>
        <Await resolve={loaderData.vanData}>
          {renderVan}
        </Await>
      </Suspense>
    </div>
  );
};
