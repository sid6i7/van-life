import { Outlet } from "react-router-dom"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

import "../App.css";

export const Layout = () => {
    const {isLoggedIn, setIsLoggedIn} = useContext(UserContext);

    return (
        <div className="layout">
            <Navbar isLoggedIn={isLoggedIn}/>
            <Outlet context={[isLoggedIn, setIsLoggedIn]} className="layout--outlet"/>
            <Footer/>
        </div>
    )
}