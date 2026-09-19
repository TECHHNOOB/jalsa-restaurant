/**
 * Authentic verified menu items from Jalsa Lake View Pure Veg Restaurant Udaipur
 * Source: Official Menu PDF (menu.pdf)
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
    description: 'Traditional Mewari Moong Dal Halwa, sizzling brownie, and refreshing ice creams.',
  },
  {
    id: 'drinks',
    name: 'Drinks & Refreshers',
    eyebrow: 'COOLERS & INFUSIONS',
    description: 'Handcrafted masala chai, thick kulhad lassi, iced teas, and signature mocktails.',
  },
];

export const MENU_ITEMS: MenuItem[] = [
  // STARTERS & TANDOOR (from menu.pdf pages 8, 9, 10)
  {
    id: 's-1',
    name: 'Paneer Jalsa Special',
    category: 'starters',
    price: 340,
    description: "Chef's signature cottage cheese preparation with rich house spices and glaze.",
    isSignature: true,
  },
  {
    id: 's-2',
    name: 'Jalsa Paneer 65',
    category: 'starters',
    price: 310,
    description: 'Cottage cheese cubes marinated in spices and tossed with a savory spiced mixture of aromatics.',
    isSignature: true,
    isSpicy: true,
  },
  {
    id: 's-3',
    name: 'Afghani Paneer Tikka',
    category: 'starters',
    price: 380,
    description: 'Paneer marinated with crushed pepper powder, lemon, ginger, and aromatic garlic.',
    isSignature: true,
  },
  {
    id: 's-4',
    name: 'Dahi Ke Kabab',
    category: 'starters',
    price: 360,
    description: 'Hung curd, cardamom powder, and bell peppers served with refreshing mint sauce.',
    isSignature: true,
    isJainFriendly: true,
  },
  {
    id: 's-5',
    name: 'Stuffed Tandoori Aaloo',
    category: 'starters',
    price: 320,
    description: 'Potatoes, hung curd, garam masala powder, tomato, and spices deep-fried to perfection.',
  },
  {
    id: 's-6',
    name: 'Hara Bhara Kabab',
    category: 'starters',
    price: 340,
    description: 'Snack made with fresh spinach, potatoes, green peas, aromatic spices, and herbs.',
  },
  {
    id: 's-7',
    name: 'Jalsa Marination Paneer Tikka',
    category: 'starters',
    price: 390,
    description: 'Succulent paneer cubes marinated in rich yogurt and secret royal Mewari spices.',
    isSignature: true,
  },
  {
    id: 's-8',
    name: 'Crispy Veg Salt & Pepper',
    category: 'starters',
    price: 280,
    description: 'Crisp garden vegetables seasoned with cracked sea salt and roasted pepper.',
  },
  {
    id: 's-9',
    name: 'Veg Spring Roll',
    category: 'starters',
    price: 340,
    description: 'Crispy golden rolls filled with savory mixed vegetable stuffing.',
  },
  {
    id: 's-10',
    name: 'Paneer Pakora',
    category: 'starters',
    price: 310,
    description: 'Double-battered spiced paneer fritters, crispy on the outside and tender inside.',
  },
  {
    id: 's-11',
    name: 'Honey Chilly Potato',
    category: 'starters',
    price: 320,
    description: 'Fried potato fingers tossed in a sweet-and-spicy sesame honey chilli glaze.',
    isSpicy: true,
  },

  // MAINS (from menu.pdf pages 12, 13, 14, 16)
  {
    id: 'm-1',
    name: 'Rajasthani Gutta Curry',
    category: 'mains',
    price: 320,
    description: 'Handmade gram flour dumplings in a spiced yogurt, onion, and cashew nut gravy.',
    isSignature: true,
    isHeritage: true,
  },
  {
    id: 'm-2',
    name: 'Jalsa Special Ker Sangri',
    category: 'mains',
    price: 430,
    description: 'Desert wild berries and dried beans slow-cooked with authentic pickled Mewari spices and yogurt.',
    isSignature: true,
    isHeritage: true,
  },
  {
    id: 'm-3',
    name: 'Mewari Bhindi',
    category: 'mains',
    price: 310,
    description: 'Fresh okra sautéed with tender spinach, spices, sweet onion, and vine tomato.',
    isHeritage: true,
  },
  {
    id: 'm-4',
    name: 'Paneer Butter Masala',
    category: 'mains',
    price: 340,
    description: 'Cottage cheese chunks in tangy tomato, cashew paste, onion, and fresh churned cream.',
    isJainFriendly: true,
  },
  {
    id: 'm-5',
    name: 'Paneer Lababdar',
    category: 'mains',
    price: 380,
    description: 'Cottage cheese cubes simmered in a tangy tomato and rich cashew paste gravy.',
    isSignature: true,
  },
  {
    id: 'm-6',
    name: 'Dal Makhani',
    category: 'mains',
    price: 360,
    description: 'Black lentils & kidney beans gently slow-simmered with whole herbs, butter, and cream.',
    isSignature: true,
  },
  {
    id: 'm-7',
    name: 'Malai Kofta',
    category: 'mains',
    price: 360,
    description: 'Potato stuffed with cottage cheese, vegetables, cashew, and raisin in royal cream curry.',
    isJainFriendly: true,
  },
  {
    id: 'm-8',
    name: 'Dal Palak',
    category: 'mains',
    price: 320,
    description: 'Lentils cooked with garden spinach & whole red chilli to give a delightful zest.',
  },
  {
    id: 'm-9',
    name: 'Chana Masala',
    category: 'mains',
    price: 320,
    description: 'Whole chickpeas cooked in a rich, robust semi-dry Indian masala gravy.',
    isSpicy: true,
  },
  {
    id: 'm-10',
    name: 'Kaju Curry',
    category: 'mains',
    price: 410,
    description: 'Roasted cashew nuts simmered in a luxurious creamy onion-tomato gravy.',
    isSignature: true,
  },
  {
    id: 'm-11',
    name: 'Special Thali (Mewari Delight)',
    category: 'mains',
    price: 1550,
    description: 'Royal feast of authentic Dal, Bati, Churma, and fresh buttermilk (served for minimum 2 persons).',
    isSignature: true,
    isHeritage: true,
  },
  {
    id: 'm-12',
    name: 'Vegetable Biryani',
    category: 'mains',
    price: 340,
    description: 'Special preparation of aged basmati rice with seasonal vegetables & Indian spices, served with raita.',
  },
  {
    id: 'm-13',
    name: 'Jeera Rice',
    category: 'mains',
    price: 240,
    description: 'Steamed basmati rice tempered with roasted cumin seeds and fresh coriander.',
  },
  {
    id: 'm-14',
    name: 'Steamed Basmati Rice',
    category: 'mains',
    price: 210,
    description: 'Fluffy long-grain royal basmati rice cooked to delicate perfection.',
  },

  // BREADS (from menu.pdf pages 15, 16)
  {
    id: 'b-1',
    name: 'Chur Chur Naan',
    category: 'breads',
    price: 110,
    description: 'A leavened, oven-baked flaky flatbread crushed with melted butter.',
    isSignature: true,
  },
  {
    id: 'b-2',
    name: 'Missi Roti',
    category: 'breads',
    price: 90,
    description: 'A soft savoury bread made from chickpeas & whole wheat flour, ajwain, and fenugreek.',
    isHeritage: true,
  },
  {
    id: 'b-3',
    name: 'Laccha Paratha',
    category: 'breads',
    price: 90,
    description: 'Layered paratha made by baking whole wheat dough on a tawa & finishing off with shallow frying.',
  },
  {
    id: 'b-4',
    name: 'Naan (Garlic / Butter / Cheese)',
    category: 'breads',
    price: 100,
    description: 'Traditional tandoor-baked Indian naan coated with salted butter and choice of topping.',
  },
  {
    id: 'b-5',
    name: 'Tandoori Roti (Plain / Butter)',
    category: 'breads',
    price: 30,
    description: 'Classic unleavened Indian bread made fresh in the clay tandoor (2 pcs per portion).',
  },
  {
    id: 'b-6',
    name: 'Tawa Roti (Plain / Butter)',
    category: 'breads',
    price: 20,
    description: 'Home-style whole wheat roti roasted over a flat griddle with pure butter.',
  },
  {
    id: 'b-7',
    name: 'Tandoori Bharwan Paratha',
    category: 'breads',
    price: 120,
    description: 'Stuffed tandoori paratha filled with potato, cauliflower, paneer, and aromatic spices.',
  },
  {
    id: 'b-8',
    name: 'Stuffed Kulcha',
    category: 'breads',
    price: 120,
    description: 'Soft & fluffy leavened bread generously stuffed with seasonal vegetables and herbs.',
  },

  // DESSERTS (from menu.pdf page 16)
  {
    id: 'd-1',
    name: 'Mewari Moong Dal Halwa',
    category: 'desserts',
    price: 210,
    description: 'Slow-roasted yellow lentils cooked in pure desi ghee, saffron milk, and cardamom.',
    isSignature: true,
    isHeritage: true,
  },
  {
    id: 'd-2',
    name: 'Gulab Jamun',
    category: 'desserts',
    price: 180,
    description: 'Soft warm khoya dumplings soaked in fragrant rose and green cardamom sugar syrup.',
  },
  {
    id: 'd-3',
    name: 'Gulab Jamun with Ice Cream',
    category: 'desserts',
    price: 240,
    description: 'Warm golden gulab jamuns served alongside chilled vanilla bean ice cream.',
    isSignature: true,
  },
  {
    id: 'd-4',
    name: 'Hot Sizzling Brownie',
    category: 'desserts',
    price: 280,
    description: 'Decadent chocolate walnut brownie served on a smoking hot iron sizzler plate.',
  },
  {
    id: 'd-5',
    name: 'Brownie with Ice-cream',
    category: 'desserts',
    price: 290,
    description: 'Rich dark fudge chocolate brownie accompanied by creamy vanilla ice cream.',
  },
  {
    id: 'd-6',
    name: 'Choice of Ice Cream',
    category: 'desserts',
    price: 180,
    description: 'Generous scoop of artisanal ice cream (Vanilla, Chocolate, Mango, or Strawberry).',
  },

  // DRINKS & REFRESHERS (from menu.pdf pages 4, 5)
  {
    id: 'dr-1',
    name: 'Lassi (Sweet / Salted)',
    category: 'drinks',
    price: 130,
    description: 'Classic churned creamy yogurt drink served ice-cold (Mango / Banana Lassi ₹150).',
    isSignature: true,
  },
  {
    id: 'dr-2',
    name: 'Home Made Masala Tea',
    category: 'drinks',
    price: 60,
    description: 'Fresh tea brewed with fragrant ginger, cloves, and crushed cardamom (Pot ₹110).',
    isHeritage: true,
  },
  {
    id: 'dr-3',
    name: 'Fresh Lime Soda / Water',
    category: 'drinks',
    price: 90,
    description: 'Freshly squeezed lime with your choice of sparkling soda or chilled water (Sweet & Salt).',
  },
  {
    id: 'dr-4',
    name: 'Choice of Ice Tea',
    category: 'drinks',
    price: 170,
    description: 'Refreshing iced tea in Cranberry, Lime, Orange, or Peach flavor.',
  },
  {
    id: 'dr-5',
    name: 'Cold Coffee',
    category: 'drinks',
    price: 190,
    description: 'Thick chilled coffee blended with milk, chocolate drizzle, and vanilla ice cream.',
  },
  {
    id: 'dr-6',
    name: 'Hot Chocolate',
    category: 'drinks',
    price: 190,
    description: 'Rich velvety hot chocolate crafted from whole milk and fine Dutch cocoa.',
  },
  {
    id: 'dr-7',
    name: 'Virgin Mojito Mocktail',
    category: 'drinks',
    price: 300,
    description: 'Muddled garden mint, freshly squeezed lemon, blended with ice and topped with sparkling soda.',
    isSignature: true,
  },
  {
    id: 'dr-8',
    name: 'Blue Lagoon Mocktail',
    category: 'drinks',
    price: 320,
    description: 'Curacao citrus blend, fresh lemon juice crushed with ice, and topped with Sprite.',
  },
  {
    id: 'dr-9',
    name: 'Pino Colodo Mocktail',
    category: 'drinks',
    price: 350,
    description: 'Virgin creamy Caribbean drink made with pineapple juice, coconut milk, and vanilla ice cream.',
  },
];
