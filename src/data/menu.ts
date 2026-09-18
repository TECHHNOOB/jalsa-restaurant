/**
 * Authentic verified menu items from Jalsa Lake View Pure Veg Restaurant Udaipur
 * Source: Official Menu PDF (https://jalsaudaipur.com/wp-content/uploads/2024/08/Menu-Jalsa-Lake-View-Pure-Veg-Restaurant-1-2.pdf)
 * and verified site publications.
 * 100% PURE VEGETARIAN
 */

export interface MenuItem {
  id: string;
  name: string;
  category: 'starters' | 'mains' | 'breads' | 'desserts' | 'drinks';
  price: number;
  description: string;
  isSignature?: boolean;
  isSpicy?: boolean;
  isHeritage?: boolean;
  isJainFriendly?: boolean;
}

export interface MenuCategory {
  id: 'starters' | 'mains' | 'breads' | 'desserts' | 'drinks';
  name: string;
  eyebrow: string;
  description: string;
}

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: 'starters',
    name: 'Starters & Tandoor',
    eyebrow: 'APPETIZERS',
    description: 'Crisp kebabs, smoky clay-oven tikkas, and zesty starters crafted for sharing.',
  },
  {
    id: 'mains',
    name: 'Main Course',
    eyebrow: 'MUSH & CURRIES',
    description: 'Slow-simmered Mewari heritage curries, silky gravies, and aromatic basmati rice.',
  },
  {
    id: 'breads',
    name: 'Breads & Accompaniments',
    eyebrow: 'CLAY OVEN & TAWA',
    description: 'Traditional Missi roti, flaky chur chur naan, and golden parathas brushed with desi ghee.',
  },
  {
    id: 'desserts',
    name: 'Desserts',
    eyebrow: 'SWEET FINISH',
    description: 'Slow-reduced rabdi, fragrant saffron kheer, and traditional Rajasthani confections.',
  },
  {
    id: 'drinks',
    name: 'Drinks & Refreshers',
    eyebrow: 'COOLERS & INFUSIONS',
    description: 'Handcrafted masala chai, thick kulhad lassi, and cooling summer blends.',
  },
];

