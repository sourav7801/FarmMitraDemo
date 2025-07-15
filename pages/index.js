import React from 'react';
import Link from 'next/link';
import LanguageToggle from '../components/LanguageToggle';

export default function Home() {
  return (
    <div>
      <LanguageToggle />
      <h1>Welcome to FarmMitra (फार्म मित्र)</h1>
      <p>Connecting Farmers directly to Vendors</p>
      <Link href="/crop-listings">View Crop Listings</Link>
    </div>
  );
}