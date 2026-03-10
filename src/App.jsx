import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Map from "./components/Map";
import Zoos from "./components/Zoos";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div className="flex flex-col h-dvh">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<Map />} />
          <Route path="/zoos" element={<Zoos />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
