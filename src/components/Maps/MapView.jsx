import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "@mui/material";
import MapRoute from "../Maps/Route";

export default function MapView() {
  const { routeId } = useParams();
  const [mapRoute, setMapRoute] = useState([]);
  const [routeDetails, setRouteDetails] = useState({});

  useEffect(() => {
    fetch(`https://api-transporte-tijuana.onrender.com/api/routes/${routeId}`)
      .then((res) => res.json())
      .then((data) => {
        setMapRoute(data.mapRoute);
        setRouteDetails({
          routeNumber: data.routeNumber,
          origin: data.origin,
          destination: data.destination,
        });
      })
      .catch((error) => console.error("Error fetching map route:", error));
  }, [routeId]);

  return (
    <div>
      <Container maxWidth="xl">
        <MapRoute mapRoutes={mapRoute} routeDetails={routeDetails} />
      </Container>
    </div>
  );
}
