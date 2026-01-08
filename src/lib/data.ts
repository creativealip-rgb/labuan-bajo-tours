// Tour Packages Data
export interface TourPackage {
  id: string;
  title: string;
  location: string;
  duration: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  featured?: boolean;
}

export const tourPackages: TourPackage[] = [
  {
    id: "1",
    title: "Pulau Komodo & Padar",
    location: "Taman Nasional Komodo",
    duration: "2 Hari 1 Malam",
    price: 2500000,
    originalPrice: 3000000,
    rating: 4.9,
    reviews: 328,
    image: "/images/komodo.jpg",
    featured: true,
  },
  {
    id: "2",
    title: "Pink Beach Adventure",
    location: "Pantai Pink, Komodo",
    duration: "1 Hari",
    price: 1200000,
    rating: 4.8,
    reviews: 245,
    image: "/images/pink-beach.jpg",
  },
  {
    id: "3",
    title: "Manta Point Snorkeling",
    location: "Manta Point",
    duration: "1 Hari",
    price: 1500000,
    rating: 4.9,
    reviews: 412,
    image: "/images/manta.jpg",
    featured: true,
  },
  {
    id: "4",
    title: "Sunrise at Padar Island",
    location: "Pulau Padar",
    duration: "2 Hari 1 Malam",
    price: 3000000,
    originalPrice: 3500000,
    rating: 5.0,
    reviews: 189,
    image: "/images/padar.jpg",
  },
];

// Destinations Data
export interface Destination {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const destinations: Destination[] = [
  {
    id: "1",
    name: "Pulau Komodo",
    description: "Rumah bagi komodo, kadal terbesar di dunia",
    image: "/images/dest-komodo.jpg",
  },
  {
    id: "2",
    name: "Pulau Padar",
    description: "Pemandangan tiga teluk yang ikonik",
    image: "/images/dest-padar.jpg",
  },
  {
    id: "3",
    name: "Pink Beach",
    description: "Pantai pasir merah muda yang langka",
    image: "/images/dest-pink.jpg",
  },
  {
    id: "4",
    name: "Manta Point",
    description: "Berenang bersama pari manta raksasa",
    image: "/images/dest-manta.jpg",
  },
  {
    id: "5",
    name: "Gili Laba",
    description: "Trekking dengan view spektakuler",
    image: "/images/dest-gili.jpg",
  },
  {
    id: "6",
    name: "Taka Makassar",
    description: "Pulau pasir putih di tengah laut",
    image: "/images/dest-taka.jpg",
  },
];

// Statistics
export const statistics = [
  { value: "5000+", label: "Wisatawan Puas" },
  { value: "50+", label: "Destinasi Terjelajahi" },
  { value: "99%", label: "Review Positif" },
];

// FAQ Data
export interface FAQ {
  question: string;
  answer: string;
}

export const faqData: FAQ[] = [
  {
    question: "Bagaimana cara melakukan booking?",
    answer:
      "Anda bisa melakukan booking melalui WhatsApp kami atau mengisi form di website. Tim kami akan menghubungi Anda dalam waktu 1x24 jam untuk konfirmasi.",
  },
  {
    question: "Apa saja yang termasuk dalam paket tour?",
    answer:
      "Paket tour kami sudah termasuk transportasi laut (kapal), makan sesuai paket, tiket masuk taman nasional, peralatan snorkeling, dan guide berpengalaman.",
  },
  {
    question: "Bagaimana kebijakan pembatalan?",
    answer:
      "Pembatalan H-7 mendapat refund 100%, H-3 mendapat refund 50%, dan kurang dari H-3 tidak dapat refund. Reschedule bisa dilakukan dengan konfirmasi minimal H-3.",
  },
  {
    question: "Apa yang harus saya bawa?",
    answer:
      "Bawa sunscreen, topi, kacamata hitam, pakaian ganti, sandal, dan kamera. Untuk trekking, gunakan sepatu yang nyaman.",
  },
  {
    question: "Kapan waktu terbaik untuk berkunjung?",
    answer:
      "Waktu terbaik adalah April-Desember saat musim kering. Visibility untuk snorkeling paling baik di bulan Mei-September.",
  },
];

// Testimonials
export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  image: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Rina Wijaya",
    location: "Jakarta",
    text: "Pengalaman yang luar biasa! Guide sangat profesional dan pemandangannya tak terlupakan.",
    image: "/images/testimonial-1.jpg",
    rating: 5,
  },
  {
    id: "2",
    name: "Budi Santoso",
    location: "Surabaya",
    text: "Trip terbaik yang pernah saya ikuti. Melihat manta ray secara langsung adalah impian yang jadi kenyataan!",
    image: "/images/testimonial-2.jpg",
    rating: 5,
  },
  {
    id: "3",
    name: "Sarah Chen",
    location: "Singapore",
    text: "Amazing experience! The sunrise at Padar Island was breathtaking. Highly recommended!",
    image: "/images/testimonial-3.jpg",
    rating: 5,
  },
];

// Format price to Indonesian Rupiah
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};
