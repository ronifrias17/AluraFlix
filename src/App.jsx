import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import NuevoVideo from "./Pages/NewVideo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/nuevo-video" element={<NuevoVideo />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
