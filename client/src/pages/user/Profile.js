import React, { useState, useContext } from "react";
import { getUser } from "../../api/userApi";
import { CgProfile } from "react-icons/cg";
import "../../css/user/Profile.css";
import { removeToken, requireAuth } from "../../utils/auth";
import { Navigate, useLoaderData, useOutletContext } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

export const profileLoader = async ({ request }) => {
  requireAuth(request);
  console.log(request);
  const userData = await getUser();
  return userData;
};

export const Profile = () => {
  const user = useLoaderData();
  const [isLoggedIn, setIsLoggedIn] = useOutletContext();

  const handleSignOut = () => {
    removeToken();
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return <Navigate to={"/login"} />
  }

  return (
    <div className="profile">
      <div className="profile--container">
        <CgProfile size={"100px"} />
        <hr />
        <h1>{user.name}</h1>
        <p> {user.email}</p>
      </div>
      <button className="profile--sign-out-btn" onClick={handleSignOut}>
        Sign Out
      </button>
    </div>
  );
};
