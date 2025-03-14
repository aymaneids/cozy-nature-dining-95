
import React from "react";
import { Clock, MapPin, Award } from "lucide-react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="section-heading">Our Story</h2>
          <p className="section-subheading">
            Since 1981, we've been serving our community with love and dedication
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4 relative animate-fade-in">
            <div className="aspect-[4/5] relative overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1616669894715-d609c7d44009?q=80&w=2070&auto=format&fit=crop"
                alt="Restaurant interior"
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
              />
            </div>
            <div className="aspect-[4/5] relative overflow-hidden rounded-lg mt-8">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
                alt="Dining area"
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
              />
            </div>
            <div className="aspect-[4/5] relative overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1482275548304-a58859dc31b7?q=80&w=1974&auto=format&fit=crop"
                alt="Chef preparing food"
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
              />
            </div>
            <div className="aspect-[4/5] relative overflow-hidden rounded-lg mt-8">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop"
                alt="Restaurant food"
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -z-10 w-full h-full bg-nature-100 rounded-lg transform translate-x-4 translate-y-4"></div>
          </div>

          {/* Content */}
          <div className="space-y-8 lg:pl-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="prose max-w-none space-y-6">
              <p className="text-lg text-nature-800 leading-relaxed">
                Welcome to Cozy Nature Dining, where culinary artistry meets the natural beauty of Forest Park. Since our establishment in 1981, we've been dedicated to creating memorable dining experiences that celebrate local ingredients and warm hospitality.
              </p>
              <p className="text-lg text-nature-800 leading-relaxed">
                Our kitchen is led by Chef Maria Thompson, whose passion for seasonal ingredients and traditional cooking methods has earned us recognition throughout the region. We work closely with local farmers and producers to bring you the freshest ingredients possible.
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              <div className="p-6 rounded-lg bg-cream-50 border border-cream-100">
                <Clock className="h-8 w-8 text-nature-600 mb-3" />
                <h3 className="font-serif text-lg font-medium mb-2">Hours</h3>
                <p className="text-nature-600">
                  Tue-Sun: 8am - 9pm
                  <br />
                  Mon: Closed
                </p>
              </div>

              <div className="p-6 rounded-lg bg-cream-50 border border-cream-100">
                <MapPin className="h-8 w-8 text-nature-600 mb-3" />
                <h3 className="font-serif text-lg font-medium mb-2">Location</h3>
                <p className="text-nature-600">
                  123 Forest Avenue
                  <br />
                  Forest Park, OR
                </p>
              </div>

              <div className="p-6 rounded-lg bg-cream-50 border border-cream-100">
                <Award className="h-8 w-8 text-nature-600 mb-3" />
                <h3 className="font-serif text-lg font-medium mb-2">Recognition</h3>
                <p className="text-nature-600">
                  Best Local Restaurant
                  <br />
                  2023
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
