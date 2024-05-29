import React, { useEffect, useState } from "react";
import { getUser } from "../../api/userApi";
import { CgProfile } from "react-icons/cg";
import { CircularLoadingIndicator } from "../../components/CircularLoadingIndicator";
import "../../css/user/Profile.css";
import { removeToken } from "../../utils/auth";
import { Navigate, redirect, useLoaderData } from "react-router-dom";

export const profileLoader = async () => {
  const userData = await getUser();
  if (!userData) {
    throw redirect("/login");
  }
  return userData;
};

export const Profile = () => {
  const user = useLoaderData();

  const handleSignOut = () => {
    removeToken();
  };

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
