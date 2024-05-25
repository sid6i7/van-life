import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import css from "../css/Home.css";
import bg from "../images/home_bg.jpg";

export const Home = () => {
    return (
        <div className="homepage">
            
            <img className="homepage--bg" src={bg}/>
            <h1 className="homepage--title">
            You got the travel plans, we got the travel vans.
            </h1>
            <h3 className="homepage--subtitle">
            Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.
            </h3>
            <Link to="vans">
                <button className="homepage--btn">Find your van</button>
            </Link>
            {}
        </div>
    )
}