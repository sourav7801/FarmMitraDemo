import React from 'react';
import cropData from '../data/crops.json';
import LanguageToggle from '../components/LanguageToggle';

export default function CropListings() {
  return (
    <div>
      <LanguageToggle />
      <h1>Live Crop Listings</h1>
      <ul>
        {cropData.map((crop, index) => (
          <li key={index}>
            <strong>{crop.cropName}</strong> - {crop.qty} - {crop.price} - {crop.state} ({crop.availability})
          </li>
        ))}
      </ul>
    </div>
  );
}