import { HostVanCard } from "./HostVanCard";
import "../../css/HostVans.css";
import { fetchHostVans } from "../../api/vanApi";
import {useLoaderData} from "react-router-dom";

export const hostVansLoader = async ({params}) => {
  const {hostId} = params;
  const vans = await fetchHostVans(hostId);
  return vans;
}

export const HostVans = () => {
  
  const hostVans = useLoaderData();

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
