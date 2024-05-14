import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography, Container } from "@mui/material";
import MapRoute from "../Maps/Route";

export default function MapView() {
  const { routeId } = useParams();
  const [mapRoute, setMapRoute] = useState([]);
  const [routeName, setMapName] = useState([]);
  const [routeOrigin, setOrigin] = useState([]);
  const [routeDestination, setDestination] = useState([]);

  useEffect(() => {
    fetch(`/routes/${routeId}`)
      .then((res) => res.json())
      .then((data) => setMapRoute(data.mapRoute))
      .then((data) => setMapName(data.routeNumber))
      .then((data) => setOrigin(data.origin))
      .then((data) => setDestination(data.destination))
      .catch((error) => console.error("Error fetching map route:", error));
  }, [routeId]);

  return (
    <div>
      <Container maxWidth="xl">
        <MapRoute
          mapRoutes={mapRoute}
          routeName={routeName}
          routeOrigin={routeOrigin}
          routeDestination={routeDestination}
        />
      </Container>
    </div>
  );
}
