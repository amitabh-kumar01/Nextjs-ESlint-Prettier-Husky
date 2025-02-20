import HomePage from '@/routes/homePage';
import React from 'react';

export const metadata = {
  title: 'Mextodo | Multivendor eCommerce Platform',
  description:
    'Buy and sell physical products, digital goods, vehicles, and properties on Mextodo. Explore top deals from trusted sellers.',
  keywords: [
    'Mextodo',
    'eCommerce',
    'Multivendor',
    'Online Store',
    'Buy',
    'Sell',
    'Vehicles',
    'Properties',
    'Digital Products',
  ],
  authors: [{ name: 'Mextodo Team' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Mextodo | Multivendor eCommerce',
    description: 'Shop and sell physical, digital, and more on Mextodo.',
    url: 'https://mextodo.com',
    siteName: 'Mextodo',
    images: [
      {
        url: 'https://your-deta-drive.deta.app/og-image.jpg', // Deta-hosted image
        width: 1200,
        height: 630,
        alt: 'Mextodo eCommerce',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mextodo | Multivendor eCommerce',
    description: 'Shop and sell physical, digital, and more on Mextodo.',
    images: ['https://your-deta-drive.deta.app/og-image.jpg'],
  },
};

const page = () => {
  return <HomePage />;
};

export default page;
