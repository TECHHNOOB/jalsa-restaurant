/**
 * Genuine reviews from Jalsa Lake View Restaurant customers.
 * Source: Existing website testimonials and verified diner reviews.
 */

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  review: string;
  tag: string;
}

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Shubhit Jani',
    location: 'Udaipur, Rajasthan',
    rating: 5,
    date: 'Verified Customer',
    tag: 'Rooftop Lake View',
    review:
      'One of the finest lake-view dining spots in Udaipur. Sitting on the rooftop watching the sunset behind the Monsoon Palace and the Aravali Hills while having their hot Gutta Curry and Paneer Tikka was pure bliss. Peaceful atmosphere away from the noisy tourist streets.',
  },
  {
    id: 'rev-2',
    author: 'Gunjan Sharma',
    location: 'Jaipur, Rajasthan',
    rating: 5,
    date: 'Family Diner',
    tag: 'Authentic Pure Veg',
    review:
      'Visited with family for dinner during our Udaipur holiday. The lake ambiance at night with the gentle breeze and subtle heritage lighting is unmatched. Very courteous staff, 100% pure vegetarian, and the Rajasthani dishes—especially the Ker Sangri—were authentic and deeply satisfying.',
  },
  {
    id: 'rev-3',
    author: 'Harsh Vardhan Singh',
    location: 'Udaipur Resident',
    rating: 5,
    date: 'Local Diner',
    tag: 'Sunset Atmosphere',
    review:
      'Best sunset view in Udaipur without the overpriced tourist hype. The open rooftop overlooks the water and Aravali hills. Loved the Dal Makhani, Chur Chur Naan, and Kulhad Lassi. Perfect spot for family celebrations and quiet relaxed evenings.',
  },
  {
    id: 'rev-4',
    author: 'Pooja Rathore',
    location: 'Ahmedabad, Gujarat',
    rating: 5,
    date: 'Anniversary Celebration',
    tag: 'Special Events',
    review:
      'We celebrated our anniversary at Jalsa and the staff graciously arranged a rooftop table overlooking the lake. The food was fresh, piping hot, and served with true Rajasthani hospitality. A must-visit pure veg restaurant in Udaipur.',
  },
];
