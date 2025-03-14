
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  isSpecial?: boolean;
  isVegetarian?: boolean;
  isGlutenFree?: boolean;
};

const menuItems: MenuItem[] = [
  // Breakfast Items
  {
    id: 1,
    name: "Forest Mushroom Omelette",
    description: "Wild mushrooms, spinach, and goat cheese in a fluffy omelette. Served with herb-roasted potatoes.",
    price: "$14",
    category: "breakfast",
    isSpecial: true,
  },
  {
    id: 2,
    name: "Wildflower Honey Pancakes",
    description: "Buttermilk pancakes topped with seasonal berries, local wildflower honey, and whipped mascarpone.",
    price: "$13",
    category: "breakfast",
    isVegetarian: true,
  },
  {
    id: 3,
    name: "Forest Park Benedict",
    description: "Poached eggs on a homemade biscuit with smoked salmon and dill hollandaise. Served with mixed greens.",
    price: "$16",
    category: "breakfast",
  },
  {
    id: 4,
    name: "Hearty Granola Bowl",
    description: "House-made granola with Greek yogurt, fresh fruits, and a drizzle of local honey.",
    price: "$11",
    category: "breakfast",
    isVegetarian: true,
    isGlutenFree: true,
  },
  
  // Lunch Items
  {
    id: 5,
    name: "Rustic Harvest Salad",
    description: "Mixed greens, roasted seasonal vegetables, candied walnuts, goat cheese, and balsamic vinaigrette.",
    price: "$15",
    category: "lunch",
    isVegetarian: true,
    isGlutenFree: true,
  },
  {
    id: 6,
    name: "Forest Forager's Burger",
    description: "Grass-fed beef with wild mushrooms, caramelized onions, and truffle aioli on a brioche bun. Served with herb fries.",
    price: "$18",
    category: "lunch",
    isSpecial: true,
  },
  {
    id: 7,
    name: "Smoked Trout Sandwich",
    description: "House-smoked trout with cucumber, dill cream cheese, and watercress on rustic sourdough. Served with mixed greens.",
    price: "$16",
    category: "lunch",
  },
  {
    id: 8,
    name: "Seasonal Vegetable Quiche",
    description: "Flaky pastry filled with seasonal vegetables and local cheese. Served with a side salad.",
    price: "$14",
    category: "lunch",
    isVegetarian: true,
  },
  
  // Dinner Items
  {
    id: 9,
    name: "Cedar-Planked Salmon",
    description: "Wild-caught salmon roasted on cedar with lemon-herb butter, served with roasted root vegetables.",
    price: "$26",
    category: "dinner",
    isGlutenFree: true,
  },
  {
    id: 10,
    name: "Herb-Crusted Rack of Lamb",
    description: "Local lamb with a rosemary-thyme crust, mint jelly, and garlic mashed potatoes.",
    price: "$32",
    category: "dinner",
    isSpecial: true,
  },
  {
    id: 11,
    name: "Wild Mushroom Risotto",
    description: "Creamy arborio rice with foraged mushrooms, truffle oil, and parmesan.",
    price: "$22",
    category: "dinner",
    isVegetarian: true,
    isGlutenFree: true,
  },
  {
    id: 12,
    name: "Pan-Seared Duck Breast",
    description: "Crispy-skinned duck with cherry port reduction, served with wild rice pilaf and seasonal vegetables.",
    price: "$28",
    category: "dinner",
  },
  
  // Desserts
  {
    id: 13,
    name: "Blackberry Cobbler",
    description: "Warm cobbler with wild blackberries, topped with vanilla bean ice cream.",
    price: "$10",
    category: "dessert",
    isVegetarian: true,
  },
  {
    id: 14,
    name: "Lavender Honey Crème Brûlée",
    description: "Classic crème brûlée infused with local lavender and wildflower honey.",
    price: "$9",
    category: "dessert",
    isVegetarian: true,
    isGlutenFree: true,
  },
  {
    id: 15,
    name: "Apple Tarte Tatin",
    description: "Caramelized apples in a flaky pastry, served with cinnamon whipped cream.",
    price: "$11",
    category: "dessert",
    isVegetarian: true,
  },
  {
    id: 16,
    name: "Chocolate Hazelnut Torte",
    description: "Rich, flourless chocolate cake with hazelnut praline and raspberry coulis.",
    price: "$12",
    category: "dessert",
    isVegetarian: true,
    isGlutenFree: true,
    isSpecial: true,
  },
];

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("breakfast");

  return (
    <section id="menu" className="py-20 bg-cream-50 bg-wood-texture bg-opacity-5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="section-heading">Our Seasonal Menu</h2>
          <p className="section-subheading">
            Crafted with locally-sourced ingredients for an authentic taste of nature
          </p>
        </div>

        <Tabs defaultValue="breakfast" className="w-full" onValueChange={setActiveCategory}>
          <div className="flex justify-center mb-10">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-cream-100">
              <TabsTrigger value="breakfast" className="font-serif">Breakfast</TabsTrigger>
              <TabsTrigger value="lunch" className="font-serif">Lunch</TabsTrigger>
              <TabsTrigger value="dinner" className="font-serif">Dinner</TabsTrigger>
              <TabsTrigger value="dessert" className="font-serif">Desserts</TabsTrigger>
            </TabsList>
          </div>

          {["breakfast", "lunch", "dinner", "dessert"].map((category) => (
            <TabsContent
              key={category}
              value={category}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in"
            >
              {menuItems
                .filter((item) => item.category === category)
                .map((item) => (
                  <div key={item.id} className="menu-item">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-serif text-xl font-medium text-nature-800">
                          {item.name}
                          {item.isVegetarian && (
                            <span className="ml-2 text-xs rounded-full bg-green-100 text-green-800 px-2 py-0.5">V</span>
                          )}
                          {item.isGlutenFree && (
                            <span className="ml-2 text-xs rounded-full bg-yellow-100 text-yellow-800 px-2 py-0.5">GF</span>
                          )}
                        </h3>
                        <p className="text-nature-600 mt-1 mb-2">{item.description}</p>
                      </div>
                      <span className="menu-price">{item.price}</span>
                    </div>
                    {item.isSpecial && <span className="menu-tag">Chef's Special</span>}
                  </div>
                ))}
            </TabsContent>
          ))}
        </Tabs>

        <div className="text-center mt-16">
          <p className="text-nature-700 italic mb-6">
            * Menu items may change based on seasonal availability
          </p>
          <a href="#reservation" className="btn-primary">
            Reserve a Table
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;
