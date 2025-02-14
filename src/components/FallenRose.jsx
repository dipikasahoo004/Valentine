import "./styles/FallenRose.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function FallenRose(){
    return (
        <>
        <div className="fallen-petals">
        <div className="petal-one petals" style={{animationDelay:"1s"}}><FontAwesomeIcon icon={faHeart} style={{ fontSize: "24px", color: "red" }} /></div>
        <div className="petal-one petals" style={{animationDelay:"1s"}}><FontAwesomeIcon icon={faHeart} style={{ fontSize: "24px", color: "red" }} /></div>
        <div className="petal-one petals" style={{animationDelay:"2s"}}><FontAwesomeIcon icon={faHeart} style={{ fontSize: "24px", color: "red" }} /></div>
        <div className="petal-one petals" style={{animationDelay:"1s"}}><FontAwesomeIcon icon={faHeart} style={{ fontSize: "24px", color: "red" }} /></div>
        <div className="petal-one petals" style={{animationDelay:"2s"}}><FontAwesomeIcon icon={faHeart} style={{ fontSize: "24px", color: "red" }} /></div>
        <div className="petal-one petals" style={{animationDelay:"2s"}}><FontAwesomeIcon icon={faHeart} style={{ fontSize: "24px", color: "red" }} /></div>
        <div className="petal-one petals" style={{animationDelay:"1s"}}><FontAwesomeIcon icon={faHeart} style={{ fontSize: "24px", color: "red" }} /></div>
        </div>
        </>
    )
}