// ===============================
// RESTAURANT INFORMATION
// ===============================

export const restaurantInfo = {
  name: "Savora",
  tagline: "Good Food. Great Moments.",
  description:
    "Experience delicious food made with fresh ingredients, passion, and love.",

  logo: "S",

  address: "24 Park Street, New Delhi, India",
  phone: "+91 98765 43210",
  email: "hello@savora.com",

  openingHours: {
    weekdays: "10:00 AM - 10:00 PM",
    weekends: "09:00 AM - 11:00 PM",
  },

  deliveryTime: "25-40 min",
  deliveryFee: 40,
  freeDeliveryAbove: 499,

  rating: 4.8,
  totalReviews: 1250,

  stats: [
    { label: "Happy Customers", value: "12K+" },
    { label: "Food Items", value: "50+" },
    { label: "Years of Experience", value: "8+" },
    { label: "Customer Rating", value: "4.8/5" },
  ],
};

// ===============================
// FOOD CATEGORIES
// ===============================

export const categories = [
  {
    id: "all",
    name: "All",
    icon: "🍽️",
  },
  {
    id: "pizza",
    name: "pizza",
    icon: "🍕",
  },
  {
    id: "burger",
    name: "burger",
    icon: "🍔",
  },
  {
    id: "pasta",
    name: "pasta",
    icon: "🍝",
  },
  {
    id: "indian",
    name: "indian",
    icon: "🍛",
  },
  {
    id: "dessert",
    name: "dessert",
    icon: "🍰",
  },
  {
    id: "drinks",
    name: "drinks",
    icon: "🥤",
  },
];

// ===============================
// FOOD MENU DATA
// ===============================

