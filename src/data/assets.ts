/**
 * Genuine verified WordPress media assets from https://jalsaudaipur.com/
 * These are the actual real restaurant photographs, food photography, and brand assets.
 */

export interface JalsaImage {
  id: string;
  url: string;
  title: string;
  alt: string;
  caption?: string;
  category: 'lake-view' | 'rooftop' | 'interior' | 'food' | 'evening' | 'ambience';
  width?: number;
  height?: number;
  aspect?: 'landscape' | 'portrait' | 'square' | 'wide';
}

export const ASSETS = {
  // Brand Logo
  logo: {
    primary: '/assets/cropped-Jalsa-2-1.png',
    full: '/assets/Jalsa-2.png',
    favicon: '/assets/cropped-Jalsa-2-180x180.png',
  },

  // Official PDF Menu
  menuPdf: '/assets/Menu-Jalsa-Lake-View-Pure-Veg-Restaurant-1-2.pdf',

  // Hero Image: Panoramic Lake View Rooftop Dining
  hero: {
    url: '/assets/IMG_4389-1-scaled.jpg',
    alt: 'Jalsa Udaipur Rooftop Dining Overlooking Lake Pichola and Aravali Hills',
    title: 'Rooftop Lake View',
  },

  // Introduction Image
  intro: {
    url: '/assets/2023-12-28.jpg',
    alt: 'Rooftop dining tables at Jalsa Udaipur with serene lake backdrop',
    title: 'Rooftop Dining Table',
  },

  // The View Cinematic
  theView: {
    url: '/assets/20240529_181054-01.jpeg',
    alt: 'Sunset over Lake Pichola and Monsoon Palace from Jalsa Udaipur Rooftop',
    title: 'Sunset over Udaipur',
  },

  // Experiences
  experience: {
    rooftop: {
      url: '/assets/IMG_4389-1-scaled.jpg',
      alt: 'Rooftop dining with panoramic views of Lake Pichola',
      title: 'Rooftop Dining',
    },
    family: {
      url: '/assets/IMG-20230425-WA0006.jpg',
      alt: 'Welcoming family dining atmosphere at Jalsa Udaipur',
      title: 'Family Dining',
    },
    celebrations: {
      url: '/assets/IMG_20230206_200613_617.webp',
      alt: 'Evening celebrations and ambient lighting at Jalsa Udaipur',
      title: 'Celebrations & Gatherings',
    },
  },

  // About Section Image
  about: {
    url: '/assets/IMG_20230126_102605_666.jpg',
    alt: 'Jalsa Lake View Restaurant Udaipur architectural heritage and dining area',
    title: 'Heritage Setting',
  },

  // Signature Dishes (Real Food Photography from Jalsa)
  signatureFood: [
    {
      id: 'ker-sangri',
      title: 'Rajasthani Ker Sangri',
      subtitle: "The Desert's Best-Kept Secret",
      description: 'Dried desert berries and wild beans slow-cooked in traditional Mewari spices, served with bajra roti.',
      price: 380,
      image: '/assets/rajasthani-ker-sangri-dish-by-jalsa-udaipur.png',
      badge: 'Heritage Classic',
    },
    {
      id: 'paneer-jalsa-special',
      title: 'Paneer Jalsa Special',
      subtitle: "Chef's Signature Creation",
      description: 'Succulent cubes of fresh cottage cheese simmered in a velvety, richly spiced secret house gravy.',
      price: 380,
      image: '/assets/paneer-jalsa-special.png',
      badge: "House Signature",
    },
    {
      id: 'jalsa-paneer-65',
      title: 'Jalsa Paneer 65',
      subtitle: 'Crispy & Aromatic Starter',
      description: 'Paneer cubes marinated in aromatic spices and yogurt, tossed with fragrant curry leaves and mustard seeds.',
      price: 340,
      image: '/assets/jalsa-paneer-65.png',
      badge: 'Guest Favorite',
    },
    {
      id: 'gutta-curry',
      title: 'Rajasthani Gutta Curry',
      subtitle: 'Traditional Mewari Comfort',
      description: 'Tender handmade gram flour dumplings simmered in a tangy spiced yogurt and cashew nut gravy.',
      price: 320,
      image: '/assets/Untitled-design-11.png',
      badge: 'Traditional Delight',
    },
  ],

  // Events Section Image
  events: {
    url: '/assets/2022-03-22.jpg',
    alt: 'Celebration and event setup on Jalsa rooftop overlooking the lake',
    title: 'Events at Jalsa',
  },

  // Final CTA
  finalCta: {
    url: '/assets/20240529_181054-01.jpeg',
    alt: 'Golden hour sunset over Udaipur from Jalsa rooftop',
    title: 'Sunset at Jalsa Udaipur',
  },

  // Gallery: Curated Editorial Masonry Grid (All Real WP Media with verified descriptions)
  gallery: [
    {
      id: 'g-1',
      url: '/assets/IMG_4389-1-scaled.jpg',
      title: 'Panoramic Lake Pichola Rooftop Deck',
      alt: 'Rooftop dining tables facing Lake Pichola and Aravali hills at Jalsa Udaipur',
      caption: 'Uninterrupted vistas of the Aravali range and Lake Pichola from our open rooftop terrace.',
      category: 'lake-view',
      width: 2560,
      height: 1707,
      aspect: 'landscape',
    },
    {
      id: 'g-2',
      url: '/assets/2024-03-05.jpg',
      title: 'Smoky Tandoori Paneer Tikka by the Lake',
      alt: 'Char-grilled Paneer Tikka with mint chutney on rooftop terrace overlooking night lights of Udaipur',
      caption: 'Succulent spiced cottage cheese chargrilled to perfection, served with pudina chutney against the night skyline.',
      category: 'food',
      width: 768,
      height: 1020,
      aspect: 'portrait',
    },
    {
      id: 'g-3',
      url: '/assets/IMG_20230126_102605_666.jpg',
      title: 'Sunset Terrace Overlooking Old Udaipur',
      alt: 'Sunset dining terrace with white parasols and panoramic views of Udaipur skyline',
      caption: 'Charming rooftop tables bathed in the warm glow of dusk overlooking heritage lakeside monuments.',
      category: 'rooftop',
      width: 1423,
      height: 1423,
      aspect: 'square',
    },
    {
      id: 'g-4',
      url: '/assets/2024-03-03.jpg',
      title: 'Creamy Penne Alfredo with Garlic Toast',
      alt: 'Chef-crafted white sauce pasta topped with black olives, broccoli, and crisp garlic bread',
      caption: 'Rich, velvety continental pasta tossed with fresh broccoli florets, olives, and toasted artisan bread.',
      category: 'food',
      width: 787,
      height: 1020,
      aspect: 'portrait',
    },
    {
      id: 'g-5',
      url: '/assets/20201229_033757.jpg',
      title: 'Sunset Viewpoint with Jalsa Signature',
      alt: 'Jalsa Udaipur viewpoint overlooking Aravali hills and lake at sunset with vintage street lamps',
      caption: 'The iconic golden sunset terrace framed by ornamental vintage lamps and tranquil mountain contours.',
      category: 'lake-view',
      width: 1080,
      height: 720,
      aspect: 'landscape',
    },
    {
      id: 'g-6',
      url: '/assets/20240529_181054-01.jpeg',
      title: 'Illuminated Rajasthani Jharokhas & Night Deck',
      alt: 'Sandstone Rajasthani jharokhas illuminated warmly with rooftop tables and spiral staircase',
      caption: 'Intricate Mewari archways bathed in warm ambient lanterns as night settles over Udaipur.',
      category: 'evening',
      width: 1360,
      height: 1020,
      aspect: 'landscape',
    },
    {
      id: 'g-7',
      url: '/assets/IMG_3812-1.jpg',
      title: 'Royal Tandoori Starters Platter',
      alt: 'Chef special tandoori platter with stuffed spiced aloo, paneer tikka, and laccha onions',
      caption: 'An opulent sampler of house tandoori specialities paired with cooling mint dip and pickled onions.',
      category: 'food',
      width: 1075,
      height: 1183,
      aspect: 'square',
    },
    {
      id: 'g-8',
      url: '/assets/IMG-20230425-WA0006.jpg',
      title: 'Daylight Atmosphere on Checkered Deck',
      alt: 'Sunlit marble checkered terrace with umbrellas and lake breeze at Jalsa Udaipur',
      caption: 'Sun-drenched black-and-white marble floor with parasols catching the cool breeze off the lake.',
      category: 'rooftop',
      width: 1600,
      height: 1204,
      aspect: 'landscape',
    },
    {
      id: 'g-9',
      url: '/assets/2023-12-28.jpg',
      title: 'Starlit Rooftop Celebrations with Live Music',
      alt: 'Vibrant evening celebrations with live musicians, diners, and sparkling lake reflections',
      caption: 'Festive dining on the multi-tiered terrace with live sitar melodies under the stars.',
      category: 'evening',
      width: 1049,
      height: 1020,
      aspect: 'portrait',
    },
    {
      id: 'g-10',
      url: '/assets/2024-03-06.jpg',
      title: 'Wok-Tossed Chilli Paneer Gravy',
      alt: 'Indo-Chinese style chilli paneer tossed in aromatic soy glaze with fresh capsicum and onions',
      caption: 'Tender cottage cheese cubes tossed in a rich, glossy gravy with bell peppers and mild Mewari spices.',
      category: 'food',
      width: 930,
      height: 1020,
      aspect: 'portrait',
    },
    {
      id: 'g-11',
      url: '/assets/2022-03-22.jpg',
      title: 'Family Dining by Night Lake Reflections',
      alt: 'Families seated for dinner on the rooftop terrace with illuminated city reflections across the lake',
      caption: 'Cherished family dinners with panoramic vistas of shimmering Udaipur water and ghats.',
      category: 'evening',
      width: 1354,
      height: 1020,
      aspect: 'landscape',
    },
    {
      id: 'g-12',
      url: '/assets/2023-12-13.jpg',
      title: 'Crispy Hara Bhara Kababs with Chutney',
      alt: 'Spiced spinach and green pea kababs with mint chutney, salad, and lemon wedge',
      caption: 'Golden fried patties of spinach and garden peas, seasoned with roasted cumin and amchur.',
      category: 'food',
      width: 1060,
      height: 1020,
      aspect: 'square',
    },
    {
      id: 'g-13',
      url: '/assets/IMG_20230206_200613_617.webp',
      title: 'Ambient Fairy Lights & Lake Breeze',
      alt: 'Rooftop dining illuminated with soft ambient lanterns and evening lake atmosphere',
      caption: 'Quiet corners on the terrace with soft ambient glow perfect for peaceful romantic dinners.',
      category: 'rooftop',
      width: 1440,
      height: 1440,
      aspect: 'square',
    },
    {
      id: 'g-14',
      url: '/assets/2023-12-31.jpg',
      title: 'Mughlai Shahi Paneer Butter Masala',
      alt: 'Rich tomato and cashew nut curry topped with cream and fresh coriander',
      caption: 'Velvety, slow-simmered gravy made with fresh cottage cheese and fragrant whole spices.',
      category: 'food',
      width: 765,
      height: 1020,
      aspect: 'portrait',
    },
  ] as JalsaImage[],
};
