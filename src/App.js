import "./App.css";
//import FooterComponent from "./components/FooterComponent.tsx";
import InputFields from "./components/InputFields.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage.tsx";
//import HeaderComponent from "./components/HeaderComponent.tsx";

function App() {
  return (
    <>
      
       {/* <InputFields/> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
          {/* <Route index element={<LandingPage />} /> */}
          <Route path="home" element={ <InputFields/>} />
          {/* <Route path="*" element={<NoPage />} /> */}
      
      </Routes>
    </BrowserRouter>
       
    </>
  );
}

export default App;