export const foodItems = [
  {
    id: "food-001",
    slug: "margherita-pizza",
    name: "Margherita Pizza",
    category: "pizza",
    price: 299,
    originalPrice: 349,

    image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=800",

    rating: 4.8,
    reviews: 245,
    preparationTime: "20-25 min",

    isPopular: true,
    isFeatured: true,
    isVegetarian: true,
    isAvailable: true,

    badge: "Bestseller",

    description:
      "Classic Italian pizza topped with fresh mozzarella, basil, and rich tomato sauce.",

    ingredients: [
      "Pizza Dough",
      "Mozzarella Cheese",
      "Fresh Basil",
      "Tomato Sauce",
      "Olive Oil",
    ],

    sizes: [
      { name: "Regular", price: 299 },
      { name: "Medium", price: 449 },
      { name: "Large", price: 599 },
    ],
  },

  {
    id: "food-002",
    slug: "farmhouse-pizza",
    name: "Farmhouse Pizza",
    category: "pizza",
    price: 399,
    originalPrice: 449,

    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800",

    rating: 4.7,
    reviews: 189,
    preparationTime: "25-30 min",

    isPopular: true,
    isFeatured: true,
    isVegetarian: true,
    isAvailable: true,

    badge: "Popular",

    description:
      "Loaded pizza with crunchy vegetables, mushrooms, capsicum, and melted cheese.",

    ingredients: [
      "Pizza Dough",
      "Capsicum",
      "Mushrooms",
      "Onion",
      "Mozzarella Cheese",
    ],

    sizes: [
      { name: "Regular", price: 399 },
      { name: "Medium", price: 549 },
      { name: "Large", price: 699 },
    ],
  },

  {
    id: "food-003",
    slug: "classic-cheese-burger",
    name: "Classic Cheese Burger",
    category: "burger",
    price: 199,
    originalPrice: 249,

    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",

    rating: 4.6,
    reviews: 320,
    preparationTime: "15-20 min",

    isPopular: true,
    isFeatured: true,
    isVegetarian: false,
    isAvailable: true,

    badge: "Customer Favorite",

    description:
      "Juicy grilled patty with cheddar cheese, fresh lettuce, and signature sauce.",

    ingredients: [
      "Burger Bun",
      "Grilled Patty",
      "Cheddar Cheese",
      "Lettuce",
      "Signature Sauce",
    ],

    sizes: [
      { name: "Regular", price: 199 },
      { name: "Double Patty", price: 299 },
    ],
  },

  {
    id: "food-004",
    slug: "crispy-veggie-burger",
    name: "Crispy Veggie Burger",
    category: "burger",
    price: 169,
    originalPrice: 199,

    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800",

    rating: 4.5,
    reviews: 156,
    preparationTime: "15-20 min",

    isPopular: false,
    isFeatured: false,
    isVegetarian: true,
    isAvailable: true,

    badge: "Value Pick",

    description:
      "Crispy vegetable patty with creamy mayo, lettuce, and freshly toasted buns.",

    ingredients: [
      "Burger Bun",
      "Veggie Patty",
      "Lettuce",
      "Onion",
      "Mayonnaise",
    ],

    sizes: [
      { name: "Regular", price: 169 },
      { name: "Double Patty", price: 249 },
    ],
  },

  {
    id: "food-005",
    slug: "creamy-alfredo-pasta",
    name: "Creamy Alfredo Pasta",
    category: "pasta",
    price: 279,
    originalPrice: 329,

    image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=800",

    rating: 4.8,
    reviews: 210,
    preparationTime: "20-25 min",

    isPopular: true,
    isFeatured: true,
    isVegetarian: true,
    isAvailable: true,

    badge: "Chef's Choice",

    description:
      "Creamy white sauce pasta with parmesan, herbs, and perfectly cooked penne.",

    ingredients: [
      "Penne Pasta",
      "Fresh Cream",
      "Parmesan",
      "Garlic",
      "Italian Herbs",
    ],

    sizes: [
      { name: "Regular", price: 279 },
      { name: "Large", price: 399 },
    ],
  },

  {
    id: "food-006",
    slug: "spicy-arrabbiata-pasta",
    name: "Spicy Arrabbiata Pasta",
    category: "pasta",
    price: 249,
    originalPrice: 299,

    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800",

    rating: 4.5,
    reviews: 134,
    preparationTime: "20-25 min",

    isPopular: false,
    isFeatured: false,
    isVegetarian: true,
    isAvailable: true,

    badge: "Spicy",

    description:
      "Italian pasta tossed in a spicy tomato sauce with garlic and fresh herbs.",

    ingredients: [
      "Penne Pasta",
      "Tomato Sauce",
      "Garlic",
      "Chilli Flakes",
      "Fresh Herbs",
    ],

    sizes: [
      { name: "Regular", price: 249 },
      { name: "Large", price: 359 },
    ],
  },

  {
    id: "food-007",
    slug: "paneer-butter-masala",
    name: "Paneer Butter Masala",
    category: "indian",
    price: 329,
    originalPrice: 379,

    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800",

    rating: 4.9,
    reviews: 410,
    preparationTime: "25-30 min",

    isPopular: true,
    isFeatured: true,
    isVegetarian: true,
    isAvailable: true,

    badge: "Bestseller",

    description:
      "Soft paneer cubes cooked in a rich, creamy tomato and butter gravy.",

    ingredients: [
      "Paneer",
      "Tomatoes",
      "Butter",
      "Fresh Cream",
      "Indian Spices",
    ],

    sizes: [
      { name: "Half", price: 329 },
      { name: "Full", price: 499 },
    ],
  },

  {
    id: "food-008",
    slug: "chicken-biryani",
    name: "Chicken Biryani",
    category: "indian",
    price: 349,
    originalPrice: 399,

    image:
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",

    rating: 4.8,
    reviews: 375,
    preparationTime: "30-35 min",

    isPopular: true,
    isFeatured: true,
    isVegetarian: false,
    isAvailable: true,

    badge: "Must Try",

    description:
      "Aromatic basmati rice layered with spiced chicken and traditional biryani flavors.",

    ingredients: [
      "Basmati Rice",
      "Chicken",
      "Yogurt",
      "Biryani Masala",
      "Fresh Mint",
    ],

    sizes: [
      { name: "Regular", price: 349 },
      { name: "Large", price: 549 },
    ],
  },

  {
    id: "food-009",
    slug: "chocolate-lava-cake",
    name: "Chocolate Lava Cake",
    category: "dessert",
    price: 149,
    originalPrice: 179,

    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800",

    rating: 4.9,
    reviews: 290,
    preparationTime: "10-15 min",

    isPopular: true,
    isFeatured: true,
    isVegetarian: true,
    isAvailable: true,

    badge: "Sweet Treat",

    description: "Warm chocolate cake with a rich, gooey chocolate center.",

    ingredients: ["Dark Chocolate", "Flour", "Butter", "Sugar", "Cocoa Powder"],

    sizes: [
      { name: "Single", price: 149 },
      { name: "Double", price: 269 },
    ],
  },

  {
    id: "food-010",
    slug: "classic-cheesecake",
    name: "Classic Cheesecake",
    category: "dessert",
    price: 199,
    originalPrice: 229,

    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=800",

    rating: 4.7,
    reviews: 175,
    preparationTime: "10 min",

    isPopular: false,
    isFeatured: false,
    isVegetarian: false,
    isAvailable: true,

    badge: "New",

    description: "Smooth and creamy cheesecake on a buttery biscuit crust.",

    ingredients: [
      "Cream Cheese",
      "Biscuit Crust",
      "Sugar",
      "Vanilla",
      "Butter",
    ],

    sizes: [
      { name: "Single Slice", price: 199 },
      { name: "Two Slices", price: 369 },
    ],
  },

  {
    id: "food-011",
    slug: "fresh-mango-smoothie",
    name: "Fresh Mango Smoothie",
    category: "drinks",
    price: 129,
    originalPrice: 159,

    image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=800",

    rating: 4.6,
    reviews: 145,
    preparationTime: "5-10 min",

    isPopular: false,
    isFeatured: false,
    isVegetarian: true,
    isAvailable: true,

    badge: "Refreshing",

    description:
      "A refreshing mango smoothie blended with creamy milk and ripe mangoes.",

    ingredients: ["Fresh Mango", "Milk", "Honey", "Ice"],

    sizes: [
      { name: "Regular", price: 129 },
      { name: "Large", price: 189 },
    ],
  },

  {
    id: "food-012",
    slug: "iced-caramel-coffee",
    name: "Iced Caramel Coffee",
    category: "drinks",
    price: 159,
    originalPrice: 189,

    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800",

    rating: 4.7,
    reviews: 198,
    preparationTime: "5-10 min",

    isPopular: true,
    isFeatured: false,
    isVegetarian: false,
    isAvailable: true,

    badge: "Popular",

    description: "Chilled coffee blended with milk, caramel syrup, and ice.",

    ingredients: ["Espresso", "Milk", "Caramel Syrup", "Ice"],

    sizes: [
      { name: "Regular", price: 159 },
      { name: "Large", price: 219 },
    ],
  },
];

