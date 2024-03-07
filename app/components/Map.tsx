"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

const Map = () => {
  return (
    <div className="map-wrap bg-[#333333] overflow-hidden z-[5] rounded-lg border-2 border-[#333333] max-w-[1000px] self-center w-full">
      <MapContainer center={[38.00829, 23.67664]} zoom={13}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[38.00829, 23.67664]}>
          <Popup>Ξυλοεφαρμογές</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
