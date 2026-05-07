export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  priceNumeric: number; // For filtering
  beds: number;
  baths: number;
  sqft: string;
  floors?: number;
  type: 'House' | 'Apartment' | 'Penthouse';
  imageUrl: string;
  isVerified: boolean;
  description?: string;
  agentId: string;
}

export interface Agent {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  reviewsCount: number;
  experience: string;
  listingsCount: number;
  salesVolume: string;
  imageUrl: string;
  bio: string;
}

export const AGENTS: Agent[] = [
  {
    id: 'agent-1',
    name: 'Hamza Al-Fayed',
    role: 'Senior Portfolio Curator',
    location: 'Islamabad',
    rating: 4.9,
    reviewsCount: 124,
    experience: '12+',
    listingsCount: 84,
    salesVolume: '4.2B',
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200',
    bio: "Hamza's professionalism is unmatched in the Islamabad market. He understood exactly what we were looking for in an investment property and guided us through the PKR 150M transaction flawlessly."
  },
  {
    id: 'agent-2',
    name: 'Ahmed Mansoor',
    role: 'Platinum Listing Agent',
    location: 'Karachi',
    rating: 4.8,
    reviewsCount: 98,
    experience: '10+',
    listingsCount: 65,
    salesVolume: '3.1B',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200',
    bio: "Expert in high-end coastal properties and DHA developments."
  }
];

