import React, { useState } from "react";
import { MapContainer, TileLayer, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Typography, SwipeableDrawer, IconButton } from "@mui/material";
import { isMobileOnly } from "react-device-detect";
import { KeyboardArrowUp, Close } from "@mui/icons-material";

export default function MapRoute({ mapRoutes, routeDetails }) {
  const centerCoordinates = { lat: 32.4675, lng: -116.9138 };
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [tabOpen, setTabOpen] = useState(true);

  const handleOpenDrawer = () => setDrawerOpen(true);
  const handleCloseDrawer = () => setDrawerOpen(false);

  const handleToggleTab = () => setTabOpen(!tabOpen);

  return (
    <>
      <MapContainer
        center={centerCoordinates}
        scrollWheelZoom={false}
        zoom={11.8}
        style={{ width: "100%", height: "calc(100vh - 5rem)" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
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
              height: tabOpen ? "40px" : "60px",
              backgroundColor: "#ffffff",
              borderTop: "1px solid #ccc",
              cursor: "pointer",
              zIndex: 1000,
            }}
            onClick={handleToggleTab}
          >
            <Typography
              variant="body2"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              {tabOpen ? "Desliza hacia arriba" : "Ver más información"}
              <KeyboardArrowUp
                style={{ transform: `rotate(${tabOpen ? "180deg" : "0deg"})` }}
              />
            </Typography>
          </div>
          {/* SwipeableDrawer */}
          <SwipeableDrawer
            anchor="bottom"
            open={drawerOpen}
            onClose={handleCloseDrawer}
            onOpen={handleOpenDrawer}
            style={{ zIndex: 999 }}
          >
            <div style={{ padding: "1rem" }}>
              <IconButton
                style={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}
                onClick={handleCloseDrawer}
              >
                <Close />
              </IconButton>
              <Typography variant="h5">
                Información adicional de la ruta
              </Typography>
              <Typography>Ruta {routeDetails.routeNumber}</Typography>
              <Typography>
                Origen: {routeDetails.origin} - Destino: {routeDetails.destination}
              </Typography>
            </div>
          </SwipeableDrawer>
        </>
      )}
    </>
  );
}
