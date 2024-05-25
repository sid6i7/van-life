import React from "react";
import { VanType } from "../../components/VanType";
import "../../css/host/HostVanDetailShared.css";
import { NavLink } from "react-router-dom";

export const HostVanDetailShared = ({ hostVan }) => {
  return (
    <div className="host-van-detail-shared">
      
      <div className="host-van-detail--container">
        <img src={hostVan.imageUrl} />
        <div className="basic--info">
          <VanType type={hostVan.type} />
          <h3>{hostVan.name}</h3>
          <h4>{`$${hostVan.price}/day`}</h4>
        </div>
      </div>
    </div>
  );
};
