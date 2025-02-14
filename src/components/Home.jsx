import "./styles/Home.css";
import FallenRose from "./FallenRose";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import LovePage from "./LovePage";

export default function Home() {
  return (
    <>
      <FallenRose />
      <div className="container">
      <Link to="/love-page">
      <div className="explore">
      Our Journey &nbsp; <FontAwesomeIcon icon={faHeart} style={{color:"red"}}/>
      </div>
      </Link>
      </div>
      <LovePage/>
    </>
  );
}
