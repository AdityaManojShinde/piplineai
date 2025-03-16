import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./view/HeroSection";
import Features from "./view/Features";
import HowItWorks from "./view/HowItWorks";
import Pricing from "./view/Pricing";
import Testimonials from "./view/Testimonials";
import "./styles/index.css";

function App() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      <Navbar />
      <HeroSection />
      <Features />
      <HowItWorks />
      <Pricing />
      <Testimonials />
    </div>
  );
}

export default App;
