
import React from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Local Resident",
    content: "The best brunch spot in Forest Park! The atmosphere is so cozy and welcoming, and the food is consistently amazing. The wild mushroom omelette is a must-try.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Michael Thompson",
    role: "Food Blogger",
    content: "A hidden gem with exceptional farm-to-table cuisine. The seasonal menu never disappoints, and the service makes you feel like family. Highly recommend for special occasions.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Emily Chen",
    role: "Regular Customer",
    content: "Been coming here for years and the quality has never wavered. The new seasonal menu items are always exciting, and the staff remembers your preferences.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-warm-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="section-heading">What Our Guests Say</h2>
          <p className="section-subheading">
            Hear from our valued customers about their dining experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl p-6 shadow-sm border border-cream-100 relative animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-nature-200" />
              
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-serif font-medium text-nature-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-nature-600">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <p className="text-nature-700 leading-relaxed">
                {testimonial.content}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="btn-primary"
          >
            Share Your Experience
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
