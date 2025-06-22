'use client';

import { useEffect, useRef } from 'react';

const Map = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.google || !mapRef.current) return;

    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: 9.0367, lng: 38.7520 }, // Piassa, Addis Ababa
      zoom: 15,
    });

    new window.google.maps.Marker({
      position: { lat: 9.0367, lng: 38.7520 },
      map,
      title: 'Our Office - Piassa',
    });
  }, []);

  return (
    <div ref={mapRef} style={{ width: '100%', height: '100%' }} />
  );
};

export default Map;
