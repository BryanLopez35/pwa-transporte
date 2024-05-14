import React from "react";
import { MapContainer, TileLayer, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Typography } from "@mui/material";

export default function MapRoute({ mapRoutes, routeDetails }) {
  // Coordenadas aproximadas del centro de Tijuana
  const centerCoordinates = { lat: 32.4675, lng: -116.9138 };

  // Obtener la primera y última coordenada del array de rutas
  //const firstCoord = mapRoutes[0];
  //const lastCoord = mapRoutes[mapRoutes.length - 1];

  return (
    <MapContainer
      center={centerCoordinates}
      zoom={11.8}
      style={{ width: "100%", height: "calc(100vh - 5rem)" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* Dibujar la ruta utilizando la capa Polyline */}
      <Polyline
        positions={mapRoutes.map((coord) => [coord.lat, coord.lon])}
        color="blue" // Puedes ajustar el color según tu preferencia
        weight={4} // Ancho de la línea en píxeles
      />
      <div className="leaflet-top leaflet-right leaflet-control leaflet-bar map-legend">
        <Typography>
          Ruta {routeDetails.routeNumber}: {routeDetails.origin} -{" "}
          {routeDetails.destination}
        </Typography>
      </div>
    </MapContainer>
  );
}
