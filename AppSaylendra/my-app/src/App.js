import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Education from "./pages/Education";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