export const MENU_ITEMS: MenuItem[] = [
  // STARTERS & TANDOOR
  {
    id: 's-1',
    name: 'Paneer Jalsa Special',
    category: 'starters',
    price: 380,
    description: "Succulent cubes of fresh cottage cheese prepared with our chef's signature spiced glaze.",
    isSignature: true,
  },
  {
    id: 's-2',
    name: 'Jalsa Paneer 65',
    category: 'starters',
    price: 340,
    description: 'Spicy, crisp-fried paneer morsels tempered with fresh curry leaves, mustard, and green chillies.',
    isSignature: true,
    isSpicy: true,
  },
  {
    id: 's-3',
    name: 'Afghani Paneer Tikka',
    category: 'starters',
    price: 360,
    description: 'Cottage cheese marinated in thick hung yogurt, crushed cashew paste, and gentle green cardamom.',
    isSignature: true,
  },
  {
    id: 's-4',
    name: 'Dahi Ke Kabab',
    category: 'starters',
    price: 360,
    description: 'Silky melt-in-mouth hung curd patties infused with green cardamom and bell peppers, served with fresh mint chutney.',
    isSignature: true,
    isJainFriendly: true,
  },
  {
    id: 's-5',
    name: 'Stuffed Tandoori Aaloo',
    category: 'starters',
    price: 320,
    description: 'Charred barrel potatoes filled with spiced paneer, roasted nuts, and herbs finished in the tandoor.',
  },
  {
    id: 's-6',
    name: 'Crispy Veg Salt & Pepper',
    category: 'starters',
    price: 280,
    description: 'Garden vegetables tossed in high-heat wok with cracked black peppercorns and spring scallions.',
  },
  {
    id: 's-7',
    name: 'Veg Spring Roll',
    category: 'starters',
    price: 340,
    description: 'Crispy golden rolls packed with seasoned shredded wok vegetables, served with sweet chilli dip.',
  },
  {
    id: 's-8',
    name: 'Paneer Pakora',
    category: 'starters',
    price: 310,
    description: 'Double-battered spiced paneer fritters, crispy on the outside and tender inside.',
  },

  // MAINS
  {
    id: 'm-1',
    name: 'Rajasthani Gutta Curry',
    category: 'mains',
    price: 320,
    description: 'Gram flour dumplings lovingly simmered in a tangy spiced yogurt gravy enriched with cashew paste.',
    isSignature: true,
    isHeritage: true,
  },
  {
    id: 'm-2',
    name: 'Rajasthani Ker Sangri',
    category: 'mains',
    price: 380,
    description: "The desert's prized wild berries and beans slow-cooked with whole spices, amchur, and mustard oil.",
    isSignature: true,
    isHeritage: true,
  },
  {
    id: 'm-3',
    name: 'Mewari Bhindi',
    category: 'mains',
    price: 310,
    description: 'Tender okra sautéed with crisp onions, vine tomatoes, and authentic Mewari masala blend.',
    isHeritage: true,
  },
  {
    id: 'm-4',
    name: 'Paneer Butter Masala',
    category: 'mains',
    price: 360,
    description: 'Fresh cottage cheese cubes folded into a velvety, mildly spiced makhani tomato butter gravy.',
    isJainFriendly: true,
  },
  {
    id: 'm-5',
    name: 'Dal Makhani',
    category: 'mains',
    price: 360,
    description: 'Whole black lentils and red kidney beans slow-simmered for 12 hours with fresh churned butter and cream.',
    isSignature: true,
  },
  {
    id: 'm-6',
    name: 'Malai Kofta',
    category: 'mains',
    price: 360,
    description: 'Delicate potato and paneer dumplings filled with dried fruits, served in a rich cashew-cream white curry.',
    isJainFriendly: true,
  },
  {
    id: 'm-7',
    name: 'Dal Palak Tadka',
    category: 'mains',
    price: 320,
    description: 'Yellow lentils cooked with tender garden spinach, tempered with cumin seeds and whole red chillies.',
  },
  {
    id: 'm-8',
    name: 'Chana Masala',
    category: 'mains',
    price: 320,
    description: 'Tender chickpeas simmered in a semi-dry, robust Punjabi roasted spice gravy.',
    isSpicy: true,
  },
  {
    id: 'm-9',
    name: 'Veg Dum Biryani',
    category: 'mains',
    price: 360,
    description: 'Fragrant aged basmati rice slow-cooked on dum with seasonal vegetables and saffron, served with cucumber raita.',
  },
  {
    id: 'm-10',
    name: 'Jeera Rice',
    category: 'mains',
    price: 210,
    description: 'Steamed long-grain basmati tempered with roasted cumin seeds and fresh coriander.',
  },

  // BREADS
  {
    id: 'b-1',
    name: 'Chur Chur Naan',
    category: 'breads',
    price: 110,
    description: 'Crushed flaky tandoori leavened flatbread drenched in clarified desi butter.',
    isSignature: true,
  },
  {
    id: 'b-2',
    name: 'Missi Roti',
    category: 'breads',
    price: 90,
    description: 'Classic Rajasthani hearth bread made with chickpea flour, whole wheat, crushed ajwain, and fenugreek.',
    isHeritage: true,
  },
  {
    id: 'b-3',
    name: 'Laccha Paratha',
    category: 'breads',
    price: 90,
    description: 'Crisp multi-layered whole wheat flatbread baked over high heat and finished with ghee.',
  },
  {
    id: 'b-4',
    name: 'Garlic Butter Naan',
    category: 'breads',
    price: 110,
    description: 'Tandoori flatbread topped with toasted minced garlic, fresh cilantro, and warm butter.',
  },
  {
    id: 'b-5',
    name: 'Tandoori Roti (Butter)',
    category: 'breads',
    price: 50,
    description: 'Traditional whole-wheat round freshly baked against the clay tandoor wall.',
  },
  {
    id: 'b-6',
    name: 'Stuffed Paneer Kulcha',
    category: 'breads',
    price: 120,
    description: 'Soft tandoor-baked leavened bread generously stuffed with spiced cottage cheese and herbs.',
  },

  // DESSERTS
  {
    id: 'd-1',
    name: 'Gulab Jamun with Rabdi',
    category: 'desserts',
    price: 190,
    description: 'Warm golden milk dumplings soaked in rose cardamom syrup, served on a bed of chilled slow-reduced rabdi.',
    isSignature: true,
  },
  {
    id: 'd-2',
    name: 'Kesari Rice Kheer',
    category: 'desserts',
    price: 180,
    description: 'Traditional slow-cooked milk pudding flavored with aromatic Kashmiri saffron and slivered pistachios.',
    isHeritage: true,
  },
  {
    id: 'd-3',
    name: 'Sizzling Brownie with Ice Cream',
    category: 'desserts',
    price: 240,
    description: 'Warm dark chocolate walnut brownie served on a smoking cast iron platter with vanilla bean gelato.',
  },
  {
    id: 'd-4',
    name: 'Kesar Pista Ice Cream',
    category: 'desserts',
    price: 140,
    description: 'Creamy artisanal ice cream infused with real saffron strands and crunchy roasted pistachios.',
  },

  // DRINKS
  {
    id: 'dr-1',
    name: 'Special Kulhad Lassi',
    category: 'drinks',
    price: 140,
    description: 'Traditional thick churned yogurt lassi served chilled in an earthen terracotta kulhad with malai topping.',
    isSignature: true,
  },
  {
    id: 'dr-2',
    name: 'Homemade Masala Tea',
    category: 'drinks',
    price: 60,
    description: 'Freshly brewed loose-leaf Assam tea simmered with ginger, crushed green cardamom, and aromatic spices (Pot ₹110).',
    isHeritage: true,
  },
  {
    id: 'dr-3',
    name: 'Fresh Lime Soda (Sweet & Salt)',
    category: 'drinks',
    price: 90,
    description: 'Hand-squeezed fresh lime juice served with sparkling soda and roasted cumin salt.',
  },
  {
    id: 'dr-4',
    name: 'Peach & Mint Iced Tea',
    category: 'drinks',
    price: 170,
    description: 'Chilled steeped black tea infused with ripe orchard peaches and muddled garden mint.',
  },
  {
    id: 'dr-5',
    name: 'Hot Chocolate',
    category: 'drinks',
    price: 190,
    description: 'Rich dark cocoa cooked with full cream milk, perfect for crisp rooftop evening breezes.',
  },
];
