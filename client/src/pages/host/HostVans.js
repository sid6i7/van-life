import { Suspense } from "react";
import { HostVanCard } from "./HostVanCard";
import "../../css/HostVans.css";
import { fetchHostVans } from "../../api/vanApi";
import { defer, useLoaderData, Await } from "react-router-dom";
import { requireAuth } from "../../utils/auth";
import { CircularLoadingIndicator } from "../../components/CircularLoadingIndicator";

export const hostVansLoader = ({ request, params }) => {
  requireAuth(request);
  const { hostId } = params;
  return defer({
    hostVans: fetchHostVans(hostId)
  });
}

export const HostVans = () => {

  const loaderData = useLoaderData();

  function renderHostVans(hostVans) {
    return hostVans.map((van) => {
      return (
        <HostVanCard
          key={van.id}
          id={van.id}
          name={van.name}
          price={van.price}
          imgUrl={van.imageUrl}
        />
      );
    })
  }

  return (
    <div className="host-vans">
      <h1 className="host-vans--title">Your listed vans</h1>
      <div className="host-vans--container">
        <Suspense fallback={<CircularLoadingIndicator />}>
          <Await resolve={loaderData.hostVans}>
            {renderHostVans}
          </Await>
        </Suspense>
      </div>
    </div>
  );
};
