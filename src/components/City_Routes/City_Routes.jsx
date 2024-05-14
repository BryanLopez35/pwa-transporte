import React, { useState, useEffect } from "react";
import { Grid, Typography, Container } from "@mui/material";
import RouteCard from "../Card/RouteCard";
import SearchRoutes from "./SearchRoutes";
import { Link } from "react-router-dom";

export default function CityRoutes() {
  const [routes, setRoutes] = useState([]);
  const [stops, setStops] = useState([]);
  const [selectedStops, setSelectedStops] = useState([]);
  const [selectedRoute, setSelectedRoute] = useState(null);

  useEffect(() => {
    fetch("/routes")
      .then((res) => res.json())
      .then((data) => {
        const allStops = data.reduce(
          (acc, route) => [...acc, ...route.stops],
          []
        );
        const uniqueStops = Array.from(new Set(allStops));
        setStops(uniqueStops);
        setRoutes(data);
      })
      .catch((error) => console.error("Error fetching routes:", error));
  }, []);

  const handleSearch = (selectedStops, selectedRoute) => {
    setSelectedStops(selectedStops);
    setSelectedRoute(selectedRoute);
  };

  const filteredRoutes = routes.filter((route) => {
    if (!selectedRoute) return true;
    const stopsArray = Array.isArray(selectedStops) ? selectedStops : [];
    return (
      route.stops.includes(selectedRoute) &&
      stopsArray.every((stop) => route.stops.includes(stop))
    );
  });

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        position: "relative",
        backgroundColor: "#161b22",
      }}
    >
      <Container
        component="main"
        maxWidth="lg"
        style={{ margin: "122px auto" }}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          style={{
            color: "#fff",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            position: "relative",
            marginBottom: "26px",
          }}
        >
          <span style={{ fontWeight: "bold" }}>Rutas</span>
        </Typography>
        <SearchRoutes stops={stops} routes={routes} onSearch={handleSearch} />
        <Grid container spacing={2} justifyContent="center" maxWidth="lg">
          {filteredRoutes.map((route, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Link to={`/mapa/${route.routeNumber}`}>
                <RouteCard
                  routeNumber={route.routeNumber}
                  type={route.type}
                  concession={route.concession}
                  origin={route.origin}
                  destination={route.destination}
                  stops={route.stops}
                  mapRoute={route.mapRoute}
                  schedule={route.schedule}
                  img={route.img}
                  normalPrice={route.normalPrice}
                  preferredPrice={route.preferredPrice}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
