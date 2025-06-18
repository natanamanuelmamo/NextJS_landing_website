'use client';

import { useEffect, useState } from 'react';

export default function ProductHighlights({ description }: { description: string }) {
  const [displayedText, setDisplayedText] = useState('');
  const typingSpeed = 30; // ms per character (adjust for faster/slower effect)

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      setDisplayedText((prev) => prev + description[currentIndex]);
      currentIndex++;
      if (currentIndex === description.length) {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [description]);

  return (
    <div className="border rounded-lg p-6 mt-6 shadow-md">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Product Highlights</h2>
      <p className="text-gray-700 text-base leading-relaxed whitespace-pre-wrap min-h-[100px]">
        {displayedText}
      </p>
    </div>
  );
}
