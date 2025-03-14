
import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-cream-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="section-heading">Contact & Reservations</h2>
          <p className="section-subheading">
            Make a reservation or get in touch with us
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="font-serif text-2xl font-medium mb-6 text-nature-800">
                Get in Touch
              </h3>
              <div className="space-y-4">
                <a
                  href="tel:+1234567890"
                  className="flex items-center space-x-4 text-nature-700 hover:text-nature-900 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <span>(123) 456-7890</span>
                </a>
                <a
                  href="mailto:info@cozynature.com"
                  className="flex items-center space-x-4 text-nature-700 hover:text-nature-900 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span>info@cozynature.com</span>
                </a>
                <div className="flex items-center space-x-4 text-nature-700">
                  <MapPin className="h-5 w-5" />
                  <span>123 Forest Avenue, Forest Park, OR</span>
                </div>
                <div className="flex items-center space-x-4 text-nature-700">
                  <Clock className="h-5 w-5" />
                  <div>
                    <p>Tuesday - Sunday: 8:00 AM - 9:00 PM</p>
                    <p>Monday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <iframe
                title="Restaurant Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.1107966862396!2d-122.7505!3d45.5155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDMwJzU1LjgiTiAxMjLCsDQ1JzAxLjgiVw!5e0!3m2!1sen!2sus!4v1620841264937!5m2!1sen!2sus"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Reservation Form */}
          <div className="bg-white rounded-xl p-8 border border-cream-100 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="font-serif text-2xl font-medium mb-6 text-nature-800">
              Make a Reservation
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-nature-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-cream-200 focus:ring-2 focus:ring-nature-500/20 focus:border-nature-500 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-nature-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-cream-200 focus:ring-2 focus:ring-nature-500/20 focus:border-nature-500 transition-colors"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-nature-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-cream-200 focus:ring-2 focus:ring-nature-500/20 focus:border-nature-500 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-nature-700 mb-2">
                    Number of Guests
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-cream-200 focus:ring-2 focus:ring-nature-500/20 focus:border-nature-500 transition-colors"
                    required
                  >
                    <option value="">Select</option>
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5">5 People</option>
                    <option value="6">6 People</option>
                    <option value="7+">7+ People</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-nature-700 mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-cream-200 focus:ring-2 focus:ring-nature-500/20 focus:border-nature-500 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-nature-700 mb-2">
                    Time
                  </label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-cream-200 focus:ring-2 focus:ring-nature-500/20 focus:border-nature-500 transition-colors"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-nature-700 mb-2">
                  Special Requests
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-cream-200 focus:ring-2 focus:ring-nature-500/20 focus:border-nature-500 transition-colors"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-primary"
              >
                Request Reservation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