// ===============================
// CUSTOMER TESTIMONIALS
// ===============================

export const testimonials = [
  {
    id: 1,
    name: "Aarav Sharma",
    role: "Regular Customer",
    rating: 5,
    message:
      "Amazing food quality and quick delivery. The paneer butter masala is my absolute favorite!",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 2,
    name: "Priya Verma",
    role: "Food Enthusiast",
    rating: 5,
    message:
      "Savora has such a beautiful menu. Their pasta and desserts are worth ordering again.",
    image: "https://i.pravatar.cc/150?img=47",
  },
  {
    id: 3,
    name: "Rohan Mehta",
    role: "Verified Customer",
    rating: 4,
    message:
      "Great taste, fresh ingredients, and a smooth ordering experience. Highly recommended.",
    image: "https://i.pravatar.cc/150?img=13",
  },
];

// ===============================
// SPECIAL OFFERS
// ===============================

export const offers = [
  {
    id: 1,
    title: "Flat 20% OFF",
    description: "Enjoy 20% off on your first order.",
    code: "WELCOME20",
    discountType: "percentage",
    discountValue: 20,
    minOrder: 299,
  },
  {
    id: 2,
    title: "Flat ₹100 OFF",
    description: "Save ₹100 on orders above ₹599.",
    code: "SAVORA100",
    discountType: "fixed",
    discountValue: 100,
    minOrder: 599,
  },
  {
    id: 3,
    title: "Free Delivery",
    description: "Get free delivery on orders above ₹499.",
    code: "FREEDEL",
    discountType: "delivery",
    discountValue: 40,
    minOrder: 499,
  },
];

// ===============================
// RESTAURANT TEAM
// ===============================


export const features = [
  {
    icon: "🥗",
    title: "Fresh Ingredients",
    description:
      "We use fresh, carefully selected ingredients to make every dish delicious and wholesome.",
    color: "bg-green-50 border-green-100",
    iconBg: "bg-green-100",
  },
  {
    icon: "👨‍🍳",
    title: "Expert Chefs",
    description:
      "Our passionate chefs combine quality ingredients with recipes crafted for great taste.",
    color: "bg-orange-50 border-orange-100",
    iconBg: "bg-orange-100",
  },
  {
    icon: "⚡",
    title: "Fast Delivery",
    description:
      "From our kitchen to your doorstep, we make sure your food arrives fresh and on time.",
    color: "bg-blue-50 border-blue-100",
    iconBg: "bg-blue-100",
  },
  {
    icon: "⭐",
    title: "Loved by Customers",
    description:
      "With a 4.8/5 rating and thousands of happy customers, your satisfaction comes first.",
    color: "bg-yellow-50 border-yellow-100",
    iconBg: "bg-yellow-100",
  },
];

// ===============================
// RESTAURANT TEAM
// ===============================

export const teamMembers = [
  {
    id: 1,
    name: "Chef Rahul Kapoor",
    role: "Head Chef",
    image: "https://i.pravatar.cc/300?img=11",
    description: "Specialist in modern Indian cuisine.",
  },
  {
    id: 2,
    name: "Chef Ananya Singh",
    role: "Pastry Chef",
    image: "https://i.pravatar.cc/300?img=44",
    description: "Creating delicious desserts with creativity.",
  },
  {
    id: 3,
    name: "Vikram Malhotra",
    role: "Restaurant Manager",
    image: "https://i.pravatar.cc/300?img=14",
    description: "Making every customer experience memorable.",
  },
];

// ===============================
// FREQUENTLY ASKED QUESTIONS
// ===============================

export const faqs = [
  {
    id: 1,
    question: "What are your restaurant opening hours?",
    answer:
      "We are open from 10 AM to 10 PM on weekdays and 9 AM to 11 PM on weekends.",
  },
  {
    id: 2,
    question: "Do you offer home delivery?",
    answer:
      "Yes, we offer home delivery. Standard delivery usually takes 25-40 minutes.",
  },
  {
    id: 3,
    question: "Is there a minimum order amount?",
    answer:
      "There is no general minimum order amount, but certain promotional offers require a minimum order value.",
  },
  {
    id: 4,
    question: "Do you have vegetarian options?",
    answer:
      "Yes, we offer a variety of vegetarian pizzas, burgers, pasta, Indian dishes, desserts, and drinks.",
  },
  {
    id: 5,
    question: "Can I customize my food order?",
    answer:
      "Customization options can vary by dish. You can display available sizes and options on each food detail page.",
  },
];
