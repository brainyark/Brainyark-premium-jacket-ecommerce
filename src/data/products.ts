export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  featured: boolean;
  colors: string[];
  sizes: string[];
  rating: number;
  reviews: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Urban Explorer Jacket",
    price: 129.99,
    description: "The Urban Explorer Jacket is designed for the modern adventurer. Water-resistant and breathable, this jacket features multiple pockets and adjustable cuffs for maximum comfort and functionality. Perfect for city exploration or weekend getaways.",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1036&q=80",
    category: "jackets",
    featured: true,
    colors: ["Black", "Navy", "Olive"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.8,
    reviews: 124
  },
  {
    id: 2,
    name: "Velocity Running Shoes",
    price: 149.99,
    description: "Experience unparalleled comfort and performance with our Velocity Running Shoes. Featuring responsive cushioning and breathable mesh upper, these shoes are designed to enhance your running experience. The durable outsole provides excellent traction on various surfaces.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "shoes",
    featured: true,
    colors: ["Red/Black", "Blue/White", "All Black"],
    sizes: ["7", "8", "9", "10", "11", "12"],
    rating: 4.9,
    reviews: 89
  },
  {
    id: 3,
    name: "Alpine Winter Jacket",
    price: 199.99,
    description: "Conquer the cold with our Alpine Winter Jacket. Insulated with premium down and featuring a waterproof outer shell, this jacket is designed to keep you warm and dry in extreme conditions. The adjustable hood and snow skirt provide additional protection against the elements.",
    image: "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    category: "jackets",
    featured: false,
    colors: ["Red", "Black", "White"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.7,
    reviews: 56
  },
  {
    id: 4,
    name: "Metro Casual Sneakers",
    price: 89.99,
    description: "Elevate your everyday style with our Metro Casual Sneakers. Crafted with premium materials and featuring a cushioned insole, these sneakers offer both style and comfort. The versatile design makes them perfect for casual outings or office wear.",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=698&q=80",
    category: "shoes",
    featured: true,
    colors: ["White", "Black", "Gray"],
    sizes: ["7", "8", "9", "10", "11"],
    rating: 4.5,
    reviews: 112
  },
  {
    id: 5,
    name: "Vintage Leather Jacket",
    price: 249.99,
    description: "Our Vintage Leather Jacket combines classic style with modern craftsmanship. Made from premium full-grain leather, this jacket features a soft satin lining and multiple pockets. The timeless design ensures it will remain a staple in your wardrobe for years to come.",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
    category: "jackets",
    featured: true,
    colors: ["Brown", "Black"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.9,
    reviews: 78
  },
  {
    id: 6,
    name: "Trail Blazer Hiking Boots",
    price: 159.99,
    description: "Conquer any terrain with our Trail Blazer Hiking Boots. Featuring a waterproof membrane and rugged outsole, these boots provide excellent traction and support on challenging trails. The cushioned midsole ensures comfort during long hikes.",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    category: "shoes",
    featured: false,
    colors: ["Brown", "Gray/Orange", "Black"],
    sizes: ["7", "8", "9", "10", "11", "12"],
    rating: 4.7,
    reviews: 45
  },
  {
    id: 7,
    name: "Lightweight Summer Jacket",
    price: 79.99,
    description: "Stay cool and stylish with our Lightweight Summer Jacket. Made from breathable fabric with UV protection, this jacket is perfect for warm weather. The packable design makes it easy to carry when not in use.",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1036&q=80",
    category: "jackets",
    featured: false,
    colors: ["Light Blue", "Beige", "Mint Green"],
    sizes: ["XS", "S", "M", "L", "XL"],
    rating: 4.3,
    reviews: 34
  },
  {
    id: 8,
    name: "Business Casual Loafers",
    price: 119.99,
    description: "Step into comfort and style with our Business Casual Loafers. Crafted with genuine leather and featuring a cushioned footbed, these loafers are perfect for office wear or formal occasions. The slip-on design offers convenience without compromising on style.",
    image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    category: "shoes",
    featured: false,
    colors: ["Brown", "Black", "Tan"],
    sizes: ["7", "8", "9", "10", "11", "12"],
    rating: 4.6,
    reviews: 67
  },
  {
    id: 9,
    name: "Nairobi Safari Jacket",
    price: 179.99,
    description: "Inspired by the Kenyan wilderness, our Nairobi Safari Jacket combines functionality with authentic African style. Made from durable cotton canvas with reinforced stitching, this jacket features multiple utility pockets and adjustable waist for the perfect fit. Ideal for outdoor adventures or urban exploration.",
    image: "https://images.unsplash.com/photo-1548883354-94bcfe321cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    category: "jackets",
    featured: true,
    colors: ["Khaki", "Olive", "Tan"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.9,
    reviews: 42
  },
  {
    id: 10,
    name: "Maasai Runner Athletic Shoes",
    price: 139.99,
    description: "Inspired by the legendary Kenyan runners, our Maasai Runner Athletic Shoes deliver exceptional performance and comfort. The lightweight design features responsive cushioning and a breathable upper, perfect for long-distance running or daily training. The unique pattern pays homage to traditional Maasai designs.",
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    category: "shoes",
    featured: true,
    colors: ["Red/Black", "Blue/White", "Green/Yellow"],
    sizes: ["7", "8", "9", "10", "11", "12"],
    rating: 4.8,
    reviews: 63
  },
  {
    id: 11,
    name: "Serengeti Leather Bomber",
    price: 229.99,
    description: "Our Serengeti Leather Bomber jacket combines classic styling with premium African leather. Hand-crafted by skilled artisans, this jacket features a butter-soft finish, ribbed cuffs and hem, and a plush interior lining. The perfect statement piece that gets better with age.",
    image: "https://images.unsplash.com/photo-1520975954732-35dd22299614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    category: "jackets",
    featured: false,
    colors: ["Dark Brown", "Black", "Cognac"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.7,
    reviews: 38
  },
  {
    id: 12,
    name: "Kilimanjaro Hiking Boots",
    price: 189.99,
    description: "Designed for the most challenging terrains, our Kilimanjaro Hiking Boots provide unmatched support and durability. With a waterproof Gore-Tex membrane, Vibram outsole, and cushioned ankle support, these boots will take you from the foothills to the summit in comfort and style.",
    image: "https://images.unsplash.com/photo-1553545985-1e0d8781d5db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    category: "shoes",
    featured: false,
    colors: ["Brown/Orange", "Gray/Blue", "Black/Green"],
    sizes: ["7", "8", "9", "10", "11", "12"],
    rating: 4.9,
    reviews: 51
  }
];