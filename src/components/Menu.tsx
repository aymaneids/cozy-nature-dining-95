
import React, { useState } from "react";
import { cn } from "@/lib/utils";

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  tag?: string;
  image?: string;
};

type MenuCategory = {
  id: string;
  name: string;
};

const Menu: React.FC = () => {
  const categories: MenuCategory[] = [
    { id: "breakfast", name: "Breakfast" },
    { id: "lunch", name: "Lunch" },
    { id: "desserts", name: "Desserts" },
    { id: "drinks", name: "Drinks" },
  ];

  const [activeCategory, setActiveCategory] = useState("breakfast");

  const menuItems: MenuItem[] = [
    // Breakfast
    {
      id: 1,
      name: "Forest Park Breakfast",
      description: "Two eggs any style with sourdough toast, roasted potatoes, and your choice of bacon or sausage",
      price: "$14",
      category: "breakfast",
      tag: "Popular",
      image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Wild Mushroom Omelette",
      description: "Three egg omelette with seasonal wild mushrooms, goat cheese, and fresh herbs",
      price: "$16",
      category: "breakfast",
      image: "https://images.unsplash.com/photo-1510693206972-df098062cb71?q=80&w=2098&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Berry & Granola Parfait",
      description: "Housemade granola layered with Greek yogurt and seasonal berries, drizzled with local honey",
      price: "$12",
      category: "breakfast",
      tag: "Vegetarian",
      image: "https://images.unsplash.com/photo-1620806641532-9c1674232c91?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 4,
      name: "Buttermilk Pancakes",
      description: "Stack of fluffy pancakes served with maple syrup and whipped butter",
      price: "$13",
      category: "breakfast",
      image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?q=80&w=2070&auto=format&fit=crop"
    },
    
    // Lunch
    {
      id: 5,
      name: "Garden Harvest Salad",
      description: "Mixed greens with seasonal vegetables, toasted nuts, and herb vinaigrette",
      price: "$14",
      category: "lunch",
      tag: "Vegan",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 6,
      name: "Smoked Salmon Sandwich",
      description: "House-smoked salmon with dill cream cheese, capers, and red onion on a toasted bagel",
      price: "$16",
      category: "lunch",
      tag: "Signature",
      image: "https://images.unsplash.com/photo-1485451456034-3f9391c6f769?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 7,
      name: "Rustic Burger",
      description: "Grass-fed beef patty with aged cheddar, caramelized onions, and special sauce on a brioche bun",
      price: "$18",
      category: "lunch",
      image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?q=80&w=1964&auto=format&fit=crop"
    },
    {
      id: 8,
      name: "Seasonal Vegetable Quiche",
      description: "Flaky pastry filled with seasonal vegetables and local cheese, served with side salad",
      price: "$15",
      category: "lunch",
      tag: "Vegetarian",
      image: "https://images.unsplash.com/photo-1559717201-2879521284f4?q=80&w=2071&auto=format&fit=crop"
    },
    
    // Desserts
    {
      id: 9,
      name: "Apple Cinnamon Tart",
      description: "Warm apple tart with cinnamon streusel and vanilla bean ice cream",
      price: "$10",
      category: "desserts",
      image: "https://images.unsplash.com/photo-1553786803-ad9437d53040?q=80&w=1986&auto=format&fit=crop"
    },
    {
      id: 10,
      name: "Flourless Chocolate Cake",
      description: "Rich chocolate cake served with raspberry coulis and fresh berries",
      price: "$11",
      category: "desserts",
      tag: "Gluten-Free",
      image: "https://images.unsplash.com/photo-1626285851076-1424e6a1e7c1?q=80&w=1974&auto=format&fit=crop"
    },
    {
      id: 11,
      name: "Seasonal Fruit Crumble",
      description: "Baked seasonal fruits topped with oat crumble, served warm with ice cream",
      price: "$9",
      category: "desserts",
      image: "https://images.unsplash.com/photo-1570145820259-b5b80c5c8bd6?q=80&w=2074&auto=format&fit=crop"
    },
    {
      id: 12,
      name: "Lemon Lavender Panna Cotta",
      description: "Silky lemon panna cotta infused with lavender from our garden",
      price: "$10",
      category: "desserts",
      tag: "Chef's Choice",
      image: "https://images.unsplash.com/photo-1511911063855-2bf39afa5b2e?q=80&w=1974&auto=format&fit=crop"
    },
    
    // Drinks
    {
      id: 13,
      name: "Fresh Pressed Juice",
      description: "Selection of seasonal fruit and vegetable juices",
      price: "$7",
      category: "drinks",
      tag: "Healthy",
      image: "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?q=80&w=1974&auto=format&fit=crop"
    },
    {
      id: 14,
      name: "Forest Park Mimosa",
      description: "Sparkling wine with freshly squeezed orange juice and a splash of elderflower",
      price: "$12",
      category: "drinks",
      image: "https://images.unsplash.com/photo-1556881286-fc6915169721?q=80&w=1974&auto=format&fit=crop"
    },
    {
      id: 15,
      name: "Organic Coffee",
      description: "Locally roasted organic coffee, available as drip, French press, or espresso",
      price: "$4.50",
      category: "drinks",
      image: "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?q=80&w=1974&auto=format&fit=crop"
    },
    {
      id: 16,
      name: "Herbal Tea Selection",
      description: "Variety of organic loose leaf teas, including some with herbs from our garden",
      price: "$5",
      category: "drinks",
      tag: "Organic",
      image: "https://images.unsplash.com/photo-1535735525541-63abddc6bf26?q=80&w=1974&auto=format&fit=crop"
    }
  ];

  const filteredItems = menuItems.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 bg-cream-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="section-heading">Our Menu</h2>
          <p className="section-subheading">
            Crafted with seasonal, locally-sourced ingredients to provide the freshest dining experience
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "px-6 py-2 rounded-full transition-all text-sm md:text-base font-medium",
                  activeCategory === category.id
                    ? "bg-nature-500 text-white"
                    : "bg-cream-100 text-nature-700 hover:bg-cream-200"
                )}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="menu-item group overflow-hidden animate-scale-in"
                style={{ animationDelay: `${(item.id % 4) * 0.1}s` }}
              >
                {item.tag && (
                  <span className="menu-tag">{item.tag}</span>
                )}
                
                <div className="flex flex-col md:flex-row gap-4">
                  {item.image && (
                    <div className="md:w-1/3 h-24 md:h-auto overflow-hidden rounded-md">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                  )}
                  
                  <div className={cn("flex-1", !item.image && "pl-0")}>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-serif text-xl font-medium text-nature-900">{item.name}</h3>
                      <span className="menu-price">{item.price}</span>
                    </div>
                    <p className="text-nature-600 text-sm md:text-base">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="#contact" className="btn-primary">
              Reserve Your Table
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
