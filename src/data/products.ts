export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: string;
  rating: number;
  reviews: number;
  description: string;
  features: string[];
  inStock: boolean;
  badge?: string;
}

export const categories = [
  { name: "Smartphones", icon: "📱", slug: "smartphones" },
  { name: "Laptops", icon: "💻", slug: "laptops" },
  { name: "Televisions", icon: "📺", slug: "televisions" },
  { name: "Audio", icon: "🎧", slug: "audio" },
  { name: "Wearables", icon: "⌚", slug: "wearables" },
  { name: "Accessories", icon: "🔌", slug: "accessories" },
  { name: "Gaming", icon: "🎮", slug: "gaming" },
  { name: "Cameras", icon: "📷", slug: "cameras" },
];

export const products: Product[] = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    price: 1199,
    originalPrice: 1299,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&h=600&fit=crop",
    ],
    category: "smartphones",
    rating: 4.9,
    reviews: 2847,
    description: "The most powerful iPhone ever. Featuring a titanium design, A17 Pro chip, and a revolutionary camera system.",
    features: ["A17 Pro Chip", "Titanium Design", "48MP Camera", "USB-C", "Action Button"],
    inStock: true,
    badge: "Best Seller",
  },
  {
    id: 2,
    name: 'MacBook Pro 16"',
    price: 2499,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&h=600&fit=crop",
    ],
    category: "laptops",
    rating: 4.8,
    reviews: 1923,
    description: "Supercharged by M3 Pro or M3 Max chip. Up to 22 hours of battery life.",
    features: ["M3 Pro/Max Chip", "Liquid Retina XDR", "22hr Battery", "MagSafe", "6 Speakers"],
    inStock: true,
    badge: "New",
  },
  {
    id: 3,
    name: "Sony WH-1000XM5",
    price: 349,
    originalPrice: 399,
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop",
    ],
    category: "audio",
    rating: 4.7,
    reviews: 3412,
    description: "Industry-leading noise canceling with Auto NC Optimizer. Crystal clear hands-free calling.",
    features: ["30hr Battery", "Noise Canceling", "Multipoint", "Speak-to-Chat", "Quick Charge"],
    inStock: true,
    badge: "Sale",
  },
  {
    id: 4,
    name: "Samsung Galaxy S24 Ultra",
    price: 1299,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&h=600&fit=crop",
    ],
    category: "smartphones",
    rating: 4.8,
    reviews: 1567,
    description: "Galaxy AI is here. With a built-in S Pen, titanium frame, and 200MP camera.",
    features: ["Galaxy AI", "200MP Camera", "S Pen Built-in", "Titanium Frame", "QHD+ Display"],
    inStock: true,
  },
  {
    id: 5,
    name: 'LG OLED C4 65"',
    price: 1799,
    originalPrice: 2099,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&h=600&fit=crop",
    ],
    category: "televisions",
    rating: 4.9,
    reviews: 876,
    description: "Perfect blacks, infinite contrast. The ultimate OLED TV experience with α9 AI Processor 4K Gen7.",
    features: ["OLED evo", "α9 Gen7 AI", "Dolby Vision IQ", "120Hz", "webOS 24"],
    inStock: true,
    badge: "Hot Deal",
  },
  {
    id: 6,
    name: "Apple Watch Ultra 2",
    price: 799,
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=600&h=600&fit=crop",
    ],
    category: "wearables",
    rating: 4.8,
    reviews: 1243,
    description: "The most rugged and capable Apple Watch. Built for extreme adventures.",
    features: ["S9 SiP", "Precision GPS", "3000 nits", "Depth Gauge", "Action Button"],
    inStock: true,
  },
  {
    id: 7,
    name: "Sony PlayStation 5",
    price: 499,
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=600&h=600&fit=crop",
    ],
    category: "gaming",
    rating: 4.9,
    reviews: 5621,
    description: "Experience lightning-fast loading, deeper immersion with haptic feedback, and stunning games.",
    features: ["4K 120fps", "Ray Tracing", "DualSense Controller", "825GB SSD", "3D Audio"],
    inStock: true,
    badge: "Popular",
  },
  {
    id: 8,
    name: "AirPods Pro 2",
    price: 249,
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=600&h=600&fit=crop",
    ],
    category: "audio",
    rating: 4.7,
    reviews: 4231,
    description: "Rebuilt from the sound up. Adaptive Audio, USB‑C charging, and up to 2x more Active Noise Cancellation.",
    features: ["H2 Chip", "Adaptive Audio", "USB-C", "6hr Battery", "IP54"],
    inStock: true,
  },
  {
    id: 9,
    name: "Dell XPS 15",
    price: 1899,
    image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&h=600&fit=crop",
    ],
    category: "laptops",
    rating: 4.6,
    reviews: 987,
    description: "InfinityEdge display, Intel Core Ultra processors, and stunning design.",
    features: ["Intel Core Ultra", "OLED Display", "32GB RAM", "1TB SSD", "Thunderbolt 4"],
    inStock: true,
  },
  {
    id: 10,
    name: "Canon EOS R6 Mark II",
    price: 2499,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=600&fit=crop",
    ],
    category: "cameras",
    rating: 4.8,
    reviews: 654,
    description: "Full-frame mirrorless camera with 24.2MP sensor, 40fps continuous shooting, and 4K 60p video.",
    features: ["24.2MP Full Frame", "40fps Burst", "4K 60p Video", "IBIS", "Dual Card Slots"],
    inStock: true,
  },
  {
    id: 11,
    name: "Samsung Galaxy Tab S9 Ultra",
    price: 1199,
    originalPrice: 1399,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&h=600&fit=crop",
    ],
    category: "accessories",
    rating: 4.7,
    reviews: 432,
    description: "The biggest, most immersive Galaxy Tab. With S Pen included and IP68 water resistance.",
    features: ["14.6\" AMOLED", "Snapdragon 8 Gen 2", "S Pen", "IP68", "11200mAh Battery"],
    inStock: true,
    badge: "Sale",
  },
  {
    id: 12,
    name: "Nintendo Switch OLED",
    price: 349,
    image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=600&h=600&fit=crop",
    ],
    category: "gaming",
    rating: 4.8,
    reviews: 3987,
    description: "Play at home or on the go with a vibrant 7-inch OLED screen.",
    features: ["7\" OLED Screen", "Wide Stand", "64GB Storage", "Enhanced Audio", "Dock Included"],
    inStock: true,
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Tech Enthusiast",
    avatar: "SJ",
    text: "Absolutely love the quality and fast shipping! The product selection is unmatched. My go-to store for all tech needs.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Content Creator",
    avatar: "MC",
    text: "Best prices I've found online. Customer service was incredibly helpful when I needed to exchange a product.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Software Engineer",
    avatar: "ER",
    text: "The checkout process is so smooth. Got my laptop delivered next day. Will definitely be ordering again!",
    rating: 4,
  },
];
