import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Polyline,
  Marker,
  Popup,
} from "react-leaflet";
import { Typography, SwipeableDrawer } from "@mui/material";
import { isMobileOnly } from "react-device-detect";
import RouteInfoCard from "../Card/RouteInfoCard";

// Función para calcular la distancia entre dos puntos en coordenadas (latitud, longitud)
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radio de la Tierra en kilómetros
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distancia en kilómetros
  return distance;
}

export default function MapRoute({ mapRoutes, routeDetails }) {
  const centerCoordinates = { lat: 32.4675, lng: -116.9138 };
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [userLocation, setUserLocation] = useState(null);

  const handleToggleDrawer = () => setDrawerOpen(!drawerOpen);
  const handleCloseDrawer = () => setDrawerOpen(false);

  // Obtener la ubicación del usuario al cargar el componente
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ lat: latitude, lng: longitude });
      },
      (error) => {
        console.error("Error getting user location:", error);
      }
    );
  }, []);

  // Calcular la distancia total de la ruta
  const totalDistance = mapRoutes
    .reduce((total, current, index, array) => {
      if (index < array.length - 1) {
        const { lat: lat1, lon: lon1 } = current;
        const { lat: lat2, lon: lon2 } = array[index + 1];
        return total + calculateDistance(lat1, lon1, lat2, lon2);
      }
      return total;
    }, 0)
    .toFixed(0);

  return (
    <>
      <MapContainer
        center={userLocation || centerCoordinates} // Utilizar la ubicación del usuario si está disponible, de lo contrario, usar coordenadas predeterminadas
        scrollWheelZoom={false}
        zoom={10.5}
        style={{ width: "100%", height: "calc(100vh - 5rem)" }}
        attributionControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {userLocation && (
          <Marker position={userLocation}>
            <Popup>Tu ubicación</Popup>
          </Marker>
        )}
        {/* Mostrar el inicio de la ruta */}
        {mapRoutes.length > 0 && (
          <Marker position={[mapRoutes[0].lat, mapRoutes[0].lon]}>
            <Popup>Inicio del Circuito</Popup>
          </Marker>
        )}
        {/* Mostrar el fin de la ruta */}
        {mapRoutes.length > 0 && (
          <Marker
            position={[
              mapRoutes[mapRoutes.length - 1].lat,
              mapRoutes[mapRoutes.length - 1].lon,
            ]}
          >
            <Popup>Fin del Circuito</Popup>
          </Marker>
        )}
        <Polyline
          positions={mapRoutes.map((coord) => [coord.lat, coord.lon])}
          color="blue"
          weight={4}
        />
        <div className="leaflet-top leaflet-right leaflet-control leaflet-bar map-legend">
          <Typography>
            Ruta {routeDetails.routeNumber}: {routeDetails.origin} -{" "}
            {routeDetails.destination}
          </Typography>
        </div>
      </MapContainer>
      {isMobileOnly && (
        <>
          {/* Pestaña deslizable */}
          <div
            style={{
              position: "fixed",
              bottom: 0,
              left: 0,
              right: 0,
              height: drawerOpen ? "40px" : "40px",
              backgroundColor: "#ffffff",
              borderTop: "1px solid #ccc",
              cursor: "pointer",
              zIndex: 999,
            }}
            onClick={handleToggleDrawer}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <Typography variant="body2">
                Ver Información de la Ruta
              </Typography>
            </div>
          </div>
          {/* SwipeableDrawer */}
          <SwipeableDrawer
            anchor="bottom"
            open={drawerOpen}
            onClose={handleCloseDrawer}
            onOpen={handleToggleDrawer}
          >
            <div className="p-6 space-y-6">
              <RouteInfoCard
                routeDetails={routeDetails}
                totalDistance={totalDistance}
              />
            </div>
          </SwipeableDrawer>
        </>
      )}
    </>
  );
}
