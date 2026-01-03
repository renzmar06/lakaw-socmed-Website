"use client";

import React, { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";

interface TourMapProps {
  lat?: number | string;
  lng?: number | string;
  title?: string;
}

export default function TourMap({ lat, lng, title }: TourMapProps) {
  const [MapComponent, setMapComponent] = useState<React.ReactNode>(null);

  useEffect(() => {
    let mounted = true;

    async function loadMap() {
      if (typeof window === "undefined") return;

      const L = await import("leaflet");
      const { MapContainer, TileLayer, Marker, Popup } = await import("react-leaflet");

      // Fix default marker icons
      const iconUrl = (await import("leaflet/dist/images/marker-icon.png")).default;
      const iconRetinaUrl = (await import("leaflet/dist/images/marker-icon-2x.png")).default;
      const shadowUrl = (await import("leaflet/dist/images/marker-shadow.png")).default;

      L.Icon.Default.mergeOptions({
        iconRetinaUrl,
        iconUrl,
        shadowUrl,
      });

      const position: [number, number] = [
        parseFloat(String(lat)) || 14.5995,
        parseFloat(String(lng)) || 120.9842,
      ];

      if (!mounted) return;

      setMapComponent(
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>{title || "Tour Location"}</Popup>
          </Marker>
        </MapContainer>
      );
    }

    loadMap();

    return () => {
      mounted = false;
    };
  }, [lat, lng, title]);

  return (
    <div className="w-full h-[400px] rounded-xl overflow-hidden border-2 border-slate-200 bg-slate-100">
      {MapComponent ?? (
        <div className="w-full h-full flex items-center justify-center text-slate-400">
          Loading map…
        </div>
      )}
    </div>
  );
}
