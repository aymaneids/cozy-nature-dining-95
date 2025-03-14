
import React from "react";

const chefs = [
  {
    id: 1,
    name: "Maria Thompson",
    title: "Executive Chef",
    bio: "With over 20 years of culinary experience, Chef Maria brings her passion for local, sustainable ingredients to every dish she creates. Her expertise in combining traditional techniques with modern flavors has earned her recognition throughout the region.",
    image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=2080&auto=format&fit=crop",
    specialties: ["Farm-to-Table Cuisine", "Seasonal Menus", "Artisanal Pasta"]
  },
  {
    id: 2,
    name: "James Rodriguez",
    title: "Pastry Chef",
    bio: "Chef James discovered his love for pastry arts while traveling through Europe. His innovative dessert creations combine French pastry techniques with local flavors and ingredients, creating memorable sweet endings to every meal.",
    image: "https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?q=80&w=2080&auto=format&fit=crop",
    specialties: ["Artisanal Breads", "French Pastries", "Seasonal Desserts"]
  },
  {
    id: 3,
    name: "Samantha Chen",
    title: "Sous Chef",
    bio: "Chef Samantha is passionate about sustainable cooking practices and zero-waste culinary techniques. Her creative approach to using seasonal produce has been instrumental in developing our ever-changing menu.",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=2077&auto=format&fit=crop",
    specialties: ["Vegetable Forward Dishes", "Sustainable Cooking", "Flavor Development"]
  }
];

const Chefs: React.FC = () => {
  return (
    <section id="chefs" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="section-heading">Meet Our Chefs</h2>
          <p className="section-subheading">
            The talented culinary team behind our exceptional dining experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {chefs.map((chef, index) => (
            <div
              key={chef.id}
              className="flex flex-col items-center animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden mb-6 border-4 border-white shadow-md">
                <img
                  src={chef.image}
                  alt={chef.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="text-center">
                <h3 className="font-serif text-2xl font-medium text-nature-800 mb-1">
                  {chef.name}
                </h3>
                <p className="text-accent font-medium mb-4">{chef.title}</p>
                <p className="text-nature-700 mb-6 px-4">
                  {chef.bio}
                </p>
                
                <div className="space-x-2 mb-2">
                  {chef.specialties.map((specialty, i) => (
                    <span
                      key={i}
                      className="inline-block text-xs px-3 py-1 rounded-full bg-cream-100 text-nature-700 mb-2"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <h3 className="font-serif text-2xl font-medium text-nature-800 mb-4">
            Join Our Culinary Team
          </h3>
          <p className="text-nature-700 max-w-2xl mx-auto mb-8">
            Passionate about food and hospitality? We're always looking for talented individuals to join our team. Send your resume and cover letter to careers@cozynature.com.
          </p>
          <a
            href="mailto:careers@cozynature.com"
            className="btn-secondary"
          >
            Explore Career Opportunities
          </a>
        </div>
      </div>
    </section>
  );
};

export default Chefs;
