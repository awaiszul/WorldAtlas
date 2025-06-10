import { FaLongArrowAltRight } from "react-icons/fa";
import Images from '../Images/img.jpg';
import "./Home.css"
import { About } from "./About";
export const Home = ()=>{
     return (
      <>
    <section className="hero">
      <div className="main">

      <div className="hero-left">
        <h1>Explore the World with WorldAtlas</h1>
        <p>Discover hidden gems, famous landmarks, and cultural stories from every continent.</p>
        <button className="transparent-btn black">Get Started <FaLongArrowAltRight/> </button>
      </div>
      <div className="hero-right">
        <img src={Images} alt="World Exploration" />
      </div>
      </div>
    </section>
    <About/>
    </>
  );
}