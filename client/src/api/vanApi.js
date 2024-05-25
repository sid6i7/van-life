import { REQUEST_HEADERS } from "../constants";

export const fetchVans = async () => {
  const url = process.env.REACT_APP_GET_VANS_ENDPOINT;
  if (!url) {
    throw new Error("Could not retrive get vans endpoint");
  }
  let response;
  try {
    response = await fetch(url, {
      headers: REQUEST_HEADERS,
    });
    if (response.ok) {
      const responseData = await response.json();
      // console.log(responseData);
      return responseData;
    }
  } catch(err) {
    throw err;
  }
};

export const fetchVan = async (id) => {
  if (!id) {
      throw new Error("Unable to retrieve ID");
  }
  try {
      const endpoint = process.env.REACT_APP_GET_VANS_ENDPOINT;
      const response = await fetch(`${endpoint}/${id}`);
      if (response.ok) {
          const vanData = await response.json();
          // console.log(vanData);
          return vanData;
      }
  } catch (err) {
      console.log("Some error occured", err);
      throw err;
  }
};

export const fetchHostVans = async (hostId) => {
  const url = process.env.REACT_APP_HOST_VANS_ENDPOINT;
  try {
    const response = await fetch(`${url}/${hostId}`, {
      headers: REQUEST_HEADERS,
    });
    if (response.ok) {
      const vans = await response.json();
      if (!vans || vans.length === 0) {
        throw new Error(`No vans found for host with ID ${hostId}`);
      }
      return vans;
    }
  } catch (err) {
    console.log("Some error occured", err);
    throw err;
  }
};
