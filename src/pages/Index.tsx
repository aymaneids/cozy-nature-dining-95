
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Chefs from "@/components/Chefs";
import Events from "@/components/Events";
import Testimonials from "@/components/Testimonials";
import Reservation from "@/components/Reservation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-cream-50">
      <Navbar transparent />
      <Hero />
      <Menu />
      <About />
      <Gallery />
      <Chefs />
      <Events />
      <Testimonials />
      <Reservation />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
