import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import LovePage from "./components/LovePage";
import LoveLetter from "./components/LoveLetter"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/love-page" element={<LovePage />} />
        <Route path="/love-letter" element={<LoveLetter/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
