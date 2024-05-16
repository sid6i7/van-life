import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import css from "../css/About.css";
import manImg from "../images/about_img.jpg";

export const About = () => {
  return (
    <div className="aboutpage">
       
      <img src={manImg} className="aboutpage--img" />
      <div className="aboutpage--body">
        <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
        <div className="aboutpage--explore">
          <h2>
            Your destination is waiting. <br />
            Your van is ready.
          </h2>
          <button>
            Explore our vans
          </button>
        </div>
      </div>
     
    </div>
  );
};
