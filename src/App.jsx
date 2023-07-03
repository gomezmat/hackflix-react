import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/pages/Home/Home";
import MovieDetails from "./components/pages/MovieDetails/MovieDetails";
import Error404 from "./components/pages/Error/Error404";
import Navbar from "./components/Navbar/Navbar";
import AboutUs from "./components/pages/AboutUs/AboutUs";
import Contact from "./components/pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import MovieRedirect from "./components/MovieRedirect/MovieRedirect";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/pelicula/:id" element={<MovieRedirect />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
