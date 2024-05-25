import { Outlet } from "react-router-dom"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"
import "../App.css";

export const Layout = () => {
    return (
        <div className="layout">
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}