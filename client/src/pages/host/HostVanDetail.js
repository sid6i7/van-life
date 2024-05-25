import React, { useEffect, useState } from "react";
import {useOutletContext} from 'react-router-dom';

export const HostVanDetail = (props) => {
  const [hostVan, setHostVan] = useOutletContext();

  return (
    <div>
      <p><b>Name: </b>{hostVan.name}</p>
      <p><b>Category: </b>{hostVan.type}</p>
      <p><b>Description: </b>{hostVan.description}</p>
      <p><b>Visibility: </b>Public</p>
    </div>
  )
};
