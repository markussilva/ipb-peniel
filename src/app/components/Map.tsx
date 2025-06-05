"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix para ícones do Leaflet no Next.js
const icon = L.icon({
  iconUrl: "/images/marker-icon.png",
  iconRetinaUrl: "/images/marker-icon-2x.png",
  shadowUrl: "/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Coordenadas CORRIGIDAS da igreja em Cuiabá/MT
const CHURCH_LOCATION = {
  lat: -15.608420921798722, // Latitude corrigida para Cuiabá
  lng: -56.120559303466024, // Longitude corrigida para Cuiabá
};

interface MapProps {
  onLoad?: () => void;
}

export default function Map({ onLoad }: MapProps) {
  useEffect(() => {
    // Notifica quando o mapa estiver carregado
    onLoad?.();
  }, [onLoad]);

  return (
    <MapContainer
      center={[CHURCH_LOCATION.lat, CHURCH_LOCATION.lng]}
      zoom={17}
      style={{ height: "100%", width: "100%" }}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[CHURCH_LOCATION.lat, CHURCH_LOCATION.lng]} icon={icon}>
        <Popup>
          Igreja Presbiteriana do Brasil - Peniel
          <br />
          Rua Custódio de Melo, 303
          <br />
          Cidade Alta - Cuiabá/MT
        </Popup>
      </Marker>
    </MapContainer>
  );
}
