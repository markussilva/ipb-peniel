'use client'

import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Fix para ícones do Leaflet no Next.js
const icon = L.icon({
  iconUrl: '/images/marker-icon.png',
  iconRetinaUrl: '/images/marker-icon-2x.png',
  shadowUrl: '/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

// Coordenadas da igreja (exemplo)
const CHURCH_LOCATION = {
  lat: -23.550520, // Substitua pela latitude real
  lng: -46.633308, // Substitua pela longitude real
}

interface MapProps {
  onLoad?: () => void
}

export default function Map({ onLoad }: MapProps) {
  useEffect(() => {
    // Notifica quando o mapa estiver carregado
    onLoad?.()
  }, [onLoad])

  return (
    <MapContainer
      center={[CHURCH_LOCATION.lat, CHURCH_LOCATION.lng]}
      zoom={15}
      style={{ height: '100%', width: '100%' }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={[CHURCH_LOCATION.lat, CHURCH_LOCATION.lng]}
        icon={icon}
      >
        <Popup>
          Igreja Presbiteriana do Brasil - Peniel
          <br />
          Rua Exemplo, 123
        </Popup>
      </Marker>
    </MapContainer>
  )
} 