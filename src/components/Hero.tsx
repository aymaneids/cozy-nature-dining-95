
import React from "react";
import { ArrowDown } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="inline-block px-3 py-1 rounded-full border border-cream-300/50 text-cream-100 mb-6 backdrop-blur-sm">
            Established 1981
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-white mb-6 text-balance">
            A Rustic Dining Experience in
            <span className="text-secondary"> Forest Park</span>
          </h1>
          <p className="text-lg md:text-xl text-cream-100 mb-8 max-w-xl">
            Enjoy locally-sourced ingredients in a warm, inviting atmosphere
            surrounded by nature's beauty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#menu" className="btn-primary">
              View Our Menu
            </a>
            <a href="#reservation" className="btn-secondary bg-white/10 text-white hover:bg-white/20">
              Make a Reservation
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <a href="#menu" className="flex flex-col items-center opacity-80 hover:opacity-100 transition-opacity">
          <span className="mb-2 text-sm font-medium">Scroll Down</span>
          <ArrowDown className="h-5 w-5" />
        </a>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 right-10 w-24 h-24 rounded-full bg-nature-500/10 backdrop-blur-md animate-spin-slow"></div>
      <div className="absolute bottom-1/3 left-10 w-16 h-16 rounded-full bg-warm-500/10 backdrop-blur-md animate-spin-slow" style={{ animationDelay: "2s" }}></div>
    </section>
  );
};

export default Hero;
