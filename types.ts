
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  category: 'Cut' | 'Shave' | 'Style' | 'Premium';
}

export interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export interface GalleryItem {
  id: number;
  url: string;
  caption: string;
}
