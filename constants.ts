
import { ServiceItem, Review, GalleryItem } from './types';

export const BUSINESS_INFO = {
  name: "M7 Barber Kippax",
  phone: "+61 450 786 666",
  instagram: "https://instagram.com/m7_barbers?igsh=MXA3NWgzeHFhaXFvbQ==&utm_source=qr",
  address: "Shop 1, 12/16 Hardwick Cres, Holt ACT 2615, Australia",
  hours: [
    { day: "Monday", hours: "9:00 AM - 6:00 PM" },
    { day: "Tuesday", hours: "9:00 AM - 6:00 PM" },
    { day: "Wednesday", hours: "9:00 AM - 6:00 PM" },
    { day: "Thursday", hours: "9:00 AM - 7:30 PM" },
    { day: "Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "10:00 AM - 3:00 PM" }
  ]
};

export const SERVICES: ServiceItem[] = [
  {
    id: '1',
    title: "The Signature Fade",
    category: 'Cut',
    description: "Our hallmark service. Precise skin-to-length transitions tailored to your head shape. Includes neck shave and product finish."
  },
  {
    id: '2',
    title: "Executive Scissor Cut",
    category: 'Cut',
    description: "A timeless, classic approach. Skilled hand-crafted layering for those who prefer length and texture without the clipper finish."
  },
  {
    id: '3',
    title: "Beard Sculpture & Trim",
    category: 'Style',
    description: "Defining lines and removing bulk. We map your beard to your face structure for the sharpest silhouette in Kippax."
  },
  {
    id: '4',
    title: "Traditional Hot Towel Shave",
    category: 'Shave',
    description: "The ultimate grooming ritual. Multiple hot towels, premium lather, and a straight-razor finish for unparalleled smoothness."
  },
  {
    id: '5',
    title: "M7 Premium Package",
    category: 'Premium',
    description: "The works. Signature Fade, Beard Trim, and a Mini Facial with hot towels. Walk out feeling like a new man."
  }
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    name: "James T.",
    rating: 5,
    comment: "Hands down the best fade I've had in Canberra. The attention to detail at M7 is second to none. Truly professional atmosphere.",
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "Mark Wilson",
    rating: 5,
    comment: "Excellent service. The boys really know their craft. Highly recommend for anyone looking for a premium barber experience in Holt.",
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Aiden R.",
    rating: 5,
    comment: "Found my new regular spot. Professional, clean, and a great vibe. The beard trim was perfect.",
    date: "3 days ago"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 1, url: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1470&auto=format&fit=crop', caption: 'Sharp Skin Fade & Line Up' },
  { id: 2, url: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=1474&auto=format&fit=crop', caption: 'Classic Taper & Scissor Work' },
  { id: 3, url: 'https://images.unsplash.com/photo-1621605815841-db897c453302?q=80&w=1470&auto=format&fit=crop', caption: 'Traditional Hot Towel Experience' },
  { id: 4, url: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1288&auto=format&fit=crop', caption: 'Beard Sculpting Excellence' },
  { id: 5, url: 'https://images.unsplash.com/photo-1532710093739-9470acff878f?q=80&w=1470&auto=format&fit=crop', caption: 'Premium Grooming Products' },
  { id: 6, url: 'https://images.unsplash.com/photo-1512690136236-73069662a4b0?q=80&w=1470&auto=format&fit=crop', caption: 'The M7 Interior Vibe' }
];
