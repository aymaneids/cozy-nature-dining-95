
import React from "react";
import { Calendar, Clock, Users } from "lucide-react";

const upcomingEvents = [
  {
    id: 1,
    title: "Farm-to-Table Dinner",
    date: "June 25, 2024",
    time: "6:30 PM - 9:30 PM",
    description: "Join us for a special dining experience featuring a 5-course tasting menu created from ingredients sourced within 30 miles of our restaurant.",
    capacity: "Limited to 40 guests",
    price: "$85 per person",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Wine Tasting & Pairing",
    date: "July 15, 2024",
    time: "7:00 PM - 9:00 PM",
    description: "Sample a variety of organic wines paired with specially created small plates that highlight the unique flavors of each selection.",
    capacity: "Limited to 30 guests",
    price: "$65 per person",
    image: "https://images.unsplash.com/photo-1567072379-fde61129fc31?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Cooking Class with Chef Maria",
    date: "August 5, 2024",
    time: "4:00 PM - 7:00 PM",
    description: "Learn how to prepare three signature dishes from our menu with our head chef. Includes dinner and wine pairing after the class.",
    capacity: "Limited to 15 guests",
    price: "$95 per person",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop"
  }
];

const Events: React.FC = () => {
  return (
    <section id="events" className="py-20 bg-nature-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="section-heading">Special Events</h2>
          <p className="section-subheading">
            Join us for unique culinary experiences throughout the year
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => (
            <div
              key={event.id}
              className="bg-white rounded-xl overflow-hidden shadow-md border border-cream-100 transition-transform hover:shadow-lg hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-medium text-nature-800 mb-2">
                  {event.title}
                </h3>
                
                <div className="flex items-center mb-2 text-nature-600">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-sm">{event.date}</span>
                </div>
                
                <div className="flex items-center mb-2 text-nature-600">
                  <Clock className="h-4 w-4 mr-2" />
                  <span className="text-sm">{event.time}</span>
                </div>
                
                <div className="flex items-center mb-4 text-nature-600">
                  <Users className="h-4 w-4 mr-2" />
                  <span className="text-sm">{event.capacity}</span>
                </div>
                
                <p className="text-nature-700 mb-4">{event.description}</p>
                
                <div className="flex justify-between items-center">
                  <span className="font-medium text-accent">{event.price}</span>
                  <a
                    href="#contact"
                    className="text-sm px-4 py-2 rounded-full bg-nature-100 text-nature-800 hover:bg-nature-200 transition-colors"
                  >
                    Reserve Spot
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-cream-100 rounded-lg p-8 border border-cream-200 animate-fade-in">
          <div className="text-center mb-6">
            <h3 className="font-serif text-2xl font-medium text-nature-800">
              Private Events
            </h3>
            <p className="text-nature-600 mt-2">
              Looking to host a special celebration or corporate gathering?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-nature-700 mb-4">
                Our private dining area can accommodate groups of up to 30 people in an intimate setting, perfect for:
              </p>
              <ul className="space-y-2 text-nature-700">
                <li className="flex items-start">
                  <span className="inline-block h-5 w-5 bg-nature-100 rounded-full text-nature-600 flex items-center justify-center mr-2 mt-0.5">✓</span>
                  Birthday celebrations and anniversaries
                </li>
                <li className="flex items-start">
                  <span className="inline-block h-5 w-5 bg-nature-100 rounded-full text-nature-600 flex items-center justify-center mr-2 mt-0.5">✓</span>
                  Corporate lunches and dinners
                </li>
                <li className="flex items-start">
                  <span className="inline-block h-5 w-5 bg-nature-100 rounded-full text-nature-600 flex items-center justify-center mr-2 mt-0.5">✓</span>
                  Wedding rehearsal dinners
                </li>
                <li className="flex items-start">
                  <span className="inline-block h-5 w-5 bg-nature-100 rounded-full text-nature-600 flex items-center justify-center mr-2 mt-0.5">✓</span>
                  Family gatherings and reunions
                </li>
              </ul>
              <div className="mt-6">
                <a href="#contact" className="btn-primary">
                  Inquire About Private Events
                </a>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1529516548240-9d7173c0123e?q=80&w=1974&auto=format&fit=crop"
                alt="Private dining area"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