export const PROPERTIES: Property[] = [
  {
    id: 'prop-1',
    title: 'The Obsidian Manor',
    location: 'Sector E-7, Islamabad',
    price: 'PKR 45.0 Cr',
    priceNumeric: 450000000,
    beds: 6,
    baths: 8,
    sqft: '1200 SQ.YD',
    floors: 3,
    type: 'House',
    imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200',
    isVerified: true,
    agentId: 'agent-1',
    description: "Situated in the most prestigious enclave of Sector E-7, The Obsidian Manor is a masterpiece of contemporary architecture. This tri-level residence offers unparalleled views of the Margalla Hills and features imported Italian marble, a private cinema, and a climate-controlled infinity pool."
  },
  {
    id: 'prop-2',
    title: 'Modernist Oasis',
    location: 'DHA Ph 8, Karachi',
    price: 'PKR 8.5 Crore',
    priceNumeric: 85000000,
    beds: 4,
    baths: 5,
    sqft: '500 SQ.YD',
    type: 'House',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    isVerified: true,
    agentId: 'agent-2'
  },
  {
    id: 'prop-3',
    title: 'The Opal Manor',
    location: 'Sector E-7, Islamabad',
    price: 'PKR 3.5 Cr',
    priceNumeric: 35000000,
    beds: 4,
    baths: 5,
    sqft: '500 SQ.YD',
    type: 'House',
    imageUrl: 'https://images.unsplash.com/photo-1600607687940-c52af0491823?auto=format&fit=crop&q=80&w=1200',
    isVerified: true,
    agentId: 'agent-1'
  },
  {
    id: 'prop-4',
    title: 'Regency Heights',
    location: 'DHA Phase 6, Lahore',
    price: 'PKR 4.8 Cr',
    priceNumeric: 48000000,
    beds: 5,
    baths: 6,
    sqft: '1 Kanal',
    type: 'House',
    imageUrl: 'https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?auto=format&fit=crop&q=80&w=1200',
    isVerified: true,
    agentId: 'agent-1'
  },
  {
    id: 'prop-5',
    title: 'Emaar Oceanfront',
    location: 'DHA Phase 8, Karachi',
    price: 'PKR 4.2 Crore',
    priceNumeric: 42000000,
    beds: 3,
    baths: 3,
    sqft: '2500 SQ.FT',
    type: 'Apartment',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
    isVerified: true,
    agentId: 'agent-2'
  },
  {
    id: 'prop-6',
    title: 'Skyloft Penthouse',
    location: 'Gulberg III, Lahore',
    price: 'PKR 2.5 Cr',
    priceNumeric: 25000000,
    beds: 3,
    baths: 4,
    sqft: '3000 SQ.FT',
    type: 'Penthouse',
    imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1200',
    isVerified: true,
    agentId: 'agent-1'
  },
  {
    id: 'prop-7',
    title: 'The Azure Villa',
    location: 'Bani Gala, Islamabad',
    price: 'PKR 12.0 Cr',
    priceNumeric: 120000000,
    beds: 5,
    baths: 6,
    sqft: '2 Kanal',
    type: 'House',
    imageUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=1200',
    isVerified: true,
    agentId: 'agent-1'
  },
  {
    id: 'prop-8',
    title: 'Creek Vistas',
    location: 'DHA Phase 8, Karachi',
    price: 'PKR 6.5 Crore',
    priceNumeric: 65000000,
    beds: 3,
    baths: 4,
    sqft: '2800 SQ.FT',
    type: 'Apartment',
    imageUrl: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=1200',
    isVerified: true,
    agentId: 'agent-2'
  },
  {
    id: 'prop-9',
    title: 'Marquis Estate',
    location: 'Sector F-7, Islamabad',
    price: 'PKR 28.0 Cr',
    priceNumeric: 280000000,
    beds: 7,
    baths: 9,
    sqft: '1500 SQ.YD',
    type: 'House',
    imageUrl: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1200',
    isVerified: true,
    agentId: 'agent-1'
  },
  {
    id: 'prop-10',
    title: 'Luxury Heights',
    location: 'Clifton, Karachi',
    price: 'PKR 3.2 Cr',
    priceNumeric: 32000000,
    beds: 3,
    baths: 3,
    sqft: '2200 SQ.FT',
    type: 'Apartment',
    imageUrl: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80&w=1200',
    isVerified: true,
    agentId: 'agent-2'
  },
  {
    id: 'prop-11',
    title: 'Garden Residence',
    location: 'Model Town, Lahore',
    price: 'PKR 5.5 Cr',
    priceNumeric: 55000000,
    beds: 4,
    baths: 4,
    sqft: '1 Kanal',
    type: 'House',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    isVerified: true,
    agentId: 'agent-1'
  },
  {
    id: 'prop-12',
    title: 'The Pearl Penthouse',
    location: 'DHA Phase 6, Karachi',
    price: 'PKR 9.0 Cr',
    priceNumeric: 90000000,
    beds: 4,
    baths: 5,
    sqft: '4500 SQ.FT',
    type: 'Penthouse',
    imageUrl: 'https://images.unsplash.com/photo-1600607687940-c52af0491823?auto=format&fit=crop&q=80&w=1200',
    isVerified: true,
    agentId: 'agent-2'
  },
  {
    id: 'prop-13',
    title: 'Evergreen Estate',
    location: 'Sector G-10, Islamabad',
    price: 'PKR 7.2 Cr',
    priceNumeric: 72000000,
    beds: 5,
    baths: 5,
    sqft: '600 SQ.YD',
    type: 'House',
    imageUrl: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&q=80&w=1200',
    isVerified: true,
    agentId: 'agent-1'
  },
  {
    id: 'prop-14',
    title: 'Marine Drive Apt',
    location: 'Clifton, Karachi',
    price: 'PKR 4.5 Cr',
    priceNumeric: 45000000,
    beds: 3,
    baths: 3,
    sqft: '2400 SQ.FT',
    type: 'Apartment',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-f1d3c5b5a57b?auto=format&fit=crop&q=80&w=1200',
    isVerified: true,
    agentId: 'agent-2'
  },
  {
    id: 'prop-15',
    title: 'Royal Enclave',
    location: 'Bahria Town, Lahore',
    price: 'PKR 6.8 Cr',
    priceNumeric: 68000000,
    beds: 5,
    baths: 6,
    sqft: '1 Kanal',
    type: 'House',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
    isVerified: true,
    agentId: 'agent-1'
  },
  {
    id: 'prop-16',
    title: 'The Glass House',
    location: 'Sector F-6, Islamabad',
    price: 'PKR 35.0 Cr',
    priceNumeric: 350000000,
    beds: 4,
    baths: 5,
    sqft: '1000 SQ.YD',
    type: 'House',
    imageUrl: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&q=80&w=1200',
    isVerified: true,
    agentId: 'agent-1'
  },
  {
    id: 'prop-17',
    title: 'Harbor Lights',
    location: 'DHA Phase 8, Karachi',
    price: 'PKR 5.2 Cr',
    priceNumeric: 52000000,
    beds: 3,
    baths: 3,
    sqft: '2100 SQ.FT',
    type: 'Apartment',
    imageUrl: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80&w=1200',
    isVerified: true,
    agentId: 'agent-2'
  },
  {
    id: 'prop-18',
    title: 'Heritage Villa',
    location: 'DHA Phase 5, Lahore',
    price: 'PKR 8.2 Cr',
    priceNumeric: 82000000,
    beds: 5,
    baths: 5,
    sqft: '1 Kanal',
    type: 'House',
    imageUrl: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=1200',
    isVerified: true,
    agentId: 'agent-1'
  },
  {
    id: 'prop-19',
    title: 'Skyview Suites',
    location: 'Gulberg, Lahore',
    price: 'PKR 1.8 Cr',
    priceNumeric: 18000000,
    beds: 2,
    baths: 2,
    sqft: '1500 SQ.FT',
    type: 'Apartment',
    imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1200',
    isVerified: true,
    agentId: 'agent-2'
  },
  {
    id: 'prop-20',
    title: 'The Manor House',
    location: 'DHA Phase 6, Lahore',
    price: 'PKR 15.0 Cr',
    priceNumeric: 150000000,
    beds: 6,
    baths: 7,
    sqft: '2 Kanal',
    type: 'House',
    imageUrl: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=1200',
    isVerified: true,
    agentId: 'agent-1'
  },
  {
    id: 'prop-21',
    title: 'Ocean Breeze',
    location: 'DHA Phase 8, Karachi',
    price: 'PKR 7.8 Cr',
    priceNumeric: 78000000,
    beds: 4,
    baths: 4,
    sqft: '3200 SQ.FT',
    type: 'Apartment',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
    isVerified: true,
    agentId: 'agent-2'
  },
  {
    id: 'prop-22',
    title: 'The Summit',
    location: 'Islamabad Expressway',
    price: 'PKR 2.2 Cr',
    priceNumeric: 22000000,
    beds: 2,
    baths: 2,
    sqft: '1800 SQ.FT',
    type: 'Apartment',
    imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=1200',
    isVerified: true,
    agentId: 'agent-1'
  },
  {
    id: 'prop-23',
    title: 'Lakeside Manor',
    location: 'DHA Phase 1, Islamabad',
    price: 'PKR 9.5 Cr',
    priceNumeric: 95000000,
    beds: 5,
    baths: 6,
    sqft: '1 Kanal',
    type: 'House',
    imageUrl: 'https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?auto=format&fit=crop&q=80&w=1200',
    isVerified: true,
    agentId: 'agent-1'
  },
  {
    id: 'prop-24',
    title: 'Zen Garden Villa',
    location: 'Sector E-11, Islamabad',
    price: 'PKR 4.2 Cr',
    priceNumeric: 42000000,
    beds: 4,
    baths: 4,
    sqft: '500 SQ.YD',
    type: 'House',
    imageUrl: 'https://images.unsplash.com/photo-1600585154526-990dcea4db0d?auto=format&fit=crop&q=80&w=1200',
    isVerified: true,
    agentId: 'agent-1'
  },
  {
    id: 'prop-25',
    title: 'Grand City Apt',
    location: 'DHA Phase 2, Islamabad',
    price: 'PKR 1.2 Cr',
    priceNumeric: 12000000,
    beds: 2,
    baths: 2,
    sqft: '1200 SQ.FT',
    type: 'Apartment',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-f1d3c5b5a57b?auto=format&fit=crop&q=80&w=1200',
    isVerified: true,
    agentId: 'agent-2'
  }
];

