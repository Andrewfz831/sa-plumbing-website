import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./views/homePage";
import About from "./views/about";
import Services from "./views/services";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/About-SAPlumbing" element={<About />} />
          <Route path="/Services" element={<Services />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
