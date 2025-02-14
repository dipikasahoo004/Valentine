import { useState } from "react";
import "./styles/LoveLetter.css";

export default function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <div className="love-letter">
      <div className={`envelope ${isOpen ? "open" : ""}`}>
        {!isOpen && (
          <div className="heart-button" onClick={handleOpen}>
            ❤️
          </div>
        )}
        {isOpen && (
          <div className="letter-box">
            <h2>You are the best</h2>
            
          </div>
        )}
      </div>
    </div>
  );
}
