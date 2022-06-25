import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Shortner from "./components/Shortner/Shortner";
import { Url } from "./components/Url/Url";


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Shortner />} />
        <Route path="/:id" element={<Url />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
