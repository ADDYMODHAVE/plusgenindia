import logo from "./logo.svg";
import "./App.css";

import Navbar from "./Components/Header";
import Invitation from "./Components/Invitation";
import ScrollingImages from "./Components/ScrollBar";
import AboutUs from "./Components/AboutUs";
import MedicalProducts from "./Components/MedicalProducts";
import Services from "./Components/Services";
import BannerAndCatalogue from "./Components/BannerAndCatlog";
import TestimonialSection from "./Components/Testimonial";
import Footer from "./Components/Footer";
import ContactForm from "./Components/ContactForm";
import { Container } from "@mui/material";

function App() {
  return (
    <>
      <Navbar />
      <Invitation />
      <ScrollingImages />
      <AboutUs />
      <MedicalProducts />
      <Services />
      <BannerAndCatalogue />
      <TestimonialSection />
      <ContactForm />
      <Footer />

    </>
  );
}

export default App;
