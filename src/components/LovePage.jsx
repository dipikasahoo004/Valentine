import { useState, useEffect } from "react";
import "./styles/LovePage.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointDown } from "@fortawesome/free-solid-svg-icons";
import kitty from "./images/kitty.gif"
import { Link } from "react-router-dom";

export default function LovePage() {
    const [countdown, setCountdown] = useState("");
    const [onClick, setClick]=useState(false);

    useEffect(() => {
        function updateCountdown() {
            const startDate = new Date("2021-05-30"); // Relationship start date
            const currentDate = new Date(); // Current date

            // Calculate total difference in milliseconds
            const differenceInMilliseconds = currentDate - startDate;

            // Convert to years, days, hours, minutes, and seconds
            const years = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24 * 365));
            const remainingMillisecondsAfterYears = differenceInMilliseconds % (1000 * 60 * 60 * 24 * 365);

            const days = Math.floor(remainingMillisecondsAfterYears / (1000 * 60 * 60 * 24));
            const hours = Math.floor((remainingMillisecondsAfterYears % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((remainingMillisecondsAfterYears % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((remainingMillisecondsAfterYears % (1000 * 60)) / 1000);

            // Update the state
            setCountdown(`${years} years, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);
        }

        // Update the countdown immediately and every second
        const interval = setInterval(updateCountdown, 1000);
        updateCountdown();

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, []); // Empty dependency array ensures it runs once on mount


    const handleClick=()=>{
        setClick(!onClick);
    }

    return (
        <>
       <div className="top-heading" style={{ textAlign: "center", marginTop: "20px" }}>
            <h2>❤️ Our Relationship Countdown ❤️</h2>
            <div style={{ fontSize: "20px", fontWeight: "bold", color: "#ff7f50", marginTop: "10px" }}>
                {countdown}
            </div>
        </div>

        <div className="heading">
            <h4>3 Years of you and me... but what have you REALLY given me? 😠</h4>
            <h5>Click here to see</h5>
            <FontAwesomeIcon icon={faHandPointDown} className="hand-point" onClick={handleClick}/>
        </div>

        {onClick && (
                <div className="love">
                    <div className="love-page">
                        <h3>Lots and lots of love... and more reasons to smile every day! ❤️</h3>
                        <img src={kitty} alt="love" />
                    </div>

                    <Link to="/love-letter">
                    <div className="loveLetter">Letter</div>
                    </Link>
                    
                </div>
            )}
        
        </>
    );
}
